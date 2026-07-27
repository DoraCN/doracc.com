---
description: 10.2 PyBullet 仿真 SO-101——从零搭建物理仿真，加载 SO-101 机械臂 URDF，手写 DORA 仿真节点实现指令驱动，键盘实时控制仿真机械臂运动。
---

# 10.2 PyBullet 仿真 SO-101

上一节的 `cmd_receiver.py` 指令能发送了，能接收了——但收到的只是屏幕上的打印文字。这一节，我们把这个"打印"变成**真正的物理仿真**：让一个 3D 机械臂在窗口中实实在在地动起来。

我们将分三步走，每一步搭在前一步之上：

| 步骤 | 做什么 | 核心收获 |
|------|--------|----------|
| **A** | 装 PyBullet，加载 SO-101 URDF，在独立脚本里跑通 | 认识 PyBullet，看到机械臂 |
| **B** | 把 PyBullet 包进 DORA 仿真节点 | 仿真与数据流的结合方式 |
| **C** | 接上键盘控制节点，跑完整数据流 | 键盘 → DORA → 仿真机械臂，完整回路 |

:::info 小莫说
老师在我的"身体"里装了一个叫 PyBullet 的仿真引擎。有了它，每次老师往黑板上写一条移动指令，我都能在身体里"模拟"自己该怎么动——不用真实机器人也能训练！
:::

## 学习目标

学完本节，你将能够：

- 在 PyBullet 中加载 SO-101 机械臂的 URDF 模型并可视化
- 用 `getJointInfo` 查看关节结构，用 `setJointMotorControl2` 控制关节转动
- 手写一个将 PyBullet 封装在 DORA 节点中的仿真节点
- 用键盘实时控制仿真机械臂运动

## 前置要求

- 完成 [10.1 控制信号建模](./control-modeling)，理解控制指令的收发模式
- 完成[第五章](../data/)，理解 `pa.array`、`to_pylist()` 的用法
- 完成[第四章](../python-node/)，会写 DORA 节点和 `dataflow.yml`

## 为什么是 PyBullet

PyBullet 是一个 Python 原生的物理仿真引擎，基于 Bullet Physics 开发。选择它而不是 Gazebo、Isaac Sim、MuJoCo，是出于课程定位：

| 维度 | PyBullet | Gazebo | Isaac Sim | MuJoCo |
|------|----------|--------|-----------|--------|
| 安装 | `uv pip install pybullet`，一行 | 系统包管理器，依赖重 | NVIDIA GPU 必须 | `pip install mujoco` |
| CPU 可跑 | ✅ | ✅ | ❌ | ✅ |
| 三平台 | macOS / Win / Linux | 基本 Linux only | 基本 Linux only | macOS / Linux / Win |
| 入门门槛 | 极低 | 中等 | 高 | 低 |
| 机械臂 URDF | ✅ 直接加载 | ✅ 原生支持 | ✅ 原生支持 | ✅（需转换 MJCF） |

PyBullet 对零基础学生最友好。学完之后，换到 MuJoCo 或其他仿真器，核心概念（URDF、关节、仿真步进、IK）完全一样——只是 API 不同。

> 工程实践上，MuJoCo 正成为工业界的趋势选择，它的物理精度更高、API 更现代。如果你学完本章想深入，MuJoCo 是天然的下一步。我们在[进阶篇](/guide/)中会提供桥接方案。

---

## 步骤 A：认识 PyBullet，加载 SO-101

### 安装 PyBullet

```bash
uv pip install pybullet
```

验证：

```bash
uv run python -c "import pybullet; print('PyBullet 就绪')"
```

输出 `PyBullet 就绪` 表示安装成功。

### SO-101 机械臂

**SO-101（Standard Open Arm 101）** 是 LeRobot 生态的一款桌面级开源机械臂设计。关键信息：

- **自由度**：5 个旋转关节 + 1 个夹爪
- **控制方式**：舵机（真实硬件）或仿真关节驱动
- **文件**：URDF 格式描述，包含连杆、关节、质量、碰撞体等完整信息

URDF 文件位于项目 `docs/public/SO101/so101_new_calib.urdf`，配套的网格（mesh）文件在 `docs/public/SO101/assets/` 子目录。

### 第一个 PyBullet 脚本：单独加载 SO-101

在动手写 DORA 仿真节点之前，先写一个不依赖 DORA 的独立脚本，确保 PyBullet 环境完全就绪。新建 `test_so101.py`：

```python
# test_so101.py —— 在 PyBullet GUI 中加载并显示 SO-101 机械臂
import os
import pybullet as p
import pybullet_data
import time

# —— 路径设置 ——
# urdf_dir 是包含 SO_101_new_calib.urdf 和 assets/ 的目录
urdf_dir = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "docs/public/SO101",
)
urdf_path = os.path.join(urdf_dir, "so101_new_calib.urdf")

# —— 启动仿真 ——
p.connect(p.GUI)                               # GUI 模式：打开可视化窗口
p.setAdditionalSearchPath(pybullet_data.getDataPath())
p.setGravity(0, 0, -9.81)                     # 设置重力

# 加载地面
p.loadURDF("plane.urdf")

# 切换到 SO-101 模型目录，加载机械臂
p.setAdditionalSearchPath(urdf_dir)
robot_id = p.loadURDF(
    urdf_path,
    basePosition=[0, 0, 0],
    baseOrientation=[0, 0, 0, 1],              # 四元数：(x, y, z, w)，无旋转
    useFixedBase=True,                         # 机械臂底座固定，不能移动
)

print(f"SO-101 已加载，robot_id = {robot_id}", flush=True)

# —— 查看关节信息 ——
num_joints = p.getNumJoints(robot_id)
print(f"关节数量: {num_joints}\n", flush=True)

for i in range(num_joints):
    info = p.getJointInfo(robot_id, i)
    joint_name = info[1].decode()              # info[1] 是名称（bytes）
    joint_type = info[2]                       # info[2] 是类型
    type_name = {
        0: "旋转关节 (Revolute)",
        1: "棱柱关节 (Prismatic)",
        4: "固定关节 (Fixed)",
    }.get(joint_type, f"其他 ({joint_type})")
    print(
        f"  关节 {i}: {joint_name:30s}  类型: {type_name}",
        flush=True,
    )

# —— 持续运行 ——
print("\n运行中... 按 Ctrl+C 退出", flush=True)
try:
    while True:
        p.stepSimulation()                    # 推进仿真一步
        time.sleep(1 / 240)                   # 约 240Hz 的仿真频率
except KeyboardInterrupt:
    print("\n停止仿真", flush=True)

p.disconnect()                                 # 关闭窗口
```

### 运行

```bash
uv run python test_so101.py
```

你会看到一个 PyBullet 可视化窗口弹出，地面中央站立着 SO-101 机械臂。终端输出类似：

```
SO-101 已加载，robot_id = 1
关节数量: 7

  关节 0: shoulder_pan          类型: 旋转关节 (Revolute)
  关节 1: shoulder_lift         类型: 旋转关节 (Revolute)
  关节 2: elbow_flex            类型: 旋转关节 (Revolute)
  关节 3: wrist_flex            类型: 旋转关节 (Revolute)
  关节 4: wrist_roll            类型: 旋转关节 (Revolute)
  关节 5: gripper_frame_joint    类型: 固定关节 (Fixed)
  关节 6: gripper               类型: 旋转关节 (Revolute)
```

### 代码详解

#### `p.connect(p.GUI)`

启动 PyBullet 的 GUI 渲染模式。`p.GUI` 打开可视化窗口；`p.DIRECT` 无窗口但运行更快（适合批量训练）。教学用 GUI。

:::warning macOS 窗口不出现在最前
PyBullet GUI 窗口有时会躲在终端和其他窗口后面。运行后如果没看到窗口，查一下 Dock 栏或者用 `Cmd+Tab` 切换。窗口标题是 "PyBullet"。
:::

#### `p.setAdditionalSearchPath(urdf_dir)`

PyBullet 加载 URDF 时需要找到文件中引用的网格文件。SO-101 的 URDF 用相对路径引用 `assets/base_motor_holder_so101_v1.stl` 等 `.stl` 文件。

`setAdditionalSearchPath` 设置的是额外搜索目录，PyBullet 会在这些目录下查找 URDF 中引用的文件。**每次调用覆盖前一次**，所以加载地面时路径指向 `pybullet_data`，加载 SO-101 时路径指向 `urdf_dir`。

#### `loadURDF` 参数详解

| 参数 | 含义 | 本节取值 |
|------|------|----------|
| `fileName` | URDF 文件路径 | `urdf_path` |
| `basePosition` | 底座世界坐标 `[x, y, z]` | `[0, 0, 0]` |
| `baseOrientation` | 底座姿态四元数 `[x, y, z, w]` | `[0, 0, 0, 1]`（无旋转） |
| `useFixedBase` | 底座是否固定不动 | `True` |

`useFixedBase=True` 至关重要——设为 `False` 机械臂会因重力直接倒在地上，因为它没有浮空能力。

#### `getJointInfo` 返回值

`getJointInfo(robot_id, joint_idx)` 返回一个包含丰富信息的元组。教学阶段只用前三个：

| 索引 | 名称 | 含义 | 本节取值 |
|------|------|------|----------|
| `[0]` | `jointIndex` | 关节编号 | 0-6 |
| `[1]` | `jointName` | 关节名称（bytes） | `b'shoulder_pan'` 等 |
| `[2]` | `jointType` | 关节类型 | 0/1/4 |

关节类型：`0` = 旋转（绕轴转动），`1` = 棱柱（沿轴滑动），`4` = 固定（不可运动）。

SO-101 的 `gripper_frame_joint` 是固定关节（type=4），它的存在只是为了在 URDF 中把活动夹爪挂载到手腕末端——它本身不参与运动，不用控制它。

### PyBullet 鼠标操作

在 GUI 窗口中：

| 操作 | 效果 |
|------|------|
| 鼠标左键拖拽 | 旋转视角 |
| 鼠标中键/滚轮 | 缩放 |
| Ctrl + 鼠标左键拖拽 | 平移视角 |
| 鼠标右键拖拽 | 平移视角（另一种方式） |

---

## 步骤 B：PyBullet 关节控制（独立脚本）

在接入 DORA 之前，先学会在独立脚本中转动关节。在 `test_so101.py` 的 `while` 循环后面加上控制代码。新建 `test_so101_joints.py`：

```python
# test_so101_joints.py —— 逐关节测试 SO-101 的运动范围
import os
import pybullet as p
import pybullet_data
import time

urdf_dir = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "docs/public/SO101",
)
urdf_path = os.path.join(urdf_dir, "so101_new_calib.urdf")

p.connect(p.GUI)
p.setAdditionalSearchPath(pybullet_data.getDataPath())
p.setGravity(0, 0, -9.81)
p.loadURDF("plane.urdf")
p.setAdditionalSearchPath(urdf_dir)

robot_id = p.loadURDF(
    urdf_path,
    useFixedBase=True,
)

# —— 逐关节旋转演示 ——
joint_indices = [0, 1, 2, 3, 4]        # 5 个活动旋转关节
angles = [0.5, -0.5, 0.5, -0.5, 0.5]  # 目标角度（弧度）

for step in range(500):
    for i, joint_idx in enumerate(joint_indices):
        p.setJointMotorControl2(
            bodyUniqueId=robot_id,
            jointIndex=joint_idx,
            controlMode=p.POSITION_CONTROL,
            targetPosition=angles[i],          # 目标角度（弧度）
            maxVelocity=3.0,                   # 最大角速度
        )
    p.stepSimulation()
    time.sleep(1 / 240)

# —— 读取当前关节状态 ——
print("\n当前关节角度:", flush=True)
for i in joint_indices:
    state = p.getJointState(robot_id, i)
    pos = state[0]                            # 当前角度（弧度）
    print(f"  关节 {i}: {pos * 180 / 3.14159:.1f}°", flush=True)

# 保持窗口打开
print("\n观察机械臂姿态，按 Ctrl+C 退出", flush=True)
try:
    while True:
        p.stepSimulation()
        time.sleep(1 / 240)
except KeyboardInterrupt:
    p.disconnect()
```

运行后，机械臂 5 个关节会分别转到指定角度，然后在终端打印当前关节角度（转换为度数）。

### `setJointMotorControl2` 参数详解

这是 PyBullet 中控制关节运动的核心函数：

```python
p.setJointMotorControl2(
    bodyUniqueId=robot_id,    # 机器人 ID
    jointIndex=joint_idx,     # 关节编号
    controlMode=p.POSITION_CONTROL,  # 控制模式
    targetPosition=angle,     # 目标角度（弧度）
    maxVelocity=3.0,          # 最大角速度（可选）
)
```

| 参数 | 含义 |
|------|------|
| `bodyUniqueId` | `loadURDF` 返回的机器人 ID |
| `jointIndex` | 要控制的关节编号 |
| `controlMode` | 控制模式：`POSITION_CONTROL`（位置）、`VELOCITY_CONTROL`（速度）、`TORQUE_CONTROL`（力矩） |
| `targetPosition` | 位置控制的目标角度（**弧度**，不是角度！） |

:::warning 弧度 vs 角度
`targetPosition` 的单位是**弧度**，不是度。例如 30 度 = 30 × π / 180 ≈ 0.5236 弧度。如果你的键盘输入是度数（如 `30`），在传入 `setJointMotorControl2` 之前要转换为弧度。
:::

### `getJointState` 返回值

```python
state = p.getJointState(robot_id, joint_idx)
```

返回元组，核心字段：

| 索引 | 名称 | 含义 |
|------|------|------|
| `[0]` | `jointPosition` | 当前关节角度（弧度） |
| `[1]` | `jointVelocity` | 当前关节角速度 |
| `[2]`-`[5]` | forces | 关节力/力矩信息 |

我们主要用 `state[0]` 读取当前角度（本章），以及 `state[1]` 监控速度（进阶调试）。

---

## 步骤 C：DORA 仿真节点

现在是核心步骤——把 PyBullet 封装进 DORA 节点，让它成为数据流中的一个"仿真器节点"。

### 架构设计

```
[键盘控制节点]  ──joint_cmd──→  [仿真节点 (PyBullet)]
  tick: 100ms                       tick: 240Hz
                                    ↑
                                    每 4ms 步进一次仿真
                                    ↓
                                 [输出关节状态]
```

关键设计点：

1. **定时器驱动仿真步进**：`dora/timer/millis/4`（≈240Hz）独立驱动仿真循环，键盘指令只更新目标值
2. **位置控制 + 持续驱动**：即使没有新指令，仿真节点每次步进时仍会重新下发当前的关节目标——这是因为 PyBullet 的 `setJointMotorControl2` 需要每步被调用才能保持位置
3. **控制指令接收**：通过 Topic `joint_cmd` 接收来自键盘节点的指令，支持两种格式：
   - `[joint_idx, angle]`：单个关节（与 10.1 兼容）
   - `[angle_0, angle_1, ..., angle_4]`：所有 5 个关节（10.1 动手练习的 batch 模式）

### 仿真节点：simulation_node.py

```python
# simulation_node.py —— DORA 仿真节点：把 PyBullet 包进数据流
import os
import math
import pybullet as p
import pybullet_data
import pyarrow as pa
from dora import Node


# SO-101 的 5 个活动旋转关节索引（排除 gripper_frame_joint 和 gripper）
ARM_JOINTS = [0, 1, 2, 3, 4]


def setup_pybullet():
    """初始化 PyBullet 并加载 SO-101 机械臂。"""
    # SO-101 模型目录
    urdf_dir = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "docs/public/SO101",
    )
    urdf_path = os.path.join(urdf_dir, "so101_new_calib.urdf")

    p.connect(p.GUI)
    p.setAdditionalSearchPath(pybullet_data.getDataPath())
    p.setGravity(0, 0, -9.81)
    p.loadURDF("plane.urdf")

    p.setAdditionalSearchPath(urdf_dir)
    robot_id = p.loadURDF(
        urdf_path,
        useFixedBase=True,
    )

    # 禁用重力对非底座关节的影响（让仿真更稳定）
    for joint_idx in range(p.getNumJoints(robot_id)):
        p.changeDynamics(robot_id, joint_idx, linearDamping=0.2, angularDamping=0.2)

    print(f"[仿真节点] SO-101 加载完成，robot_id = {robot_id}", flush=True)
    return robot_id


def set_all_joint_positions(robot_id, angles):
    """把所有 5 个活动关节设为指定角度（角度制输入，自动转弧度）。"""
    for i, joint_idx in enumerate(ARM_JOINTS):
        angle_rad = angles[i] * math.pi / 180.0       # 角度 → 弧度
        p.setJointMotorControl2(
            bodyUniqueId=robot_id,
            jointIndex=joint_idx,
            controlMode=p.POSITION_CONTROL,
            targetPosition=angle_rad,
            maxVelocity=3.0,
        )


def get_all_joint_positions(robot_id):
    """读取所有 5 个活动关节的当前角度（返回角度制）。"""
    angles = []
    for joint_idx in ARM_JOINTS:
        state = p.getJointState(robot_id, joint_idx)
        angle_deg = state[0] * 180.0 / math.pi        # 弧度 → 角度
        angles.append(round(angle_deg, 2))
    return angles


def main():
    # 初始化 PyBullet
    robot_id = setup_pybullet()

    # 当前的 5 个关节目标角度（初始全 0）
    current_targets = [0.0, 0.0, 0.0, 0.0, 0.0]

    node = Node()

    for event in node:
        # —— 处理 DORA 输入事件 ——
        if event["type"] == "INPUT":
            if event["id"] == "tick":
                # 定时器触发：步进仿真
                set_all_joint_positions(robot_id, current_targets)
                p.stepSimulation()

                # 发送当前关节状态
                joint_angles = get_all_joint_positions(robot_id)
                node.send_output(
                    "joint_state",
                    pa.array(joint_angles),
                )

            elif event["id"] == "joint_cmd":
                # 收到控制指令
                data = event["value"].to_pylist()

                if len(data) == 2 and data[0] < 10:
                    # 格式：[joint_idx, angle] —— 单个关节指令
                    joint_idx = int(data[0])
                    angle = float(data[1])
                    if 0 <= joint_idx < len(ARM_JOINTS):
                        current_targets[joint_idx] = angle
                        print(
                            f"[仿真节点] 关节 {joint_idx} 目标 → {angle}°",
                            flush=True,
                        )
                elif len(data) == 5:
                    # 格式：[angle_0, ..., angle_4] —— 全关节批量指令
                    current_targets = [float(a) for a in data]
                    print(
                        f"[仿真节点] 全关节目标 → {current_targets}°",
                        flush=True,
                    )

        elif event["type"] == "STOP":
            break

    p.disconnect()


if __name__ == "__main__":
    main()
```

### 代码详解

#### DORA 事件循环与仿真的结合

```python
for event in node:
    if event["type"] == "INPUT":
        if event["id"] == "tick":
            # 定时器触发
```

这是整个仿真节点的核心驱动力。`tick` 定时器（`dora/timer/millis/4`）每 4ms 触发一次 `tick` 事件。触发时：

1. 用当前目标角度驱动所有关节（`set_all_joint_positions`）
2. 推进仿真一步（`p.stepSimulation`）
3. 读取当前实际角度并发送出去（`get_all_joint_positions` → `send_output`）

即使键盘节点长时间不发新指令，仿真节点仍在循环步进——窗口渲染持续、关节保持在目标位置——这是"位置控制模式"的正确行为。

#### 角度制 vs 弧度制

```python
angle_rad = angles[i] * math.pi / 180.0    # 角度 → 弧度
```

键盘节点发送的是角度（度），仿真引擎需要的是弧度。在这两个函数中做转换：
- `set_all_joint_positions`：接收角度制 → 转弧度 → 调用 `setJointMotorControl2`
- `get_all_joint_positions`：调用 `getJointState` 得到弧度 → 转角度制 → 返回

这种封装让整个课程统一使用**角度制**（与用户的直觉一致），PyBullet 内部的弧度制被封装在节点内部。

#### 阻尼配置

```python
p.changeDynamics(robot_id, joint_idx, linearDamping=0.2, angularDamping=0.2)
```

`changeDynamics` 给所有关节加了轻微阻尼。阻尼是什么？想象一个没有摩擦力的世界——你推一下机械臂，它就永远摆下去停不下来。加了阻尼后，关节到达目标角度后会平滑停下，而不是反复震荡。

:::details 为什么需要阻尼？
PyBullet 的默认关节是理想状态（无摩擦）。如果不用阻尼，位置控制会产生严重的过冲和震荡——到达目标角度后刹不住，弹回来再冲过去，反复多次才能稳定。

`angularDamping=0.2` 是经验值：对 SO-101 这种小型机械臂，0.1-0.3 之间的值通常效果最好。你的机械臂如果抖动明显，微调这个值即可。

如果你想看到没有阻尼的震荡效果，可以删掉 `changeDynamics` 这一行试试——体验什么叫"惯性失控"。
:::

---

## 步骤 D：键盘控制节点 + 完整数据流

现在把键盘控制节点升级：支持单个关节控制和批量 5 关节控制，与仿真节点对接。

### keyboard_control.py（升级版）

```python
# keyboard_control.py —— 键盘控制 SO-101 的 DORA 节点
import pyarrow as pa
from dora import Node

# SO-101 的 5 个活动关节名称
JOINT_NAMES = [
    "shoulder_pan (基座旋转)",
    "shoulder_lift (大臂抬起)",
    "elbow_flex (肘部弯曲)",
    "wrist_flex (手腕俯仰)",
    "wrist_roll (手腕旋转)",
]


def main():
    node = Node()

    print("=" * 50, flush=True)
    print("  SO-101 键盘控制", flush=True)
    print("=" * 50, flush=True)
    print("  命令格式：", flush=True)
    print("    关节号 角度     如 '0 45'", flush=True)
    print("    batch a0 a1 a2 a3 a4  如 'batch 0 -30 45 -20 10'", flush=True)
    print("    home            回零", flush=True)
    print("    list            显示关节列表", flush=True)
    print("=" * 50, flush=True)

    for event in node:
        if event["type"] == "INPUT" and event["id"] == "tick":
            cmd = input("> ").strip()

            if not cmd:
                continue

            # —— 回零 ——
            if cmd == "home":
                node.send_output("joint_cmd", pa.array([0.0, 0.0, 0.0, 0.0, 0.0]))
                print("  → 回零指令已发送", flush=True)
                continue

            # —— 显示关节列表 ——
            if cmd == "list":
                for i, name in enumerate(JOINT_NAMES):
                    print(f"    {i}: {name}", flush=True)
                continue

            # —— 批量控制 ——
            if cmd.startswith("batch"):
                parts = cmd.split()
                if len(parts) != 6:
                    print("  batch 命令格式：batch a0 a1 a2 a3 a4", flush=True)
                    continue
                angles = [float(a) for a in parts[1:]]
                node.send_output("joint_cmd", pa.array(angles))
                print(f"  → 全关节 → {angles}°", flush=True)
                continue

            # —— 单关节控制 ——
            parts = cmd.split()
            if len(parts) != 2:
                print("  格式错误：关节号 角度", flush=True)
                continue

            joint_idx = int(parts[0])
            angle = float(parts[1])

            if joint_idx < 0 or joint_idx >= len(JOINT_NAMES):
                print(f"  关节号范围 0-{len(JOINT_NAMES)-1}", flush=True)
                continue

            # 发送单关节指令：用 [joint_idx, angle] 格式
            node.send_output("joint_cmd", pa.array([joint_idx, angle]))
            print(f"  → 关节 {joint_idx} ({JOINT_NAMES[joint_idx]}) → {angle}°", flush=True)

        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

### dataflow.yml（完整版）

```yaml
nodes:
  - id: keyboard_control
    custom:
      source: keyboard_control.py
      inputs:
        tick: dora/timer/millis/100          # 每 100ms 检查一次键盘输入
      outputs:
        - joint_cmd

  - id: simulation
    custom:
      source: simulation_node.py
      inputs:
        tick: dora/timer/millis/4            # 240Hz 驱动仿真步进
        joint_cmd: keyboard_control/joint_cmd
      outputs:
        - joint_state
```

### 运行

```bash
dora run dataflow.yml
```

在键盘控制终端输入：

```
> list
    0: shoulder_pan (基座旋转)
    1: shoulder_lift (大臂抬起)
    2: elbow_flex (肘部弯曲)
    3: wrist_flex (手腕俯仰)
    4: wrist_roll (手腕旋转)

> 0 90
  → 关节 0 (shoulder_pan) → 90°

> 1 -45
  → 关节 1 (shoulder_lift) → -45°

> home
  → 回零指令已发送

> batch -30 45 -60 30 0
  → 全关节 → [-30.0, 45.0, -60.0, 30.0, 0.0]°
```

每一条指令，你都能在 PyBullet 窗口中实时看到机械臂的相应运动。

### 两节点协作时序

```
时间 →

键盘节点 (100ms tick):
  ──┬──────────┬──────────┬──────────
    │input()   │input()   │input()
    │"0 90"    │"1 -45"   │"home"
    │send      │send      │send
    ─┴──────────┴──────────┴──────────

仿真节点 (4ms tick):
  ─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬
   │ │ │ │ │ │ │ │ │ │ │ │ │ │
   每个 tick:
   - 用当前 targets 驱动所有关节
   - stepSimulation
   - 读取状态并发送 joint_state
   
   收到 joint_cmd 时:
   - 更新 current_targets
   - 下一个 tick 生效
```

注意：仿真节点以 240Hz 独立运行，键盘指令到达时只是更新了 `current_targets` 数组。下一次 tick 到达时，更新后的目标值自动被采用——不需要等待或同步。

## 控制语句汇总

| 命令 | 效果 | 示例 |
|------|------|------|
| `0 45` | 关节 0 转到 45° | `0 90` — 基座旋转 90° |
| `batch a0 a1 a2 a3 a4` | 5 个关节同时设目标 | `batch -20 30 -45 20 10` |
| `home` | 所有关节回零 | `home` |
| `list` | 显示关节名称列表 | `list` |

---

## 动手练习

:::tip 练习一：添加保存姿态功能
给 `keyboard_control.py` 增加两个命令：

1. `save 姿态名` — 保存当前 `joint_state` 为命名姿态
2. `go 姿态名` — 机械臂移动到已保存的姿态

提示：需要一个全局字典 `saved_poses = {}`；保存时订阅 `joint_state` 输入获取仿真节点发回的实际角度；`go` 时发送 batch 指令。在 `dataflow.yml` 中为 `keyboard_control` 增加 `joint_state` 输入。
:::

:::details 参考答案
在 `keyboard_control.py` 中添加：

```python
saved_poses = {}

# 在 main() 的 event 处理中：
if event["id"] == "joint_state":
    current_state = event["value"].to_pylist()
    # 暂存当前状态，供 save 命令使用

# save 命令
if cmd.startswith("save "):
    name = cmd[5:].strip()
    if current_state:
        saved_poses[name] = list(current_state)
        print(f"  → 姿态 '{name}' 已保存: {current_state}", flush=True)

# go 命令
if cmd.startswith("go "):
    name = cmd[3:].strip()
    if name in saved_poses:
        node.send_output("joint_cmd", pa.array(saved_poses[name]))
        print(f"  → 移动到姿态 '{name}'", flush=True)
    else:
        print(f"  未找到姿态 '{name}'", flush=True)
```
:::

:::tip 练习二：观察阻尼效果
1. 在 `simulation_node.py` 中注释掉 `changeDynamics` 所在行
2. 运行数据流，发送 `0 90` 命令
3. 观察机械臂到达目标后的震荡行为
4. 恢复 `changeDynamics`，对比效果

你能明显看到无阻尼时的"刹不住车"现象——关节在 90° 附近来回摆好几次才能稳定。
:::

## 常见问题 FAQ

:::warning `ModuleNotFoundError: No module named 'pybullet'`
PyBullet 未安装。执行 `uv pip install pybullet`。
:::

:::warning URDF 文件找不到 / `Cannot load URDF file`
检查 `urdf_path` 指向的文件是否存在。确保 `setAdditionalSearchPath` 设置的目录是包含 `assets/` 子目录的上级目录。

常见错误：路径只到 `SO101/` 但实际 URDF 在 `SO101/so101_new_calib.urdf`。`urdf_path` 和 `urdf_dir` 是不同的——前者是完整文件路径，后者是搜索目录。
:::

:::warning GUI 窗口不出现 / 闪退
1. macOS 上 PyBullet GUI 窗口可能躲在其他窗口后面，用 `Cmd+Tab` 查找
2. 检查 `p.disconnect()` 是否在程序结束前被调用——如果程序立即退出，窗口会随进程销毁
3. 确保代码中有 `while True` 循环保持进程存续
:::

:::warning 关节不动
1. 确认发送的关节号正确（0-4 为活动旋转关节）
2. 确认控制模式是 `p.POSITION_CONTROL`（不是 `p.VELOCITY_CONTROL`）
3. 确认 `setJointMotorControl2` 在每个仿真步都被调用（本节的定时器驱动保证了这一点）
:::

:::warning 终端上无法输入命令
确认键盘焦点在键盘控制终端窗口。`dora run` 启动后，输入命令时要确保光标在显示 `>` 提示符的窗口。如果光标在 `dora run` 的数据流终端窗口（那个只会显示系统日志），切换到提示符所在窗口再输入。
:::

## 小结

这一节我们完成了从 0 到 1 的 PyBullet 仿真集成：

1. **独立 PyBullet**：安装、加载 URDF、查看关节、可视化
2. **关节控制**：`setJointMotorControl2`（位置控制）、`getJointState`（读取状态）、角度/弧度转换、阻尼
3. **DORA 仿真节点**：定时器驱动步进（240Hz）、指令更新目标值、状态反馈
4. **完整数据流**：键盘 → DORA → 仿真，5 个关节实时可控

关键技术点回顾：

- `dora/timer/millis/4` 以 240Hz 独立驱动仿真，不依赖指令频率
- 角度制对用户友好，弧度制是 PyBullet 内部协议——在节点内完成转换
- `changeDynamics` 加阻尼让运动平滑，避免震荡
- 单关节 + 批量 + 回零三种指令模式覆盖主要的控制场景

:::info 小莫说
现在我有了身体（仿真模型），也有了指挥我的方式（键盘指令）。但每次都要手动打字，还是有点慢。小项目⑦ 里我们试着让键盘按键直接控制我——按 W 我就抬臂，按 S 我就降臂，像玩游戏一样！
:::

下一节我们看如何从仿真过渡到真实硬件——同样的 DORA 控制指令，只需换一个底层驱动节点。
