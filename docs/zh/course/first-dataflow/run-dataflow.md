---
description: 3.2 dora run 跑起来——启动小飞机数据流，在控制器上点击按钮，让小飞机飞起来，第一次感受"数据在流动"。
---

# 3.2 dora run 跑起来

编译完成后，我们要运行一条真正的 DORA 数据流——两个节点（控制器 + 小飞机）通过 `dataflow.yml` 连接起来，在你面前展示"数据流动"的效果。

## 学习目标

学完本节，你将能够：

- 用 `dora run` 运行一条数据流
- 通过 GUI 按钮控制小飞机飞行
- 理解数据流运行时的命令行输出

## 第一步：确认文件位置

确保你在 `aviation/` 目录下，且已成功编译：

```bash
ls dataflow.yml
# 应显示 dataflow.yml 存在

ls target/release/aviation-controller target/release/aviation-dora
# 两个二进制都应存在
```

如果缺少二进制，回退到 [3.1 节](./build-aviation) 重新编译。

## 第二步：运行数据流

在 `aviation/` 目录下执行：

```bash
dora run dataflow.yml
```

你会看到类似如下的输出：

```
[coordinator] - Starting coordinator on port 12345
[daemon] - Starting daemon with coordinator at localhost:12345
[daemon] - Starting node "controller" from dataflow.yml
[daemon] - Starting node "aviation" from dataflow.yml
```

然后**两个窗口**会同时弹出：

- **小飞机窗口**（左侧）：标题为"航空模拟器"，显示一架小飞机，飞行时留下白色轨迹线
- **控制器窗口**（右侧）：标题为"控制器"，包含四个方向按钮（↑ ← → ↓）

![小飞机运行界面](/aviation.png)

> 上图是运行时的界面：左侧为小飞机的飞行可视化（含轨迹），右侧为控制面板，可通过鼠标点击按钮或键盘方向键控制。

:::warning 如果窗口没有弹出
- 确认你有图形显示环境（非纯 SSH 连接）。
- 如果在 macOS 上第一次运行 Bevy，可能会弹出"允许网络连接"的提示，点"允许"即可。
- 如果报错关于 Vulkan/Metal 驱动，尝试更新显卡驱动或换一台有桌面环境的机器。也可以回退到独立键盘版（`cargo run`）体验。
- 如果真的没有图形环境，可以跳到 [3.3 节](./read-yaml) 继续学习，YAML 和概念部分不依赖图形窗口。

:::

## 第三步：控制小飞机飞行

在**控制器窗口**上点击按钮，或在控制器窗口激活时按键盘：

| 操作 | 效果 |
|------|------|
| 点击 **↑** 或按 `W`/`↑` | 小飞机向前加速 |
| 点击 **↓** 或按 `S`/`↓` | 小飞机向后反推 |
| 点击 **←** 或按 `A`/`←` | 小飞机逆时针旋转 |
| 点击 **→** 或按 `D`/`→` | 小飞机顺时针旋转 |
| 点击"清除轨迹" | 擦除小飞机留下的白色轨迹线 |

试着：

1. 点击 ↑ 让小飞机飞一段
2. 不松开时再按 ← 或 →，观察它会转弯
3. 松开所有按钮，小飞机会**停下来**（因为没有 `cmd` 指令了）
4. 飞够后点"清除轨迹"擦掉路径

:::info 小莫
看到了吗？你点击按钮 → 控制器发出指令 → 小飞机收到指令然后运动——这就是"数据在流动"最直观的样子！你按一次按键，数据就在两个独立程序之间走了一圈。
:::

## 观察终端输出

运行期间，终端会持续输出日志信息，显示 `cmd` 和 `pose` 数据的变化：

```
[aviation] Received cmd: [0.0, 1.0]
[aviation] Publishing pose: [10.5, 23.1, 12.3]
[aviation] Received cmd: [0.5, 1.0]
[aviation] Publishing pose: [15.2, 28.7, 45.0]
```

这些日志会在 [3.4 节](./data-cmd-pose) 详细解释。

## 停止数据流

在终端中按 `Ctrl+C` 即可停止数据流，两个窗口会同时关闭。

## 动手练习

:::tip 练习：在独立键盘版和 DORA 版之间切换
先 `Ctrl+C` 停止数据流。然后运行独立键盘版 `cargo run`，用键盘控制飞机飞行。再切回 DORA 版 `dora run dataflow.yml`。你觉得两种方式有什么区别？
:::

:::details 参考答案
区别在于控制逻辑和数据流的解耦程度：

- **独立键盘版**：控制逻辑和显示逻辑在**同一个进程**里，代码耦合。
- **DORA 版**：控制器和飞机是**两个独立进程**，通过 DORA 数据流通信。你可以想象：如果把控制器换成手机 App、小飞机换成真实无人机，中间不需要改任何代码——这就是数据流架构的解耦威力。

:::

## 常见问题 FAQ

:::warning `dora run` 提示找不到二进制
`target/release/aviation-controller` 不是有效的可执行文件。确认：
1. 编译时加了 `--features dora --bins`（不是单纯 `cargo build`）。
2. 你在 `aviation/` 目录下执行的 `dora run`（`dataflow.yml` 里 `path` 是相对路径）。

:::

:::warning 控制器窗口打开了，小飞机窗口没打开
可能 `aviation-dora` 未正确编译或启动失败。检查终端输出中是否有 `[daemon] - Starting node "aviation"` 之后的报错信息。
:::

:::warning 按下按钮但小飞机不动
检查是否**先点击了控制器窗口让其获得焦点**，再按键盘。如果焦点在小飞机窗口上，键盘事件会被小飞机窗口捕获而非控制器。
:::

## 小结

- `dora run dataflow.yml` 启动数据流，两个窗口弹出。
- 通过控制器窗口的按钮或键盘，让小飞机动起来。
- 停止用 `Ctrl+C`，数据流会优雅地关闭所有节点。

现在你已经亲手跑通了一条 DORA 数据流。下一节，我们来揭开 `dataflow.yml` 的面纱，看看控制指令到底是怎么传给小飞机的。
