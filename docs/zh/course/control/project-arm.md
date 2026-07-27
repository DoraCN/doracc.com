---
description: 🎯 小项目⑦：控制仿真机械臂——用键盘实时操控 SO-101 五轴仿真机械臂，从关卡控制的单关节测试到笛卡尔空间的末端位姿驱动，打通从按键到物理运动的完整控制链。
---

# 🎯 小项目⑦：控制仿真机械臂

10.2 你已经能用命令行输入 `0 45` 来控制机械臂了。但这种打字模式太慢——每次动一个关节要停下手、想好数字、敲进去、再等反馈。真正的机器人控制应该是**实时、连贯、直觉**的：按一个键，机械臂就应声而动。

这个项目的目标就是做到这一点。

## 项目目标

| 层级 | 目标 | 核心新概念 |
|------|------|-----------|
| **基础** | 键盘实时控制 5 个关节 | `pynput` 非阻塞键盘监听、持续指令发送 |
| **进阶** | 笛卡尔空间控制：W/A/S/D 移动机械臂末端 | 逆运动学（IK）、坐标空间变换 |
| **终极挑战** | 视觉闭环：配合第七章 YOLO 检测，移动到检测到的物体 | 感知→决策→控制（为第十一章预热） |

## 前置要求

- 完成 [10.2 PyBullet 仿真 SO-101](./pybullet-so101) 的步骤 A-D，仿真环境完全就绪
- 理解控制角度/弧度的转换关系

---

## 基础目标：键盘实时控制关节

### 思路

`input()` 的问题是它会**阻塞**——你敲回车之前，循环停在那里什么都不做。实时键盘控制需要的是**非阻塞按键检测**——任何时候按下键，立刻响应。

我们用 `pynput` 库来做这件事。`pynput` 是一个跨平台的输入监控库，可以在后台持续监听键盘事件。

### 安装

```bash
uv pip install pynput
```

:::warning macOS 权限提示
首次运行 `pynput` 时，macOS 会弹出提示要求授权"辅助功能"权限。到「系统设置 → 隐私与安全性 → 辅助功能」中允许终端（Terminal/iTerm2）的访问权限，然后重新运行程序。

这是 macOS 的安全机制，不是 bug——`pynput` 需要监控全局键盘事件，所以必须获得辅助功能授权。
:::

### keyboard_realtime.py

```python
# keyboard_realtime.py —— 用 pynput 实现实时键盘控制
import threading
import pyarrow as pa
from dora import Node
from pynput import keyboard

# 按键 → (关节索引, 增量角度)
KEY_MAP = {
    keyboard.KeyCode.from_char("q"): (0, +5),   # 基座左转
    keyboard.KeyCode.from_char("e"): (0, -5),    # 基座右转
    keyboard.KeyCode.from_char("w"): (1, +5),    # 大臂抬起
    keyboard.KeyCode.from_char("s"): (1, -5),    # 大臂降下
    keyboard.KeyCode.from_char("a"): (2, +5),    # 肘部外伸
    keyboard.KeyCode.from_char("d"): (2, -5),    # 肘部内收
    keyboard.KeyCode.from_char("r"): (3, +5),    # 手腕上翻
    keyboard.KeyCode.from_char("f"): (3, -5),    # 手腕下翻
    keyboard.KeyCode.from_char("t"): (4, +5),    # 手腕右旋
    keyboard.KeyCode.from_char("g"): (4, -5),    # 手腕左旋
}

SPECIAL_KEYS = {
    keyboard.Key.space: "home",    # 空格键回零
}


def main():
    node = Node()

    # 当前 5 个关节的目标角度（从 0 开始）
    targets = [0.0, 0.0, 0.0, 0.0, 0.0]

    # 标记当前是否有按键按下
    pressed_keys = set()

    # —— 按键处理 ——
    def on_press(key):
        pressed_keys.add(key)

    def on_release(key):
        pressed_keys.discard(key)

    # 启动后台键盘监听线程
    listener = keyboard.Listener(
        on_press=on_press,
        on_release=on_release,
    )
    listener.daemon = True
    listener.start()

    print("=" * 50, flush=True)
    print("  SO-101 实时键盘控制", flush=True)
    print("=" * 50, flush=True)
    print("  按键映射：", flush=True)
    print("    Q/E    基座旋转 ±5°", flush=True)
    print("    W/S    大臂抬起/降下 ±5°", flush=True)
    print("    A/D    肘部外伸/内收 ±5°", flush=True)
    print("    R/F    手腕上翻/下翻 ±5°", flush=True)
    print("    T/G    手腕右旋/左旋 ±5°", flush=True)
    print("    空格    回零", flush=True)
    print("    Esc     退出", flush=True)
    print("=" * 50, flush=True)

    print("当前目标角度: ", flush=True)

    for event in node:
        if event["type"] == "INPUT" and event["id"] == "tick":
            # 检查是否有特殊键
            if keyboard.Key.esc in pressed_keys:
                print("\n退出", flush=True)
                break

            if keyboard.Key.space in pressed_keys:
                targets = [0.0, 0.0, 0.0, 0.0, 0.0]
                print("\r回零！                ", end="", flush=True)

            # 处理关节控制键
            any_pressed = False
            for key, (joint_idx, delta) in KEY_MAP.items():
                if key in pressed_keys:
                    targets[joint_idx] += delta
                    # 限制角度边界（-180 ~ 180）
                    targets[joint_idx] = max(-180, min(180, targets[joint_idx]))
                    any_pressed = True

            if any_pressed:
                print(
                    f"\r目标: {[f'{t:6.1f}' for t in targets]}",
                    end="",
                    flush=True,
                )

            # 发送当前目标角度（持续发送，即使没按键也保持位置）
            node.send_output("joint_cmd", pa.array(targets))

        elif event["type"] == "STOP":
            break

    listener.stop()


if __name__ == "__main__":
    main()
```

### 配套 dataflow.yml

```yaml
nodes:
  - id: keyboard_control
    custom:
      source: keyboard_realtime.py
      inputs:
        tick: dora/timer/millis/50           # 50ms = 20Hz 控制频率
      outputs:
        - joint_cmd

  - id: simulation
    custom:
      source: simulation_node.py
      inputs:
        tick: dora/timer/millis/4            # 240Hz 仿真步进
        joint_cmd: keyboard_control/joint_cmd
      outputs:
        - joint_state
```

### 运行

```bash
dora run dataflow.yml
```

按住 `W` 键——大臂持续抬起；松开——停在当前位置。按 `Q` 和 `E` 让基座左转右转。按**空格**回零。

终端上实时显示当前目标角度：`目标: [ 45.0, -30.0,   0.0,  20.0,  10.0]`。

### 关键设计点

**持续发送**：无论是否有按键按下，每个 tick 都发送当前的 `targets` 数组。这确保即使你松开按键，仿真节点仍持续驱动关节保持在最后的目标位置。如果只在按键变化时才发送，仿真节点会在你松开后停在最后一个仿真步的位置——如果此时有重力或外力，机械臂可能会开始漂移。

**按键增量 vs 绝对位置**：按键每次增减 ±5°，而不是跳到一个固定角度。这是因为实时控制中你不知道用户想转多少度——你只负责说"往这个方向多转一点"。这和游戏手柄摇杆的逻辑一模一样。

**频率平衡**：`tick: dora/timer/millis/50`（20Hz）是一个合理的平衡——人眼的 20Hz 响应够用，同时又不给仿真节点塞太多冗余指令。

---

## 进阶挑战：笛卡尔空间控制

关节空间控制有一个直观但烦人的问题：**你没办法告诉机械臂"把手往右移 5 厘米"**——你只能说"把关节 0 转 5 度"。如果想让末端执行器（夹爪）朝某个特定方向移动，你需要手动估算每个关节该转多少度。

逆运动学（IK, Inverse Kinematics）就是解决这个问题的：**给一个目标位姿 `(x, y, z)`，算出所有关节角度 `[θ₀, θ₁, θ₂, θ₃, θ₄]`**。

### 逆运动学简介

```
正向运动学 (FK)：关节角度 → 末端位姿
逆运动学 (IK)：  末端位姿 → 关节角度

例如：
  已知关节角 [30°, -45°, 20°, -30°, 0°]
  → FK 算出末端在空间中的位置：x=0.25, y=0.1, z=0.35

  我想让末端移到：x=0.30, y=0.15, z=0.30（往右前方 5cm）
  → IK 算出需要的关节角：[35°, -50°, 25°, -35°, 5°]
```

PyBullet 内置了 IK 求解器：`p.calculateInverseKinematics()`。你不用自己推导 DH 参数和雅可比矩阵——直接调用就行。

### 增强版键盘控制：cartesian_control.py

修改 `keyboard_realtime.py`，新增笛卡尔控制模式。按键映射为：

| 按键 | 效果 | 方向 |
|------|------|------|
| W/S | 末端前移/后移 | X 轴 |
| A/D | 末端左移/右移 | Y 轴 |
| Q/E | 末端升/降 | Z 轴 |

```python
# cartesian_control.py —— 笛卡尔空间键盘控制 SO-101
import math
import threading
import pybullet as p
import pybullet_data
import pyarrow as pa
from dora import Node
from pynput import keyboard


# SO-101 活动关节索引
ARM_JOINTS = [0, 1, 2, 3, 4]

# 目标末端位置（初始值在机械臂前方）
target_pos = [0.30, 0.0, 0.25]  # x, y, z
step_size = 0.02                # 每步移动 2cm

# 末端姿态固定（夹爪朝下）
target_orn = p.getQuaternionFromEuler([math.pi, 0, 0])  # 夹爪朝下


def solve_ik(robot_id, pos, orn):
    """用 PyBullet IK 求解器计算关节角度（返回角度制）。"""
    joint_angles_rad = p.calculateInverseKinematics(
        bodyUniqueId=robot_id,
        endEffectorLinkIndex=ARM_JOINTS[-1],   # 末端连杆索引
        targetPosition=pos,
        targetOrientation=orn,
        # 各关节位置下限、上限、范围（可选，帮助求解器收敛）
        lowerLimits=[-3.14] * 5,              # -180° ~ +180°
        upperLimits=[3.14] * 5,
        jointRanges=[6.28] * 5,
        restPoses=[0] * 5,
        maxNumIterations=100,
        residualThreshold=1e-5,
    )
    # 转角度制
    return [a * 180.0 / math.pi for a in joint_angles_rad[:5]]


def main():
    node = Node()

    # 按键映射：WASD/QE → 末端移动方向
    pressed_keys = set()
    global target_pos

    def on_press(key):
        pressed_keys.add(key)

    def on_release(key):
        pressed_keys.discard(key)

    listener = keyboard.Listener(on_press=on_press, on_release=on_release)
    listener.daemon = True
    listener.start()

    print("=" * 50, flush=True)
    print("  SO-101 笛卡尔空间控制", flush=True)
    print("=" * 50, flush=True)
    print("  W/S     末端前移/后移（X轴）", flush=True)
    print("  A/D     末端左移/右移（Y轴）", flush=True)
    print("  Q/E     末端升/降（Z轴）", flush=True)
    print("  空格     回初始位置", flush=True)
    print("  Esc      退出", flush=True)
    print("=" * 50, flush=True)

    for event in node:
        if event["type"] == "INPUT" and event["id"] == "tick":
            if keyboard.Key.esc in pressed_keys:
                print("\n退出", flush=True)
                break

            if keyboard.Key.space in pressed_keys:
                target_pos = [0.30, 0.0, 0.25]

            # 更新目标末端位置
            key_map = {
                keyboard.KeyCode.from_char("w"): (0, +step_size),
                keyboard.KeyCode.from_char("s"): (0, -step_size),
                keyboard.KeyCode.from_char("a"): (1, +step_size),
                keyboard.KeyCode.from_char("d"): (1, -step_size),
                keyboard.KeyCode.from_char("e"): (2, +step_size),
                keyboard.KeyCode.from_char("q"): (2, -step_size),
            }
            for key, (axis, delta) in key_map.items():
                if key in pressed_keys:
                    target_pos[axis] += delta

            # IK 计算关节角度
            # 注意：IK 需要 robot_id，这里把 robot_id 作为全局变量
            # 实际运行时，在 simulation_node.py 中将 robot_id 通过输出发给控制节点
            # 简化方案：在 dataflow.yml 中增加一个 IK 节点

            # 发送末端目标位置
            node.send_output(
                "target_pose",
                pa.array([
                    target_pos[0], target_pos[1], target_pos[2],
                    target_orn[0], target_orn[1], target_orn[2], target_orn[3],
                ]),
            )
            print(
                f"\r末端目标: ({target_pos[0]:.2f}, {target_pos[1]:.2f}, {target_pos[2]:.2f})",
                end="",
                flush=True,
            )

        elif event["type"] == "STOP":
            break

    listener.stop()


if __name__ == "__main__":
    main()
```

### IK 节点的架构

笛卡尔控制需要在数据流中增加一个 IK 节点。完整架构：

```
[键盘控制节点] ──target_pose──→  [IK 节点]  ──joint_cmd──→  [仿真节点]
   tick: 50ms                    robot_id     获取状态      tick: 4ms
                                                ↑
                                          [仿真节点]
                                          joint_state
```

**IK 节点**负责：
1. 从键盘节点接收目标位姿 `(x, y, z, qx, qy, qz, qw)`
2. 调用 `p.calculateInverseKinematics()` 求解关节角度
3. 发送关节角度到仿真节点

### ik_node.py

```python
# ik_node.py —— IK 求解节点：位姿 → 关节角度
import math
import pybullet as p
import pybullet_data
import pyarrow as pa
from dora import Node

ARM_JOINTS = [0, 1, 2, 3, 4]


def setup_dummy_env():
    """创建一个无 GUI 的 PyBullet 环境用于 IK 计算。"""
    _ = p.connect(p.DIRECT)          # DIRECT 模式，无窗口
    p.setAdditionalSearchPath(pybullet_data.getDataPath())
    import os
    urdf_dir = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "docs/public/SO101",
    )
    p.setAdditionalSearchPath(urdf_dir)
    urdf_path = os.path.join(urdf_dir, "so101_new_calib.urdf")
    robot_id = p.loadURDF(urdf_path, useFixedBase=True)
    return robot_id


def main():
    robot_id = setup_dummy_env()
    print("[IK 节点] 就绪", flush=True)

    node = Node()

    for event in node:
        if event["type"] == "INPUT" and event["id"] == "target_pose":
            data = event["value"].to_pylist()

            # 解析目标位姿
            pos = data[0:3]
            orn = data[3:7]

            # 求解 IK
            joint_angles_rad = p.calculateInverseKinematics(
                bodyUniqueId=robot_id,
                endEffectorLinkIndex=ARM_JOINTS[-1],
                targetPosition=pos,
                targetOrientation=orn,
                lowerLimits=[-3.14] * 5,
                upperLimits=[3.14] * 5,
                jointRanges=[6.28] * 5,
                restPoses=[0] * 5,
                maxNumIterations=100,
                residualThreshold=1e-5,
            )

            # 转角度制
            angles = [a * 180.0 / math.pi for a in joint_angles_rad[:5]]
            angles_rounded = [round(a, 2) for a in angles]

            print(f"  目标 {pos} → 关节角 {angles_rounded}", flush=True)

            node.send_output("joint_cmd", pa.array(angles_rounded))

        elif event["type"] == "STOP":
            break

    p.disconnect()


if __name__ == "__main__":
    main()
```

### 笛卡尔控制的 dataflow.yml

```yaml
nodes:
  - id: cartesian_control
    custom:
      source: cartesian_control.py
      inputs:
        tick: dora/timer/millis/50
      outputs:
        - target_pose

  - id: ik_solver
    custom:
      source: ik_node.py
      inputs:
        target_pose: cartesian_control/target_pose
      outputs:
        - joint_cmd

  - id: simulation
    custom:
      source: simulation_node.py
      inputs:
        tick: dora/timer/millis/4
        joint_cmd: ik_solver/joint_cmd
      outputs:
        - joint_state
```

### 运行笛卡尔模式

```bash
dora run dataflow_cartesian.yml
```

按 `W` `S` `A` `D` `E` `Q`，机械臂末端在 X/Y/Z 三个方向上移动。终端持续显示当前末端目标坐标。

:::details `p.calculateInverseKinematics` 参数详解
| 参数 | 含义 | 本节取值 |
|------|------|----------|
| `bodyUniqueId` | 机器人 ID | `robot_id` |
| `endEffectorLinkIndex` | 末端执行器连杆索引 | `4`（wrist_roll） |
| `targetPosition` | 目标三维坐标 | `[x, y, z]` |
| `targetOrientation` | 目标姿态（四元数） | 夹爪朝下 |
| `lowerLimits` | 各关节角度下限 | `[-π, -π, -π, -π, -π]` |
| `upperLimits` | 各关节角度上限 | `[+π, +π, +π, +π, +π]` |
| `restPoses` | 初始猜测角度 | 全零 |
| `maxNumIterations` | 最大迭代次数 | 100 |
| `residualThreshold` | 收敛阈值 | 1e-5 |

IK 求解器是一个数值优化过程——从 `restPoses`（初始猜测）开始，反复迭代调整关节角，直到末端逼近目标位姿（误差 < `residualThreshold`）或到达 `maxNumIterations`。

**要注意的坑**：目标位姿必须在机械臂的可达范围内。如果你让末端往 2 米外移动，IK 会返回一组角度——但它无法真正到达那里。如果机械臂突然跳到奇怪的姿态，说明目标位姿超出了工作空间。
:::

---

## 终极挑战：视觉闭环

如果你完成了第七章的 YOLO 物体检测，可以尝试把视觉和本章的控制连起来：

1. YOLO 检测到一个物体（如一个苹果），输出边界框中心坐标
2. 把像素坐标映射到世界坐标（简化：假设物体放在固定平面上）
3. 将世界坐标发送给 IK 节点 → 仿真节点
4. 机械臂自动移动到物体上方

这正好是第十一章毕业项目的核心逻辑——本章的笛卡尔控制已经把难度最大的 IK 和坐标变换打通了，第十一章只需把键盘输入换成 VLM 输出的自然语言指令。

---

## 项目评判标准

| 等级 | 标准 |
|------|------|
| ✅ 完成 | 基础目标：实时键盘控制 5 个关节，松开按键后机械臂停在当前位置 |
| 🌟 优秀 | 进阶目标：实现笛卡尔空间控制，按键移动末端，IK 求解正确 |
| 🏆 卓越 | 终极挑战：视觉闭环，机械臂自动移动到 YOLO 检测到的物体位置 |

---

## 常见问题

:::warning pynput 不工作（macOS）
确认已授予终端辅助功能权限：系统设置 → 隐私与安全性 → 辅助功能 → 勾选你的终端程序。授权后需要**完全退出并重新打开**终端。
:::

:::warning 机械臂抖动 / 末端乱飞
笛卡尔模式下，如果 IK 解不稳定（前后两帧的解差异很大），关节会剧烈抖动。可能原因：目标位姿超过了工作空间、初始猜测 (`restPoses`) 离最优解太远。解决方案：减小 `step_size`（如 `0.01`）、使用上一帧的 IK 解作为下一帧的 `restPoses`。
:::

:::warning `pynput` 的按键响应延迟
`pynput` 的键盘监听在后台线程运行，但 DORA 的事件循环在主线程。如果 `tick` 频率太低（如 200ms），按键响应会有明显延迟。建议 `tick` 设为 50ms 或更快。
:::

:::warning 同时按多个键不响应
部分键盘有键位冲突（ghosting）——同时按下的某些键组合会被硬件忽略。如果发现某些组合键不响应，换一组按键试试。
:::

## 小结

这个项目把第十章的所有知识点串成了完整的控制链：

- **基础**：按键增量控制关节 → 摆脱 `input()` 阻塞，实现实时流畅操控
- **进阶**：笛卡尔空间控制 → IK 消除"该转哪个关节"的心智负担，用直觉的空间坐标操控
- **终极**：视觉闭环 → 搭建感知→决策→控制的完整回路

你写的这些代码，在第十一章毕业项目中将直接复用——键盘输入换成 VLM 输出的自然语言指令，就是"说一句话，让机械臂看见并抓取"的完整闭环。
