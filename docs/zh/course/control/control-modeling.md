---
description: 10.1 控制信号建模——用 DORA 数据流描述控制指令的形态：一条消息里放什么数据、节点间怎么收发，用一个极简 demo 跑通从键盘输入到控制指令打印的完整回路。
---

# 10.1 控制信号建模

到第九章为止，小莫已经长出了神经（收发消息）、眼睛（视觉）、耳朵和嘴（语音），还练出了强壮的体力（Rust 高性能）。现在，该让它**动起来了**。

你可能会想："控制信号？不就是把'动一下'三个字发过去吗？"远没有那么简单。这一节我们要回答三个问题：

1. 控制信号在 DORA 数据流中**长什么样**
2. 节点之间**怎么收发**控制指令
3. 从键盘输入到控制指令的**完整回路**是怎样的

我们先不碰 PyBullet，用一个最简 demo 跑通"键盘→DORA→控制指令"的回路。这个 demo 跑通了，10.2 接入真正的仿真引擎就是水到渠成的事。

## 学习目标

学完本节，你将能够：

- 理解控制信号在 DORA 中的数据形态：**一组有结构的数字**
- 手写一个发送控制指令的节点和一个接收并解析的节点
- 用 `dataflow.yml` 把两个节点串联起来并跑通

## 前置要求

- 完成[第四章](../python-node/)，熟练写 Python 节点和 `dataflow.yml`
- 完成[第六章](../communication/)，理解 Topic（发布订阅）通信模式
- 理解 `pa.array()` 发送数字数组（[第五章](../data/) 5.2 节）

## 控制信号长什么样

### 黑板比喻

想象教室里的黑板。老师走到黑板前，写了这样一行字：

> 小莫注意：左臂肩膀转 30 度，肘弯 45 度。

翻译成小莫能"看懂"的控制信号，就是：

```python
[1, 30, 45]
```

第一个数字 `1` 是**关节编号**（肩膀=1，肘=2...），后面是**目标角度**。这只是众多表示方式之一——你可以选择只发角度，约定好"第 0 个是肩、第 1 个是肘"，也可以像这样带上关节号。

关键认知：
- **控制信号 = 一组有结构的数字**，通过 DORA Topic 发送
- **谁来读**：仿真节点（10.2）或真实硬件驱动节点（10.3）
- **格式没有唯一标准**：你定义，你在节点中解析，两边约定好就行

### 关节空间 vs 笛卡尔空间

控制机械臂有两种基本范式。本章先用最简单的：

| 范式 | 数据形态 | 例子 | 本章使用 |
|------|---------|------|----------|
| **关节空间** | `[θ₁, θ₂, θ₃, θ₄, θ₅]` | `[0.5, -0.3, 1.0, -0.7, 0.0]`（弧度） | ✅ 10.1 / 10.2 / 项目⑦基础 |
| **笛卡尔空间** | `[x, y, z, roll, pitch, yaw]` | `[0.3, -0.1, 0.5, 0, 0, 0]` | 项目⑦进阶 / 第十一章 |

关节空间直奔"关节动多少度"，不需要理解坐标变换。入门就用它。

## 最简 Demo：键盘 → DORA → 打印

动手写一个只有两个节点的控制回路：一个节点从命令行接收你的打字命令，另一个节点接收并打印。不涉及仿真器，纯 DORA 数据流。

### dataflow.yml

```yaml
nodes:
  - id: keyboard_control
    custom:
      source: keyboard_control.py
      inputs:
        tick: dora/timer/millis/100     # 每 100ms 读取一次键盘
      outputs:
        - joint_cmd

  - id: cmd_receiver
    custom:
      source: cmd_receiver.py
      inputs:
        joint_cmd: keyboard_control/joint_cmd
```

`tick` 定时器每 100ms 触发一次键盘节点的输入事件，节奏够用。你打字再快也超不过 10 次/秒。

### 控制发送节点：keyboard_control.py

```python
# keyboard_control.py —— 从命令行读取控制指令，通过 DORA 发送
import pyarrow as pa
from dora import Node


def main():
    node = Node()

    for event in node:
        if event["type"] == "INPUT" and event["id"] == "tick":
            # 等待用户输入控制指令
            # 格式：关节号 角度，如 "1 30" 表示关节1转到30度
            cmd = input("控制指令（关节号 角度）> ")
            if not cmd.strip():
                continue

            parts = cmd.strip().split()
            if len(parts) != 2:
                print("格式错误，请用：关节号 角度", flush=True)
                continue

            joint_idx = int(parts[0])
            angle = float(parts[1])

            # 发送控制指令
            node.send_output(
                "joint_cmd",
                pa.array([joint_idx, angle]),
            )
            print(f"  → 已发送：关节 {joint_idx} → {angle}°", flush=True)

        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

:::info 小莫说
`pa.array([joint_idx, angle])` 就是我收到的"移动指令"——两个数字，第一个告诉我动哪个关节，第二个告诉我动多少度。具体怎么动，那是仿真引擎的事（10.2 节）。
:::

### 控制接收节点：cmd_receiver.py

```python
# cmd_receiver.py —— 接收控制指令并打印（10.2 将替换为 PyBullet 仿真节点）
import pyarrow as pa
from dora import Node


def main():
    node = Node()

    for event in node:
        if event["type"] == "INPUT":
            data = event["value"].to_pylist()

            joint_idx = data[0]
            angle = data[1]

            print(
                f"收到控制指令：关节 {joint_idx} → {angle}°",
                flush=True,
            )

        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

### 运行

```bash
dora run dataflow.yml
```

在键盘控制终端依次输入：

```
控制指令（关节号 角度）> 0 45
  → 已发送：关节 0 → 45.0°
控制指令（关节号 角度）> 3 -30
  → 已发送：关节 3 → -30.0°
```

接收端输出：

```
收到控制指令：关节 0 → 45.0°
收到控制指令：关节 3 → -30.0°
```

## 代码详解

### 指令格式选型

本节用 `[关节号, 角度]` 两个数字。只选两个原因：

1. **简单到一眼看懂**：不需要查文档就能猜出 `[0, 45]` 是"把第 0 号关节转到 45 度"
2. **每次一个关节**：对初学者来说，一次只改一个关节直观；10.2 会扩展为一次发 5 个关节的角度数组

如果你的应用需要更高的通信效率，可以一次发所有关节：`pa.array([θ₀, θ₁, θ₂, θ₃, θ₄])`。但我们按"先跑通再优化"的原则，从最简单开始。

### Turtle：键盘输入 vs 定时器驱动

```yaml
inputs:
  tick: dora/timer/millis/100
```

`tick` 定时器每 100ms 触发一次。触发后执行 `input()` 等待用户输入。输入完成后回到事件循环，等待下一次 tick。

一个常见疑问：**`input()` 会阻塞住，那不是把定时器也卡住了吗？**

答案：不会。DORA 的事件循环是**事件驱动**的，`input()` 在等待用户输入时，定时器的下一次事件会被排到队列里。用户敲完回车后，下一次 tick 事件马上被处理。这个阻塞不会影响数据流的整体运行——其他节点完全不受影响。

如果担心输入等待太久，可以在终端里直接 `Ctrl+C` 停止数据流。

## 动手练习

:::tip 练习：扩展指令类型
修改 `keyboard_control.py` 和 `cmd_receiver.py`，增加两种新指令类型：

1. **批量移动**：一次发送 5 个关节角度，格式为 `batch 0 0.5 0.3 -1.0 0.7 0.0`
2. **回零**：输入 `home` 将所有关节角设为零（发送 `[-1, 0]`，约定 `-1` 表示回零命令）

提示：发送端在 `pa.array([-1, 0])` 中约定 `joint_idx=-1` 为特殊标记；接收端判断 `data[0] == -1` 时打印"回零指令"而不是"关节 X"。
:::

:::details 参考答案
```python
# 修改后的 keyboard_control.py 输入处理部分
cmd = input("控制指令 > ")
if not cmd.strip():
    continue

if cmd.strip() == "home":
    node.send_output("joint_cmd", pa.array([-1, 0]))
    print("  → 已发送：回零指令", flush=True)
    continue

parts = cmd.strip().split()
if parts[0] == "batch":
    angles = [float(a) for a in parts[1:]]
    if len(angles) != 5:
        print("批量移动需要 5 个关节角度", flush=True)
        continue
    node.send_output("joint_cmd", pa.array(angles))
    print(f"  → 已发送：批量移动 {angles}", flush=True)
else:
    joint_idx = int(parts[0])
    angle = float(parts[1])
    node.send_output("joint_cmd", pa.array([joint_idx, angle]))
    print(f"  → 已发送：关节 {joint_idx} → {angle}°", flush=True)
```
:::

## 常见问题 FAQ

:::warning 输入不响应
确认焦点在键盘控制终端窗口。DORA 启动后每个节点有自己的输出——数据流终端、键盘控制终端、接收终端。输入命令时确保光标在 `控制指令> ` 所在的窗口。
:::

:::warning `dora/timer/millis/100` 拼写错误
定时器语法必须准确：`dora/timer/millis/N`（毫秒）、`dora/timer/secs/N`（秒）或 `dora/timer/hz/N`（频率）。斜杠分隔，不可遗漏。详见 [4.4](../python-node/timer-params)。
:::

## 小结

- **控制信号 = 一组有结构的数字**，通过 DORA Topic 在节点间传递。
- 关节空间控制最简单：直接发关节角度数组。
- `dora/timer/...` 定时器驱动的节奏控制，不需要在代码里写 `time.sleep`。
- 键盘输入节点 + 接收节点的**分离架构**是本章所有内容的基础。

下一节，我们把 `cmd_receiver.py` 升级为真正的 **PyBullet 仿真节点**——收到指令后，机械臂在 3D 窗口中真的动起来。
