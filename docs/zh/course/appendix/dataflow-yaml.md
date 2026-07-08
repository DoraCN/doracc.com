---
description: dataflow.yml 速查——数据流配置文件的结构与常用字段快速参考。
---

# dataflow.yml 速查

> `dataflow.yml` 就是数据流的"值日表"：声明有哪些**节点**、它们各自**读什么、写什么**。

## 最小结构

```yaml
nodes:              # 整个数据流由一组节点组成
  - id: camera      # 节点的唯一名字
    build: pip install opencv-video-capture   # 准备该节点（装依赖/编译），可选
    path: opencv-video-capture                # 怎么启动这个节点（命令或可执行文件）
    inputs:
      tick: dora/timer/millis/20              # 每 20 毫秒触发一次
    outputs:
      - image                                 # 这个节点会往外写一个叫 image 的输出
```

## 节点常用字段

| 字段 | 必填 | 作用 |
|------|:---:|------|
| `id` | ✅ | 节点唯一标识，别的节点靠它引用 |
| `path` | 多数 | 如何启动节点：一个命令、脚本或可执行文件路径 |
| `build` | 可选 | 启动前的准备命令（如 `pip install ...`、`cargo build ...`） |
| `inputs` | 可选 | 该节点要读取的输入（见下） |
| `outputs` | 可选 | 该节点会写出的输出名列表 |
| `args` | 可选 | 传给节点的启动参数 |
| `env` | 可选 | 为该节点设置的环境变量 |
| `hub` | 可选 | 从节点仓库（Node Hub）引入现成节点，如 `hub: dora-yolo` |
| `git` | 可选 | 从 git 仓库获取节点 |

## 输入怎么连（inputs）

输入写成 `本节点的输入名: 来源`。来源有两类：

```yaml
inputs:
  image: camera/image          # 来自 camera 节点的 image 输出（节点名/输出名）
  tick: dora/timer/millis/100  # 内置定时器：每 100 毫秒触发一次
```

- **来自别的节点**：`节点id/输出名`。
- **内置定时器**：`dora/timer/millis/N`（毫秒）或 `dora/timer/secs/N`（秒）。

## 输出怎么写（outputs）

```yaml
outputs:
  - bbox        # 只是声明"我会写一个叫 bbox 的输出"
  - image
```

节点在代码里用 `send_output("bbox", ...)` 往这些输出上"写黑板"。

## 一个完整的小例子

```yaml
nodes:
  - id: camera
    build: pip install opencv-video-capture
    path: opencv-video-capture
    inputs:
      tick: dora/timer/millis/20
    outputs:
      - image
  - id: object-detection
    build: pip install dora-yolo
    path: dora-yolo
    inputs:
      image: camera/image      # 读摄像头写的 image
    outputs:
      - bbox
  - id: plot
    build: pip install dora-rerun
    path: dora-rerun
    inputs:
      image: camera/image
      boxes2d: object-detection/bbox
```

数据流向：`camera → object-detection → plot`。

:::warning 版本提示
基于 dora 1.0 RC。字段可能随版本微调，以课程使用的版本为准。
:::
