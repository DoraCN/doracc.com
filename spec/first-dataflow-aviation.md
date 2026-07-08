# 第三章 写作方案：第一个数据流——dora 小飞机

> 对标 ROS 的 turtlesim（小乌龟）：用一个能立刻上手玩的小飞机，让零基础学员亲手感受"数据流"。
> 本章基于**已完成的真实工程**，学生只运行体验、不写代码。写代码从第四章（Python）开始。

## 一、依据工程（现成）

- 仓库：`https://atomgit.com/DoraCN/aviation`
- 技术栈：**Rust + Bevy 0.19**（游戏引擎），edition 2024，Rust ≥ 1.88。
- 依赖的 dora 版本：`dora-node-api` 锁定 `rev = 25bac6b3e5ed7435f49bd494e0ff4ef81ee0a674`——**与本课程锁定 commit 完全一致**。
- 资源用 `include_bytes!` 编进二进制，任意工作目录 `dora run` 都能显示。

### 三个二进制
| 二进制 | dora | 说明 |
|--------|:---:|------|
| `aviation` | 否 | 独立键盘版：直接键盘控制 |
| `aviation-controller` | 是 | 控制器节点：GUI 四方向按钮 + 键盘，输出 `cmd` |
| `aviation-dora` | 是 | 小飞机节点：收 `cmd` 驱动飞行，回传 `pose` |

### 数据流（dataflow.yml）
```yaml
nodes:
  - id: controller
    path: target/release/aviation-controller
    inputs:
      tick: dora/timer/millis/16   # ~60Hz 周期发送
    outputs: [cmd]
  - id: aviation
    path: target/release/aviation-dora
    inputs:
      cmd: controller/cmd
    outputs: [pose]
```

### 数据格式（绝佳的 Arrow 教学样本）
| 方向 | id | Arrow 类型 | 内容 |
|------|-----|-----------|------|
| controller → aviation | `cmd` | `Float32Array[2]` | `[旋转系数, 前进系数]`，取值 [-1,1] |
| aviation → 下游 | `pose` | `Float32Array[3]` | `[x, y, angle]` |

### 操作
- `W/↑` 前进加速、`S/↓` 反推、`A/←` 逆时针、`D/→` 顺时针；飞行留白色轨迹，可"清除轨迹"。

## 二、本章定位

- **小项目①：只运行体验，不写代码**——先用小飞机建立"数据流"的感性认识；亲手写节点从第四章（Python）开始。
- 教学顺序：**先体验（小飞机）→ 再动手（Python 节点）**，符合零基础"先感性后理性"。

## 三、章节结构（每小节一页）

- 3.1 获取并编译小飞机工程：在朵拉魔盒内置终端 `cargo build --release --features dora --bins`（顺带演示"魔盒编译 Rust 产物"）。
- 3.2 `dora run dataflow.yml` 跑起来：弹出控制器 + 小飞机两个窗口，点按键，飞机飞。
- 3.3 读懂 `dataflow.yml`：controller → aviation，谁写谁读（配黑板比喻）。
- 3.4 看懂在流动的数据：`cmd`（旋转/前进）与 `pose`（x,y,angle），初识 Arrow 数组。
- 3.5 **啊哈实验**：把 `cmd: controller/cmd` 那行删掉再跑——飞机不动了！瞬间理解"连线=数据在流动"。

## 四、黑板比喻映射

- 控制器把"向上飞"写到黑板（`cmd`），小飞机抬眼看到就照做——两个独立程序，靠一块黑板协作。
- `pose` 是小飞机把自己的位置写回黑板，供下游读取。

## 五、需要向学生澄清的点（重要）

1. **图形显卡 ≠ AI 显卡**：Bevy 需要**图形驱动**（Vulkan/Metal/OpenGL，几乎所有电脑的集成显卡都支持），这与课程"AI 模型不强依赖 GPU（CUDA 独显）"是两回事，需明确区分，避免误解。
2. **无图形环境的限制**：纯服务器 / 无显示的虚拟机可能无法运行 Bevy 窗口；课程需提示此场景，并给出（如独立键盘版 / 换有图形界面的机器）建议。
3. **本章不需要会 Rust**：小飞机是现成 Rust 程序，学生只运行；写节点用 Python，在第四章。

## 六、可选延伸练习（配参考答案）

- 观察日志里 `cmd`/`pose` 的数值随操作变化。
- 尝试再接一个下游节点订阅 `pose`（为后续"多订阅者"埋点）。
- 对比独立键盘版 `aviation` 与 dora 版的差别，理解"数据流把控制与显示解耦"。
