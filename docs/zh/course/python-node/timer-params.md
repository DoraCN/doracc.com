---
description: 4.4 定时器与参数——讲透 DORA 内置定时器（millis/secs/hz）的用法与选择，并用 env 环境变量给节点传参数，让同一份代码通过配置改变行为。
---

# 4.4 定时器与参数

前面三节，你已经会写节点、连数据流、跑起来了。这一节我们补上两块让节点**更实用、更灵活**的拼图：

- **定时器**：怎么让节点"按节奏"自动干活，以及不同写法的区别；
- **参数**：怎么不改代码、只改配置，就让同一个节点表现不同——这是专业开发的关键习惯。

学完这节，第四章就圆满了，小莫的 **✍️ 会表达** 能力就正式点亮。

## 学习目标

学完本节，你将能够：

- 熟练使用三种定时器写法：`millis`、`secs`、`hz`，并知道何时用哪种；
- 理解定时器的 `tick` 事件本质上也是一种 `INPUT`；
- 用 `env` 给节点传参数，在代码里用 `os.getenv` 读取；
- 明白"参数化"为什么能让你的节点更通用。

## 前置要求

- 已完成 [4.3](./connect-node)，能跑通 sender → echo → printer 数据流。

## 一、定时器：让节点按节奏干活

### 定时器是"数据流内置的闹钟"

回想 4.2，我们没有在代码里写 `time.sleep`，而是靠 `dataflow.yml` 里的一行让 sender 每半秒动一次：

```yaml
inputs:
  tick: dora/timer/millis/500
```

这个 `dora/timer/...` 就是 DORA **内置的定时器**。它不是某个节点，而是运行时提供的一个"闹钟"：**每隔一段时间，就往你指定的输入上发一个事件。**

用课堂比喻：定时器就像**教室墙上的电铃**，每隔固定时间"叮"一声，提醒某位同学"该你了"。

:::info 小莫说
为什么不用 `time.sleep` 自己数时间？因为交给 DORA 的闹钟更省心——它和整个数据流的启动、停止是协调好的。我只要专心"被叫到就干活"，不用自己盯着表。
:::

### 三种写法：millis、secs、hz

定时器有三种写法，表达的是同一件事的不同说法：

| 写法 | 含义 | 例子 | 相当于 |
|------|------|------|--------|
| `dora/timer/millis/N` | 每 **N 毫秒** 一次 | `dora/timer/millis/500` | 每 0.5 秒一次 |
| `dora/timer/secs/N` | 每 **N 秒** 一次 | `dora/timer/secs/2` | 每 2 秒一次 |
| `dora/timer/hz/N` | 每秒 **N 次**（频率） | `dora/timer/hz/60` | 每 1/60 秒一次 |

三种可以互相换算。比如"每秒 2 次"可以写成 `hz/2`，也可以写成 `millis/500`——完全等价。

:::tip 该用哪一种？
- 想直白地说"多久一次"→ 用 `millis` 或 `secs`（如日志每 5 秒打一次 → `secs/5`）。
- 想说"每秒多少次"这种**频率**→ 用 `hz`（如摄像头 30 帧 → `hz/30`，控制回路 100 次 → `hz/100`）。

选哪种只看**哪种读起来更顺**，性能上没差别。
:::

### tick 事件也是 INPUT

有个容易困惑的点要点破：**定时器发来的事件，在代码里就是一个普通的 `INPUT` 事件。**

看 sender 的代码：

```python
for event in node:
    if event["type"] == "INPUT":     # 定时器的 tick 也走这里！
        ...
```

定时器"叮"一声，节点收到的就是一个 `event["type"] == "INPUT"`、且 `event["id"] == "tick"` 的事件。所以如果一个节点有多个输入（有的来自定时器、有的来自别的节点），要用 `event["id"]` 区分：

```python
for event in node:
    if event["type"] == "INPUT":
        if event["id"] == "tick":
            # 定时器到点了，做周期性的事
            ...
        elif event["id"] == "data":
            # 收到别的节点发来的数据
            ...
    elif event["type"] == "STOP":
        break
```

:::warning tick 事件的 value 通常没意义
定时器事件也带一个 `event["value"]`，但它只是个占位，通常**不含有用数据**——定时器的意义在于"到点了"这个**时机**本身，而不是它带来的内容。别去 `to_pylist()` 它的 value。
:::

### 动手试试改频率

把 4.3 的 `dataflow.yml` 里 sender 的定时器从 `millis/500` 改成 `secs/2`：

```yaml
  - id: sender
    path: sender.py
    inputs:
      tick: dora/timer/secs/2      # 改成每 2 秒一次
    outputs:
      - data
```

重新 `dora run dataflow.yml`，你会看到 printer 从"每半秒一行"变成"**每两秒一行**"。代码一个字没动，只改了配置——这就是数据流的灵活之处。

## 二、参数：不改代码，改行为

### 问题：写死的值不够灵活

看 4.2 的 sender，它发的是"开/关"。假如现在想让它发别的词，比如"红/绿"（当红绿灯用），你得**改代码**。如果又想要"上/下"呢？再改一次？

每换一个用途就改一次代码，很笨。专业做法是：**把这些会变的值，做成"参数"，从外部传进来。** 这样同一份代码，配置不同就有不同行为。

### 用 `env` 传参数，用 `os.getenv` 读

DORA 里给节点传参数，最常用、最简单的方式是 **环境变量（env）**。分两步：

**第一步：在 `dataflow.yml` 里用 `env` 写参数**

```yaml
  - id: sender
    path: sender.py
    inputs:
      tick: dora/timer/millis/500
    outputs:
      - data
    env:
      ON_TEXT: 红          # 自定义参数：开的时候显示什么
      OFF_TEXT: 绿         # 自定义参数：关的时候显示什么
```

**第二步：在 `sender.py` 里用 `os.getenv` 读出来**

```python
import os                     # 读环境变量要用 os
import pyarrow as pa
from dora import Node


def main():
    node = Node()

    # 从环境变量读参数；第二个值是"没配置时用的默认值"
    on_text = os.getenv("ON_TEXT", "开")     # 没配就默认"开"
    off_text = os.getenv("OFF_TEXT", "关")   # 没配就默认"关"

    state = False
    for event in node:
        if event["type"] == "INPUT":
            state = not state
            text = on_text if state else off_text
            node.send_output("data", pa.array([text]))
        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

现在：

- YAML 里配 `ON_TEXT: 红 / OFF_TEXT: 绿` → printer 打印"红/绿"；
- 改成 `上 / 下` → 打印"上/下"；
- **完全不配 `env`** → 用默认值"开/关"（多亏了 `os.getenv` 的第二个参数）。

**代码一次都没改，行为却能随配置变化。** 这就是参数化的威力。

:::info 小莫说
就像同一只手，戴上不同的手套能做不同的事。参数就是给节点"戴手套"——零件还是那个零件，换套配置就有新本领！
:::

### 参数是文字，数字要自己转

有一个**极其常见的坑**要提醒你：**环境变量读出来永远是字符串（文字）**，哪怕你在 YAML 里写的是数字。

```yaml
    env:
      COUNT_STEP: 5          # 你以为是数字 5
```

```python
step = os.getenv("COUNT_STEP", "1")   # 读出来是字符串 "5"，不是数字 5！
step = int(step)                       # 必须用 int() 转成整数才能做加法
# 或者一行搞定：
step = int(os.getenv("COUNT_STEP", "1"))
```

如果忘了转，`"5" + 1` 会直接报错（字符串不能和数字相加）。**需要数字时，记得用 `int()`（整数）或 `float()`（小数）转一下。**

:::warning 小数用 float，整数用 int
- 整数（个数、索引）：`int(os.getenv("BATCH_SIZE", "30"))`
- 小数（速度、比例）：`float(os.getenv("SPEED", "1.5"))`

这在真实节点里非常常见，比如摄像头节点读 `CAMERA_INDEX`、批处理节点读 `BATCH_SIZE`，都要转类型。
:::

## 综合示例：一个可配置的计数器

把定时器和参数结合起来，我们做一个"可配置计数器"节点，体会两者一起用的感觉：

```python
# counter.py —— 可配置的计数器
import os
import pyarrow as pa
from dora import Node


def main():
    node = Node()

    start = int(os.getenv("START", "0"))     # 从几开始数
    step = int(os.getenv("STEP", "1"))       # 每次加多少

    count = start
    for event in node:
        if event["type"] == "INPUT":
            node.send_output("data", pa.array([count]))
            count = count + step             # 按配置的步长递增
        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

配套 YAML：

```yaml
nodes:
  - id: counter
    path: counter.py
    inputs:
      tick: dora/timer/secs/1        # 每秒数一次
    outputs:
      - data
    env:
      START: 100                     # 从 100 开始
      STEP: 10                       # 每次加 10
  - id: printer
    path: printer.py
    inputs:
      data: counter/data
```

跑起来，printer 会每秒打印：`[100]`、`[110]`、`[120]`……改一下 `START`/`STEP`/定时器频率，行为立刻不同，代码纹丝不动。

## 动手练习

:::tip 练习：做一个"心跳"节点
写一个节点，每隔可配置的秒数，就打印一句可配置的话（比如每 3 秒打印 "小莫还活着~"）。要求秒数和那句话都来自 `env` 参数。
:::

:::details 参考答案
`heartbeat.py`：

```python
import os
from dora import Node

def main():
    node = Node()
    message = os.getenv("MESSAGE", "小莫还活着~")
    for event in node:
        if event["type"] == "INPUT":
            print(message, flush=True)
        elif event["type"] == "STOP":
            break

if __name__ == "__main__":
    main()
```

YAML（秒数通过定时器配置，消息通过 env）：

```yaml
nodes:
  - id: heartbeat
    path: heartbeat.py
    inputs:
      tick: dora/timer/secs/3      # 每 3 秒一次
    outputs: []
    env:
      MESSAGE: 小莫还活着~
```

想改成每 5 秒、说别的话？只动 YAML 就行。
:::

## 常见报错 FAQ

:::warning `TypeError: can only concatenate str (not "int") to str`
典型的"忘了转类型"。`os.getenv` 读出来是字符串，做数学运算前要 `int()` 或 `float()`。
:::

:::warning 定时器不触发、节点一直不动
检查 `dora/timer/...` 的拼写：是 `millis`/`secs`/`hz` 三者之一，斜杠分隔，最后是数字。写错（比如 `dora/timer/ms/500`）定时器不会生效。
:::

:::warning 改了 env 但行为没变
1. 确认改的是**正确节点**的 `env`；
2. 确认代码里 `os.getenv` 的**键名和 YAML 里完全一致**（区分大小写，`ON_TEXT` ≠ `on_text`）；
3. 改完 YAML 要重新 `dora run`。

:::

## 小结

- **定时器**是数据流内置的"闹钟"：`millis`（毫秒）/`secs`（秒）/`hz`（每秒次数）三种写法等价，选顺口的用。
- 定时器的 `tick` 在代码里就是一个 `INPUT` 事件，多输入时用 `event["id"]` 区分。
- **参数化**用 `env`（YAML 里配）+ `os.getenv`（代码里读）：让同一份代码靠配置改变行为。
- 环境变量读出来**永远是字符串**，需要数字时记得 `int()` / `float()`。

## 本章回顾

走到这里，第四章圆满了。回头看看你都学会了什么：

- **4.1**：搞懂了节点的"三段式"一生——出生、循环、退场；
- **4.2**：亲手写出第一个 Python 节点（sender、echo）；
- **4.3**：用 `dataflow.yml` 把节点串起来，跑通第一条自己写的数据流；
- **4.4**：用定时器控制节奏、用参数让节点更通用。

:::info 小莫说
我现在会"表达"啦！不再只是运行别人写好的零件——**你能亲手给我造零件了**。下一章，我要学会处理更丰富的数据（图片、数组……），让我的表达更有内容！
:::

下一章 [第五章 · 数据的语言：Arrow](../data/)，我们会把这一章反复出现的 `pa.array` 和 `.to_pylist()` 讲透，让小莫学会处理各种各样的数据。
