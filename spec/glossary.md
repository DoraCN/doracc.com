# 术语表（Glossary）

> 全课程术语以此表为准，统一"中文为主，首次出现括注英文"。同一概念不得使用多个中文译名。

## DORA 核心概念

| 英文 | 中文（首次写法） | 说明 |
|------|----------------|------|
| Dataflow | 数据流（Dataflow） | 由多个节点按输入输出连成的有向图，用 YAML 描述 |
| Node | 节点（Node） | 数据流中的一个独立处理单元（独立进程） |
| Operator | 算子（Operator） | 运行在同一运行时内的轻量处理单元 |
| Input / Output | 输入 / 输出 | 节点间传递数据的端口 |
| Topic | 主题（Topic） | 发布订阅通信模式 |
| Service | 服务（Service） | 请求/应答通信模式 |
| Action | 动作（Action） | 长任务：目标/反馈/结果通信模式 |
| Streaming | 流式（Streaming） | 连续数据流通信模式 |
| Coordinator | 协调器（Coordinator） | 管理各机器守护进程的控制面 |
| Daemon | 守护进程（Daemon） | 每台机器上的节点管理者 |
| Node Hub | 节点仓库（Node Hub） | 可复用节点的公共目录，一行引入 |
| Record & Replay | 录制回放 | 把数据流消息录制为 `.drec` 文件，可离线回放 |

## 数据与性能

| 英文 | 中文（首次写法） | 说明 |
|------|----------------|------|
| Apache Arrow | Arrow（Apache Arrow） | 列式内存数据格式，零拷贝传递 |
| Shared Memory | 共享内存 | 同机节点间零拷贝通信机制 |
| Zero-copy | 零拷贝 | 数据传递不产生额外复制 |
| Zenoh | Zenoh | 跨机零拷贝数据面 |

## 工具与环境

| 英文 | 中文（首次写法） | 说明 |
|------|----------------|------|
| DoraBox | 朵拉魔盒（DoraBox） | 桌面隔离工具，独立项目，本课程不再使用 |
| Toolchain | 工具链 | Rust/Python 等编译运行所需的整套工具 |
| Mirror | 镜像源 | 国内加速下载源（crates/pip/模型/git） |

## 机器人与 AI

| 英文 | 中文（首次写法） | 说明 |
|------|----------------|------|
| Embodied AI | 具身智能（Embodied AI） | 让 AI 通过身体感知并作用于物理世界 |
| Simulation | 仿真 | 用 PyBullet 模拟机器人与环境 |
| VLM | 视觉语言模型（VLM） | 能同时理解图像与语言的模型 |
| Object Detection | 物体检测 | 识别图像中物体及其位置（如 YOLO） |

> 需要新增术语时，先补入本表再在正文使用。
