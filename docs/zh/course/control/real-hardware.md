---
description: 10.3 可选：真实硬件——从仿真到真机的桥接方案，理解 DORA 数据流接口的跨层一致性，SO-101 硬件采购与连接，无硬件学生的录制回放替代路径。
---

# 10.3 可选：真实硬件

大部分学生会在仿真中学习本章。但如果你手上有 SO-101 硬件（或者打算采购），这一节告诉你如何从仿真无缝过渡到真机。

核心思想极其简单——你在 10.1 和 10.2 写的所有 DORA 代码，**根本不用改**。

## 数据流接口的一致性

回顾 10.2 的数据流结构：

```
[键盘控制节点]  ──joint_cmd──→  [仿真节点 (PyBullet)]  ──joint_state──→
```

换成真实硬件后：

```
[键盘控制节点]  ──joint_cmd──→  [硬件驱动节点]  ──joint_state──→
```

区别只在最右端节点——把 Python 调用的 `p.setJointMotorControl2` 换成向串口/I²C/总线发送舵机指令。`joint_cmd` 的 `[joint_idx, angle]` 格式**原样沿用**，`joint_state` 的 `[angle_0, ..., angle_4]` 格式**原样沿用**。

这就是 DORA 模块化架构的价值——**底层换了，接口层不动，上层代码零改动**。

## SO-101 硬件简介

SO-101 是 LeRobot 社区的开源桌面机械臂设计，使用 **STS3215 串行总线舵机** 驱动。关键信息：

| 项目 | 详情 |
|------|------|
| 自由度 | 5 个旋转关节 + 1 个夹爪 |
| 驱动方式 | STS3215 舵机（TTL 串行总线控制） |
| 控制板 | 兼容 LeRobot 控制方案（如 `feetech-sdk`） |
| 结构件 | 3D 打印（PLA/PETG 均可） |
| 零件清单 | 见 LeRobot SO-101 官方文档 |
| 价格范围 | 零件 + 舵机 + 控制板 ≈ 600-1000 元人民币 |

### 采购清单

| 组件 | 数量 | 说明 |
|------|------|------|
| STS3215 舵机 | 6 个 | 5 个关节 + 1 个夹爪。推荐 Waveshare 等授权经销商 |
| 控制板（如基於 STM32） | 1 块 | 连接电脑 USB，向舵机总线发指令 |
| 3D 打印结构件 | 1 套 | SO-101 含底座、大小臂、手腕、夹爪 |
| 12V 电源 | 1 个 | 舵机供电（不可从 USB 取电——电流不够） |
| 杜邦线 / 总线连接线 | 若干 | 舵机与控制板之间的 TTL 总线连接 |

### 连接示意

```
[电脑 USB] ──→ [控制板] ──TTL 总线──→ 6 个 STS3215 舵机（串联）
                  ↑
              [12V 电源]
```

:::warning 电源隔离
舵机和控制板使用 12V 独立电源供电，**不可从电脑 USB 直接给舵机供电**。USB 只能给控制板提供逻辑电平。12V 电源额定电流至少 3A（所有 6 个舵机同时运动时电流可能超过 2A）。
:::

### 软件控制

SO-101 舵机通过串行总线协议控制。主流方案是用 `feetech-sdk`（Python 库）直接发角度指令：

```python
# 伪代码示意——真实硬件驱动节点中替换 PyBullet 调用的部分
from feetech_sdk import FeetechBus

bus = FeetechBus(port="/dev/ttyUSB0")  # 串口设备
bus.write_position(servo_id=1, angle=45)      # 舵机 1 转到 45°
current_angle = bus.read_position(servo_id=1)  # 读取当前角度
```

把这层封装到 `hardware_driver.py` 节点中，替换 `simulation_node.py` 里的 `p.setJointMotorControl2(...)` 调用，其余代码完全不动。

### 替换仿真节点的步骤

1. 把 `simulation_node.py` 复制为 `hardware_driver.py`
2. 删掉 `setup_pybullet()` 中的 PyBullet 初始化代码
3. 把 `set_all_joint_positions` 中的 `p.setJointMotorControl2(...)` 替换为 `bus.write_position(servo_id, angle)`
4. 把 `get_all_joint_positions` 中的 `p.getJointState(...)` 替换为 `bus.read_position(servo_id)`
5. 更新 `dataflow.yml` 中的 `source: simulation_node.py` → `source: hardware_driver.py`

## 无硬件学生的替代方案：录制回放（`.drec`）

如果你没有 SO-101 硬件，可以在仿真中录制一次控制动作，然后用 `.drec` 文件回放：

1. **录制**：在 `dataflow.yml` 中开启录制（DORA CLI 参数）
2. **回放**：用录好的数据文件替代仿真节点，测试你的控制逻辑是否正确

录制回放的详细用法将在[第十二章 12.2 节](../deploy/record-replay)深入讲解。本章先建立"仿真节点和硬件驱动节点接口一致"的核心认知。

## 小结

- **接口一致性**：仿真和真机使用相同的 DORA Topic 和数据格式，上层控制代码不需要改一行。
- **替换方案**：仿真节点 (`simulation_node.py`) 和硬件驱动节点 (`hardware_driver.py`) 只是底层调用不同（PyBullet API vs 舵机总线协议）。
- **无硬件不焦虑**：录制回放是练习控制逻辑的有效替代方案。

这就是从"学会写指令"到"真实控制机器人"的最短路径。
