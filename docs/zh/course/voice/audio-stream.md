---
description: 8.1 麦克风与音频流——使用 sounddevice 读取麦克风音频，理解音频数据的采样率、位深等概念，并将音频帧通过 DORA 数据流发送。
---

# 8.1 麦克风与音频流

让小莫"听见"的第一步是获取麦克风音频。本节使用 `sounddevice` 库从麦克风采集音频数据，并通过 DORA 节点发送到数据流中。

## 学习目标

学完本节，你将能够：

- 理解音频的基本参数（采样率、位深、声道数）
- 使用 `sounddevice` 从麦克风采集音频
- 将音频数据封装为 Arrow 数组并通过 DORA 发送

## 前置要求

- 电脑有麦克风（内置或外接）
- 安装依赖：`uv pip install sounddevice numpy pyarrow`

## 音频基本概念

在编码之前，需要了解几个关键参数：

| 参数 | 典型值 | 说明 |
|------|--------|------|
| 采样率 (sample rate) | 16000 Hz | 每秒采集的样本数，语音识别通常用 16kHz |
| 位深 (bit depth) | 16 bit | 每个样本的精度，16bit 是 CD 音质 |
| 声道数 (channels) | 1 (mono) | 单声道适用于语音识别 |
| 帧大小 (chunk size) | 1600 样本 | 每次采集的样本数（16kHz 下 1600 = 0.1 秒） |

音频在计算机中表示为一维数组，每个元素是一个样本值。16kHz、16bit、单声道的音频流，每秒产生 16000 个样本。

## 验证麦克风

在终端运行以下命令，确认麦克风可用：

```bash
uv run python -c "
import sounddevice as sd
print(f'采样率: {sd.query_devices(sd.default.device[0])[\"default_samplerate\"]}')
print('麦克风就绪')
"
```

## 麦克风节点

新建 `mic_node.py`：

```python
# mic_node.py —— 从麦克风采集音频并发送到数据流
import numpy as np
import pyarrow as pa
import sounddevice as sd
from dora import Node


SAMPLE_RATE = 16000    # 采样率 16kHz
CHUNK_SIZE = 1600      # 每次读取 0.1 秒


def main():
    node = Node()

    for event in node:
        if event["type"] == "INPUT":
            # 从麦克风读取一块音频
            audio = sd.rec(CHUNK_SIZE, samplerate=SAMPLE_RATE,
                           channels=1, dtype="int16")
            sd.wait()

            # audio 形状为 (1600, 1)，压平为一维
            audio_flat = audio.ravel()

            node.send_output(
                "audio",
                pa.array(audio_flat),
                metadata={
                    "sample_rate": str(SAMPLE_RATE),
                },
            )

        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

### 代码详解

```python
audio = sd.rec(CHUNK_SIZE, samplerate=SAMPLE_RATE, channels=1, dtype="int16")
sd.wait()
```

`sounddevice` 的阻塞式采集方式：`sd.rec` 开始录音，`sd.wait()` 等待录音完成。`CHUNK_SIZE` 指定每次采多少个样本，`dtype="int16"` 是 16 位有符号整数。

```python
audio_flat = audio.ravel()
```

`audio` 形状为 `(1600, 1)`，压平为 `(1600,)` 一维数组。

```python
metadata={"sample_rate": str(SAMPLE_RATE)}
```

在元数据中传递采样率，下游节点根据采样率处理音频。

## 配套 dataflow.yml

```yaml
nodes:
  - id: mic
    path: mic_node.py
    inputs:
      tick: dora/timer/millis/100    # 每 100ms 采集一块
    outputs:
      - audio
```

## 动手练习

:::tip 练习：写一个接收音频的节点
新建 `audio_monitor.py`，接收 `audio` 输入，打印音频的长度和最大值。
:::

:::details 参考答案
```python
from dora import Node

def main():
    node = Node()
    for event in node:
        if event["type"] == "INPUT" and event["id"] == "audio":
            audio = event["value"].to_pylist()
            print(f"音频帧: {len(audio)} 样本, 最大值: {max(abs(v) for v in audio)}", flush=True)
        elif event["type"] == "STOP":
            break

if __name__ == "__main__":
    main()
```
:::

## 常见问题 FAQ

:::warning `PortAudioError: Not enough buffer`
调整 `CHUNK_SIZE` 到更大（如 3200），或关闭其他占用音频设备的程序。
:::

:::warning 采集到的全是 0
检查麦克风权限（macOS 需要在系统设置中授予终端权限）。或者默认输入设备不对，指定设备：`sd.default.device = 1`。
:::

## 小结

- `sounddevice` 从麦克风采集音频，`sd.rec` + `sd.wait()`。
- 音频参数：16kHz 采样率、16bit 位深、单声道。
- 音频数据以 `int16` 数组形式发送，元数据中携带采样率。
