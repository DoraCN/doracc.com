---
description: 8.2 语音识别 SenseVoiceSmall——使用 sherpa-onnx 加载 SenseVoiceSmall 模型，对麦克风音频做实时语音识别，输出文字结果。
---

# 8.2 语音识别：SenseVoiceSmall

麦克风就位后，接下来让 DORA 节点调用 **SenseVoiceSmall** 语音识别模型，把音频转为文字。

SenseVoiceSmall 是阿里达摩院开源的轻量语音识别模型，支持中文、英文、粤语、日语、韩语。通过 `sherpa-onnx` 运行时以 ONNX 格式运行，纯 CPU、免 PyTorch。

## 学习目标

学完本节，你将能够：

- 安装 sherpa-onnx 并下载 SenseVoice 模型
- 写一个 Python 节点加载 ASR 模型，对音频做语音识别
- 将识别结果发送到数据流中

## 前置要求

- 完成 [8.1 麦克风与音频流](./audio-stream)，能采集麦克风音频

## 安装 sherpa-onnx

`sherpa-onnx` 是一个跨平台、纯 CPU 的语音推理库，无需安装 PyTorch 或 CUDA。

```bash
uv pip install sherpa-onnx
```

## 下载 SenseVoice 模型

```bash
# 创建模型目录
mkdir -p models/sense-voice

# 下载 SenseVoiceSmall ONNX 模型
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-sense-voice-zh-en-ja-ko-yue-2024-07-17.tar.bz2

# 解压
tar xvf sherpa-onnx-sense-voice-zh-en-ja-ko-yue-2024-07-17.tar.bz2
mv sherpa-onnx-sense-voice-zh-en-ja-ko-yue-2024-07-17 models/sense-voice/
```

:::tip 国内网络加速
如果 GitHub 下载慢，可使用 ModelScope 镜像：

```bash
git lfs install
git clone https://www.modelscope.cn/iic/SenseVoiceSmall.git models/sense-voice
```
需安装 `git-lfs`。模型约 40MB。
:::

## ASR 识别节点

新建 `asr_node.py`：

```python
# asr_node.py —— 接收音频帧，用 SenseVoiceSmall 做语音识别
import sherpa_onnx
import numpy as np
import pyarrow as pa
from dora import Node


def create_recognizer():
    """创建离线识别器"""
    return sherpa_onnx.OfflineRecognizer.from_sense_voice(
        model="./models/sense-voice/sherpa-onnx-sense-voice-zh-en-ja-ko-yue-2024-07-17/model.int8.onnx",
        tokens="./models/sense-voice/sherpa-onnx-sense-voice-zh-en-ja-ko-yue-2024-07-17/tokens.txt",
        use_itn=True,
        num_threads=2,
    )


def main():
    recognizer = create_recognizer()
    node = Node()

    audio_buffer = []      # 累积音频片段

    for event in node:
        if event["type"] == "INPUT":
            if event["id"] == "audio":
                # 收到音频帧，追加到缓冲区
                samples = event["value"].to_pylist()
                audio_buffer.extend(samples)

                # 当缓冲区超过 1 秒（16000 样本），开始识别
                if len(audio_buffer) >= 16000:
                    # 转为 int16 numpy 数组
                    audio_array = np.array(audio_buffer, dtype=np.int16)

                    # 创建音频流
                    stream = recognizer.create_stream()
                    stream.accept_waveform(16000, audio_array)

                    # 运行识别
                    recognizer.decode_stream(stream)
                    text = stream.result.text.strip()

                    if text:
                        print(f"识别: {text}", flush=True)
                        node.send_output("text", pa.array([text]))

                    # 清空缓冲区，保留最后 0.5 秒用于下次拼接
                    audio_buffer = audio_buffer[-8000:]

        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

### 代码详解

```python
recognizer = sherpa_onnx.OfflineRecognizer.from_sense_voice(...)
```

用 sherpa-onnx 的 `OfflineRecognizer` 加载 SenseVoice 模型。`use_itn=True` 启用逆文本正则化（将数字文字转为阿拉伯数字等）。

```python
samples = event["value"].to_pylist()
audio_buffer.extend(samples)
```

累积音频片段到缓冲区。每次收到 `audio` 输入，追加到 `audio_buffer`。

```python
if len(audio_buffer) >= 16000:
```

当累积音频超过 1 秒（16kHz × 1s = 16000 样本），触发识别。这个阈值可以调整：越小响应越快，但准确率可能下降。

```python
stream = recognizer.create_stream()
stream.accept_waveform(16000, audio_array)
recognizer.decode_stream(stream)
text = stream.result.text.strip()
```

sherpa-onnx 的识别流程：创建流 → 输入波形 → 解码 → 获取结果。

```python
audio_buffer = audio_buffer[-8000:]
```

保留最后 0.5 秒音频，用于和下一段拼接，避免说话中途切词。

## 数据流配置

`dataflow.yml`：

```yaml
nodes:
  - id: mic
    path: mic_node.py
    inputs:
      tick: dora/timer/millis/100
    outputs:
      - audio

  - id: asr
    path: asr_node.py
    inputs:
      audio: mic/audio
    outputs:
      - text
```

## 动手练习

:::tip 练习：打印识别结果的详细信息
`stream.result` 除了 `text` 属性外，还有 `sentences` 列表（每个 `Sentence` 包含 `text`、`start`、`end` 时间戳）。修改 `asr_node.py`，打印每句话的时间戳。
:::

:::details 参考答案
```python
for sentence in stream.result.sentences:
    print(f"[{sentence.start:.1f}s - {sentence.end:.1f}s] {sentence.text}", flush=True)
```
:::

## 常见问题 FAQ

:::warning `sherpa_onnx` 导入失败
确认安装了 `sherpa-onnx`：`uv pip install sherpa-onnx`。如果仍失败，可能需要安装 `onnxruntime`。
:::

:::warning 识别结果为空
- 麦克风是否正常工作？
- 音频采样率是否为 16000？
- 说话声音是否足够大？
- 尝试调大 `len(audio_buffer) >= 16000` 的阈值（如 32000）。

:::

## 小结

- sherpa-onnx 是纯 CPU 的语音推理库，无需 PyTorch。
- SenseVoiceSmall 支持中英日韩粤等多语言识别。
- 累积音频到缓冲区（≥1 秒），触发识别，保留尾部用于拼接。
- 识别结果通过 `text` 输出发送。
