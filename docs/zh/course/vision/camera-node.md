---
description: 7.1 摄像头节点——用 OpenCV 读取摄像头画面，通过 DORA 节点将图像帧以 Arrow 格式发送到数据流中。
---

# 7.1 摄像头节点

从这一章开始，小莫要"睁开眼睛"了。摄像头是机器人感知世界的第一扇窗户——本节我们写一个 Python 节点，用 OpenCV 读取摄像头画面，并把每一帧图像通过 DORA 数据流发出去。

## 学习目标

学完本节，你将能够：

- 用 OpenCV 打开摄像头并逐帧读取画面
- 把图像帧转换成 Arrow 数组，通过 DORA 节点发送
- 理解摄像头节点的典型结构

## 前置要求

- 完成[第四章](../python-node/)，熟练使用 Python 写 DORA 节点
- 完成[第五章](../data/)，理解 `pa.array`、`ravel()`、`to_numpy()` 的用法
- 电脑有内置或外接摄像头

## 图像在 DORA 中的表示

第五章说过，图像本质上是一个三维数组：`(高度, 宽度, 通道数)`。例如 640×480 的彩色图就是 `(480, 640, 3)`。

DORA 节点之间传递的是 Arrow 数组，而 Arrow 数组是一维的。要把三维图像传过去，需要：

1. **发送前**：用 `.ravel()` 把图像压平成一维
2. **接收后**：用 `.reshape()` 还原成三维

这个模式在第五章已经见过，本节会实际用起来。

## 准备工作

### 安装依赖

摄像头节点需要 `opencv-python` 库：

```bash
uv pip install opencv-python pyarrow
```

### 验证摄像头

在终端运行以下命令，确认摄像头可用：

```bash
uv run python -c "
import cv2
cap = cv2.VideoCapture(0)
ret, frame = cap.read()
print(f'摄像头就绪，画面尺寸: {frame.shape}')
cap.release()
"
```

应输出类似 `摄像头就绪，画面尺寸: (480, 640, 3)`。如果报错，检查摄像头是否被其他程序占用。

## 第一个摄像头节点

新建 `camera_node.py`：

```python
# camera_node.py —— 读取摄像头画面，逐帧发送到数据流
import cv2
import numpy as np
import pyarrow as pa
from dora import Node


def main():
    # 打开摄像头（默认 0 号设备）
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("错误：无法打开摄像头", flush=True)
        return

    # 设置较低的采集分辨率以降低负载
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

    node = Node()

    for event in node:
        if event["type"] == "INPUT":
            # 读取一帧画面
            ret, frame = cap.read()
            if not ret:
                print("错误：读取画面失败", flush=True)
                continue

            # 发送图像数据
            # frame.shape 约为 (480, 640, 3)，type 为 uint8
            node.send_output(
                "image",
                pa.array([frame.ravel()]),          # 压平为一维后发送
            )

        elif event["type"] == "STOP":
            break

    # 释放摄像头
    cap.release()


if __name__ == "__main__":
    main()
```

### 代码详解

**打开摄像头：**

```python
cap = cv2.VideoCapture(0)
```

`0` 表示默认摄像头。如果只有一个摄像头，通常就是 0。如果有多个，可以改为 1、2 等。

**设置分辨率：**

```python
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
```

降低分辨率可以减少数据量，避免数据流负载过高。640×480 是一个很好的平衡点。

**读取帧：**

```python
ret, frame = cap.read()
```

`frame` 是一个 NumPy 数组，形状 `(高度, 宽度, 3)`，每个像素值为 0-255 的 `uint8` 整数。

**发送图像：**

```python
node.send_output(
    "image",
    pa.array([frame.ravel()]),
)
```

`frame.ravel()` 把 `(480, 640, 3)` 的三维数组压平成一维（共 480×640×3 = 921,600 个元素），然后 `pa.array([...])` 将其包裹成 Arrow 数组发送出去。

## 配套 dataflow.yml

控制摄像头节点以固定帧率运行：

```yaml
nodes:
  - id: camera
    path: camera_node.py
    inputs:
      tick: dora/timer/millis/33      # 约 30 帧/秒
    outputs:
      - image
```

## 动手练习

:::tip 练习：写一个接收图像的节点
新建 `image_viewer.py`，接收 `image` 输入，把收到的数据还原为图像并用 OpenCV 的 `imshow` 显示出来。

提示：使用第五章学的 `[0].values.to_numpy(zero_copy_only=False).view(np.uint8).reshape(h, w, 3)` 还原。先写死为 480×640。
:::

:::details 参考答案
```python
import numpy as np
import cv2
from dora import Node

def main():
    node = Node()
    for event in node:
        if event["type"] == "INPUT" and event["id"] == "image":
            # 还原图像
            flat = event["value"][0].values.to_numpy(zero_copy_only=False)
            frame = flat.view(np.uint8).reshape((480, 640, 3))
            cv2.imshow("Camera", frame)
            cv2.waitKey(1)
        elif event["type"] == "STOP":
            break
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
```
:::

## 常见问题 FAQ

:::warning `cv2.error: ... is not a camera`
摄像头被其他程序占用（如系统相机、视频会议软件）。关闭其他占用摄像头的程序后重试。
:::

:::warning 画面很卡 / 延迟大
检查定时器频率。`millis/33` 对应约 30fps，如果机器性能不足可以降低到 `millis/66`（15fps）。也可以降低摄像头分辨率。
:::

:::warning `ModuleNotFoundError: No module named 'cv2'`
未安装 opencv-python。执行 `uv pip install opencv-python`。
:::

## 小结

- 用 `cv2.VideoCapture(0)` 打开摄像头，`cap.read()` 逐帧读取。
- 图像是形状 `(H, W, 3)` 的 NumPy 数组，发送前用 `.ravel()` 压平。
- 定时器控制帧率，`millis/33` ≈ 30fps。
- 接收端用 `.reshape()` 还原图像。

下一节，我们深入图像在数据流中的传递细节——零拷贝和图像元数据。
