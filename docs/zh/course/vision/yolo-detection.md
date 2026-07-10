---
description: 7.3 Python 节点接入 YOLO——用 Python 和 ultralytics 库直接接入 YOLOv8 物体检测，理解检测结果的格式。
---

# 7.3 Python 节点接入 YOLO

摄像头就位后，下一步是让小莫"看懂"画面中的内容。本节我们**自己写一个 Python 节点来调用 YOLO**——用 `ultralytics` 库直接加载 YOLOv8 模型，在数据流中做实时物体检测。

## 学习目标

学完本节，你将能够：

- 安装并加载 YOLOv8 模型
- 写一个 Python 节点接收图像、调用 YOLO 检测、输出结果
- 理解 YOLO 检测结果的结构化数据格式（边界框）
- 用 `pyarrow` 创建 StructArray 发送结构化数据

## 前置要求

- 完成 [7.2 图像在数据流中传递](./image-in-dataflow)，理解图像的发送和接收
- 有可用的摄像头（如无可使用图片文件替代）
- 安装了 Python 依赖：`ultralytics`、`opencv-python`、`pyarrow`

## 准备工作：安装依赖

```bash
uv pip install ultralytics opencv-python pyarrow
```

## 安装 ultralytics

[ultralytics](https://github.com/ultralytics/ultralytics) 是一个开源的计算机视觉库，提供了 YOLOv8 模型的加载和推理接口。

```bash
uv pip install ultralytics
```

:::tip 模型自动下载
首次运行时会自动下载 `yolov8n.pt` 模型文件（约 6MB），保存在 `~/.cache/ultralytics/` 目录下。如果网络慢，可以手动下载并放到该目录。
:::

## 直接调用 YOLO 的节点

我们写一个 Python 节点，它接收 `image` 输入（摄像头画面）、调用 YOLO 推理、输出 `bbox`（检测到的物体列表）。

新建 `yolo_node.py`：

```python
# yolo_node.py —— 直接调用 YOLOv8 的物体检测节点
import numpy as np
import pyarrow as pa
from dora import Node
from ultralytics import YOLO


def main():
    # 加载 YOLOv8n 模型（n = nano，体积最小、速度最快）
    model = YOLO("yolov8n.pt")

    node = Node()

    for event in node:
        if event["type"] == "INPUT":
            if event["id"] == "image":
                # 还原图像
                meta = event["metadata"]
                h = int(meta["height"])
                w = int(meta["width"])
                flat = event["value"][0].values.to_numpy(zero_copy_only=False)
                frame = flat.view(np.uint8).reshape((h, w, 3))

                # 用 YOLO 做推理
                results = model(frame, verbose=False)

                # 解析检测结果
                detections = []
                for box in results[0].boxes:
                    x, y, w, h = box.xywh[0].tolist()  # 边界框中心点 + 宽高
                    conf = float(box.conf[0])            # 置信度
                    label = results[0].names[int(box.cls[0])]  # 类别名

                    # 转换为左上角坐标
                    x1 = x - w / 2
                    y1 = y - h / 2

                    detections.append({
                        "x": x1,
                        "y": y1,
                        "w": w,
                        "h": h,
                        "confidence": conf,
                        "label": label,
                    })

                # 发送检测结果
                node.send_output(
                    "bbox",
                    pa.array(detections),   # 字典列表 → 自动转为 StructArray
                )

        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

### 代码详解

**加载模型：**

```python
model = YOLO("yolov8n.pt")
```

`"yolov8n.pt"` 是预训练模型文件名。`n` 表示 nano（最小版本），约 6MB，CPU 上每秒可处理 10-30 帧。也可替换为 `yolov8s.pt`（small，精度更高但更慢）。

**执行推理：**

```python
results = model(frame, verbose=False)
```

`frame` 是 NumPy 数组（形状 H×W×3），`verbose=False` 关闭控制台输出。返回一个 `Results` 对象列表（每张图一个结果，这里只有一张）。

**解析结果：**

```python
for box in results[0].boxes:
    x, y, w, h = box.xywh[0].tolist()
    conf = float(box.conf[0])
    label = results[0].names[int(box.cls[0])]
```

每个 `box` 包含：

| 属性 | 类型 | 说明 |
|------|------|------|
| `box.xywh` | Tensor | `[x_center, y_center, width, height]` |
| `box.conf` | Tensor | 置信度（0-1） |
| `box.cls` | Tensor | 类别索引（整数） |
| `results[0].names` | dict | 索引 → 类别名（如 `{0: "person", 1: "bicycle", ...}`） |

**发送 StructArray：**

```python
node.send_output("bbox", pa.array(detections))
```

`detections` 是一个字典列表，`pa.array(detections)` 会自动转换为 **Arrow StructArray**——每个字典的键成为字段名，值成为字段值。接收方用 `.to_pylist()` 可以一键转回字典列表。

## 连接摄像头和 YOLO 节点

`dataflow.yml`：

```yaml
nodes:
  - id: camera
    path: camera_node.py
    inputs:
      tick: dora/timer/millis/33
    outputs:
      - image

  - id: detection
    path: yolo_node.py
    inputs:
      image: camera/image
    outputs:
      - bbox
```

## 消费检测结果：打印识别内容

新建 `detection_printer.py`：

```python
# detection_printer.py —— 打印 YOLO 检测结果
from dora import Node


def main():
    node = Node()

    for event in node:
        if event["type"] == "INPUT":
            if event["id"] == "bbox":
                detections = event["value"].to_pylist()

                for obj in detections:
                    label = obj["label"]
                    conf = obj["confidence"]
                    print(
                        f"检测到: {label} (置信度: {conf:.2f})",
                        flush=True,
                    )

        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

## 完整数据流

```yaml
nodes:
  - id: camera
    path: camera_node.py
    inputs:
      tick: dora/timer/millis/33
    outputs:
      - image

  - id: detection
    path: yolo_node.py
    inputs:
      image: camera/image
    outputs:
      - bbox

  - id: printer
    path: detection_printer.py
    inputs:
      bbox: detection/bbox
```

运行：

```bash
dora run dataflow.yml
```

将摄像头对准人或物体：

```
检测到: person (置信度: 0.93)
检测到: cell phone (置信度: 0.71)
检测到: person (置信度: 0.88)
```

按 `Ctrl+C` 停止。

## 动手练习

:::tip 练习：只显示置信度 > 0.8 的结果
改造 `yolo_node.py`，在 `detections` 列表添加之前过滤掉置信度低于 0.8 的检测结果。
:::

:::details 参考答案
```python
for box in results[0].boxes:
    conf = float(box.conf[0])
    if conf < 0.8:
        continue    # 跳过低置信度的结果
    # ... 其余代码不变
```
:::

## 常见问题 FAQ

:::warning `ModuleNotFoundError: No module named 'ultralytics'`
未安装 ultralytics 库。执行 `uv pip install ultralytics`。
:::

:::warning 检测很慢
YOLOv8n 在 CPU 上每帧约 50-200ms。如果觉得慢，可以降低摄像头帧率到 `millis/100`（约 10fps），或使用更低分辨率。
:::

:::warning 模型下载失败
YOLOv8n 首次运行时自动从 GitHub Releases 下载。如果网络慢，可手动下载 `yolov8n.pt`：`https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8n.pt`，放到 `~/.cache/ultralytics/`。
:::

## 小结

- 用 `ultralytics.YOLO("yolov8n.pt")` 直接加载 YOLO 模型进行推理。
- 检测结果包含边界框（`xywh`）、置信度（`conf`）、类别（`cls`）。
- 用 `pa.array(detections)` 将字典列表转为 Arrow StructArray 发送。
- 接收方用 `.to_pylist()` 转回字典列表。

下一节是本章实战——把摄像头、YOLO 检测、结果绘制串成一条完整的实时视觉流水线。
