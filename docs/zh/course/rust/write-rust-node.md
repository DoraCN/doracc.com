---
description: 9.2 写一个 Rust 节点——照着模板写出第一个 DORA Rust 节点，把 Rust 的三段式结构和 Python 一一对照，理解 DoraNode::init_from_env、事件循环、send_output 与 IntoArrow。
---

# 9.2 写一个 Rust 节点

上一节说好了——本课学 Rust 只求"看得懂、能照着改"。这一节我们就动手写第一个 Rust 节点。

**好消息**：DORA 节点不管什么语言，骨架都一样。你在第四章烂熟的"**连线 → 事件循环 → 收发**"三段式，在 Rust 里原样成立。你只是在学"同一件事的 Rust 说法"。

:::info 小莫说
别被 Rust 吓到！我偷偷告诉你：它和 Python 节点长得像双胞胎，只是"穿的衣服"不一样。你已经会 Python 版了，这节就是认一下它的 Rust 打扮～
:::

## 学习目标

学完本节，你将能够：

- 看懂一个 Rust DORA 节点的完整结构；
- 把 Rust 节点的每一部分和 Python 版**一一对应**起来；
- 照着模板**改出**一个自己的 Rust 节点；
- 知道 `Cargo.toml` 里要写什么依赖、怎么编译。

## 前置要求

- 完成 [9.1 何时用 Rust](./why-rust)；
- 记得第四章的 Python 三段式（[节点生命周期](../python-node/node-lifecycle)）——本节全程和它对照。

## 先看一眼：Rust 和 Python 的骨架对照

先不解释语法，直接把两种语言的最小节点放一起，你感受一下"像不像"：

<table>
<tr><th>🐍 Python（你已经会了）</th><th>🦀 Rust（新学）</th></tr>
<tr><td>

```python
from dora import Node

node = Node()

for event in node:
    if event["type"] == "INPUT":
        # 处理数据
        node.send_output("out", ...)
```

</td><td>

```rust
use dora_node_api::{DoraNode, Event};

let (mut node, mut events)
    = DoraNode::init_from_env()?;

while let Some(event) = events.recv() {
    match event {
        Event::Input { id, data, .. } => {
            // 处理数据
            node.send_output(...)?;
        }
        _ => {}
    }
}
```

</td></tr>
</table>

看出来了吗？**结构完全一样**：

| 三段式 | Python | Rust |
|--------|--------|------|
| ① 连线 | `node = Node()` | `DoraNode::init_from_env()?` |
| ② 循环 | `for event in node:` | `while let Some(event) = events.recv()` |
| ③ 判断类型 | `if event["type"] == "INPUT"` | `match event { Event::Input {..} }` |
| 发送 | `node.send_output(...)` | `node.send_output(...)?` |

**你要学的不是"新概念"，只是"新写法"。** 下面逐块拆开。

## 完整示例：一个随机数发送节点

我们照着 DORA 官方示例，写一个"每次 tick 就发一个随机数"的节点。目录结构（Rust 项目比 Python 多几个文件，别慌，下面都会解释）：

```
course/ch09-rust/
├── Cargo.toml          # 项目说明书：叫什么、依赖什么
└── src/
    └── main.rs         # 节点代码本体
```

### `src/main.rs`

```rust
// main.rs —— 一个每次 tick 就发送随机数的 Rust 节点
use dora_node_api::{
    self, DoraNode, Event, IntoArrow, dora_core::config::DataId,
};
use eyre::Result;

fn main() -> Result<()> {
    // ① 连线：连上 DORA 运行时，拿到 node 和事件流 events
    let (mut node, mut events) = DoraNode::init_from_env()?;

    // 声明一个输出的名字，叫 "random"
    let output = DataId::from("random".to_owned());

    // ② 主循环：一个一个地取事件
    while let Some(event) = events.recv() {
        // ③ 判断事件类型
        match event {
            Event::Input { id, metadata, .. } => {
                if id.as_str() == "tick" {
                    // 生成一个随机数
                    let random: u64 = fastrand::u64(..);
                    println!("发送随机数：{random}");

                    // 发送输出：名字、元数据、数据（转成 Arrow）
                    node.send_output(
                        output.clone(),
                        metadata.parameters,
                        random.into_arrow(),
                    )?;
                }
            }
            Event::Stop(_) => {
                // 收到停止信号
                println!("收到停止信号");
                break;
            }
            _ => {}   // 其它事件忽略
        }
    }

    Ok(())
}
```

### 逐块讲解（对照 Python）

**开头的 `use`——相当于 Python 的 `import`：**

```rust
use dora_node_api::{DoraNode, Event, IntoArrow, dora_core::config::DataId};
use eyre::Result;
```

- `use dora_node_api::{...}` = Python 的 `from dora import Node`，把要用的东西引进来；
- `Event` 是"事件"类型，`IntoArrow` 是"转成 Arrow 格式"的工具，`DataId` 是"输出名字"的类型；
- `eyre::Result` 用于错误处理，暂时把它当"固定写法"记住。

**① 连线：**

```rust
let (mut node, mut events) = DoraNode::init_from_env()?;
```

- 对应 Python 的 `node = Node()`；
- 区别：Rust 一次给你**两样东西**——`node`（用来发数据）和 `events`（事件流，用来收数据）。Python 里这两者都藏在 `node` 一个对象里，Rust 把它们分开了。
- `let` 相当于定义变量；`mut` 表示"这个变量后面会变"（Rust 要求你明确说明）；
- 结尾的 `?` 意思是"如果这一步出错了，就停下来报错"——是 Rust 处理错误的简洁写法。

**② 主循环：**

```rust
while let Some(event) = events.recv() {
```

- 对应 Python 的 `for event in node:`；
- `events.recv()` 取下一个事件；`while let Some(event) = ...` 的意思是"只要还能取到事件，就继续循环"。事件取完了（`None`）就自动结束。

**③ 判断事件类型——`match`：**

```rust
match event {
    Event::Input { id, metadata, .. } => { ... }
    Event::Stop(_) => { ... }
    _ => {}
}
```

- `match` 是 Rust 的"分类处理"，比 Python 的 `if/elif` 更强大也更整齐；
- `Event::Input { id, metadata, .. }` 对应 Python 判断 `event["type"] == "INPUT"`，同时把 `id`、`metadata` 取出来备用（`..` 表示"其余的先不管"）；
- `Event::Stop(_)` 对应 `event["type"] == "STOP"`；
- `_ => {}` 是"其它情况都忽略"，相当于兜底的 `else: pass`。

**发送输出：**

```rust
node.send_output(output.clone(), metadata.parameters, random.into_arrow())?;
```

- 对应 Python 的 `node.send_output("random", data)`；
- 三个参数：输出名、元数据、数据；
- `random.into_arrow()` = Python 的 `pa.array([random])`——把普通数字**转成 Arrow 格式**（还记得第五章吗，黑板上只认 Arrow）；
- `output.clone()` 的 `.clone()` 是 Rust 特有的"复制一份"，因为循环里要反复用这个名字。暂时当固定写法。

:::info 小莫说
看到 `into_arrow()` 了吗？和 Python 的 `pa.array` 是一回事——都是"把数据翻译成黑板认的字"。Rust 同学和 Python 同学，写的是同一块黑板！
:::

## `Cargo.toml`：Rust 项目的"说明书"

Python 脚本可以直接跑，但 Rust 是**编译型**语言，需要一份"项目说明书"告诉编译器：这个项目叫什么、要用哪些外部库。这份说明书就是 `Cargo.toml`：

```toml
[package]
name = "my-rust-node"        # 项目名字
version = "0.1.0"
edition = "2021"

[dependencies]
# DORA 的 Rust 节点库，锁定 1.0 RC 版本
dora-node-api = "1.0.0-rc1"
# 错误处理工具
eyre = "0.3"
# 生成随机数的小库
fastrand = "2"
```

- `[package]` 段：项目的基本信息；
- `[dependencies]` 段：要用的外部库，相当于 Python 的 `pip install` 列表；
- **`dora-node-api`** 就是 Rust 版的"DORA 库"，对应 Python 的 `from dora import Node`。

:::tip 版本锁定
本课锁定 DORA **1.0 RC**。你可以使用国内镜像加速 Rust 编译（见第二章）。
:::

## 编译并运行

Rust 节点在跑之前要**先编译**（把源码变成可执行程序）。DORA 的做法是在 `dataflow.yml` 里写一条 `build` 指令，`dora build` 时自动编译。

一个最小的 `dataflow.yml`：

```yaml
nodes:
  - id: rust-node
    build: cargo build              # 编译这个 Rust 项目
    path: target/debug/my-rust-node # 编译产物的位置（名字来自 Cargo.toml 的 name）
    inputs:
      tick: dora/timer/millis/500
    outputs:
      - random
```

- **`build: cargo build`**：`cargo` 是 Rust 的官方工具（相当于 Python 的 pip+运行器合体），`cargo build` 把源码编译成可执行文件；
- **`path: target/debug/my-rust-node`**：编译好的程序默认放在 `target/debug/` 下，名字就是 `Cargo.toml` 里的 `name`；
- 其余的 `inputs`/`outputs` 和 Python 节点**完全一样**。

然后照常两步走：

```bash
dora build dataflow.yml      # 第一次会编译 Rust，稍慢；之后有缓存会快
dora run dataflow.yml
```

:::warning 第一次编译会比较慢
Rust 首次编译要下载并编译一堆依赖，可能要等几分钟，这是**正常的**。编译产物会被缓存，之后再 build 就快了。Python 节点没有这一步，因为它不用编译——这也是 Python"随写随跑"的便利之处。
:::

## 动手练习

:::tip 练习：把"发随机数"改成"收到数字就翻倍"
照着上面的模板改一个节点：它有一个输入 `value`，每次收到一个数字，就把它**乘以 2** 再从 `doubled` 输出发出去。（对应你在第五章写过的 Python 加倍节点。）

提示：
- 读输入数据需要把 `data` 转成具体的数字类型，这一步稍有 Rust 门槛；
- 如果卡在"怎么读数据"，没关系——下一节和小项目会给你完整可运行的读输入代码。这里能改出"发送"部分就算达标。

:::

:::details 参考答案（发送部分骨架）
核心是把 `tick` 分支换成 `value` 分支，读入数字后 ×2 再发。读取 Arrow 数据的完整写法（`downcast` 成具体数组类型）会在小项目⑥里给出可直接运行的版本：

```rust
Event::Input { id, metadata, data } => {
    if id.as_str() == "value" {
        // 读取输入的数字（完整读法见小项目⑥）
        // let n: u64 = ... 从 data 里取出 ...
        let doubled = n * 2;
        node.send_output(
            DataId::from("doubled".to_owned()),
            metadata.parameters,
            doubled.into_arrow(),
        )?;
    }
}
```

现阶段你能看懂这个结构、知道"改哪里"，就完全达到了本课"最小够用"的目标。
:::

## 常见报错 FAQ

:::warning `error: linker not found` 或编译工具缺失
Rust 编译需要系统的 C 链接器等工具。若报此错，请安装所在平台的构建工具链（macOS: xcode-select --install, Linux: build-essential）。
:::

:::warning `cannot find function ... in crate`
多半是 `Cargo.toml` 里的依赖版本对不上，或 `use` 语句写错。确认 `dora-node-api = "1.0.0-rc1"`，并对照示例的 `use` 行。
:::

:::warning 改了 `main.rs` 但运行的还是旧行为
Rust 要**重新编译**才生效。改完代码记得重新 `dora build`（或 `cargo build`），再 `dora run`。这和 Python"改完直接跑"不同——编译型语言的必经步骤。
:::

## 小结

- Rust 节点和 Python 节点是**同一套三段式**：`init_from_env`（连线）→ `while let ... events.recv()`（循环）→ `match event`（判类型）→ `send_output`（收发）。
- Rust 用 **`use`** 引库（≈import）、用 **`match`** 分类事件（≈if/elif）、用 **`into_arrow()`** 转 Arrow（≈`pa.array`）。
- Rust 是**编译型**语言：需要 `Cargo.toml` 说明依赖，并在 `dataflow.yml` 里用 `build: cargo build` 先编译再运行。
- 你不用精通 Rust，**看懂结构、能照着改**就达到了本课目标。

下一节，我们让 Rust 节点和 Python 节点在**同一条数据流里协作**——这才是混合编程真正的威力。
