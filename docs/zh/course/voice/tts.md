---
description: 8.3 语音合成 Matcha-TTS——使用 sherpa-onnx 加载 Matcha-TTS 模型，把文字转为语音并播放。
---

# 8.3 语音合成：Matcha-TTS

小莫会"听懂"之后，还要会"说话"——这就是语音合成（TTS）。本节使用 **Matcha-TTS** 模型，通过 sherpa-onnx 运行，将文字转化为语音并播放。

Matcha-TTS 是一种轻量级语音合成模型，中文模型 `matcha-icefall-zh-baker` 基于标贝数据集训练，女声、效果自然。在树莓派 4 上 RTF（实时率）约 0.5-0.9，CPU 上运行流畅。

## 学习目标

学完本节，你将能够：

- 下载 Matcha-TTS 模型和声码器
- 写一个 Python 节点将文字转为语音
- 播放合成后的音频

## 前置要求

- 完成 [8.2 ASR 语音识别](./asr-sensevoice)，安装了 `sherpa-onnx`
- 有扬声器或耳机

## 下载 Matcha 模型

```bash
# 创建模型目录
mkdir -p models/matcha-tts

# 下载 Matcha 中文模型
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/matcha-icefall-zh-baker.tar.bz2
tar xvf matcha-icefall-zh-baker.tar.bz2
mv matcha-icefall-zh-baker models/matcha-tts/

# 下载声码器（vocoder）
wget https://github.com/k2-fsa/sherpa-onnx/releases/download/vocoder-models/vocos-22khz-univ.onnx
mv vocos-22khz-univ.onnx models/matcha-tts/
```

最终目录结构：

```
models/matcha-tts/
├── matcha-icefall-zh-baker/
│   ├── model-steps-3.onnx    # 声学模型（72MB）
│   ├── tokens.txt
│   ├── lexicon.txt
│   └── ... (dict, fst 等)
└── vocos-22khz-univ.onnx     # 声码器（51MB）
```

## TTS 节点

新建 `tts_node.py`：

```python
# tts_node.py —— 接收文字，合成为语音并播放
import sherpa_onnx
import sounddevice as sd
import numpy as np
import pyarrow as pa
from dora import Node


def create_tts():
    """创建 TTS 引擎"""
    config = sherpa_onnx.OfflineTtsConfig(
        model=sherpa_onnx.OfflineTtsModelConfig(
            matcha=sherpa_onnx.OfflineTtsMatchaModelConfig(
                acoustic_model="./models/matcha-tts/matcha-icefall-zh-baker/model-steps-3.onnx",
                vocoder="./models/matcha-tts/vocos-22khz-univ.onnx",
                lexicon="./models/matcha-tts/matcha-icefall-zh-baker/lexicon.txt",
                tokens="./models/matcha-tts/matcha-icefall-zh-baker/tokens.txt",
            ),
            num_threads=2,
        ),
    )
    return sherpa_onnx.OfflineTts(config)


def main():
    tts = create_tts()
    node = Node()

    for event in node:
        if event["type"] == "INPUT":
            if event["id"] == "text":
                text = event["value"][0].as_py()
                if not text:
                    continue

                print(f"TTS: 正在合成「{text}」", flush=True)

                # 生成语音（返回 22050Hz 采样率的 int16 数组）
                audio = tts.generate(text, sid=0, speed=1.0)

                # 播放
                sd.play(audio.samples, samplerate=audio.sample_rate)
                sd.wait()

                print("TTS: 播放完成", flush=True)

        elif event["type"] == "STOP":
            break


if __name__ == "__main__":
    main()
```

### 代码详解

```python
config = sherpa_onnx.OfflineTtsConfig(
    model=sherpa_onnx.OfflineTtsModelConfig(
        matcha=sherpa_onnx.OfflineTtsMatchaModelConfig(...),
        num_threads=2,
    ),
)
```

`sherpa-onnx` 的 TTS 配置采用嵌套结构：`OfflineTtsConfig` → `OfflineTtsModelConfig` → `OfflineTtsMatchaModelConfig`。`num_threads=2` 指定推理线程数。

```python
audio = tts.generate(text, sid=0, speed=1.0)
```

`sid=0` 指定说话人 ID（这个模型只有一个说话人）。`speed=1.0` 是语速系数。返回的 `audio.samples` 是 `int16` 数组，`audio.sample_rate` 是采样率（22050Hz）。

```python
sd.play(audio.samples, samplerate=audio.sample_rate)
sd.wait()
```

用 `sounddevice` 播放合成的语音。

## 数据流配置

```yaml
nodes:
  - id: tts
    path: tts_node.py
    inputs:
      text: dora/timer/millis/5000    # 测试用，每 5 秒合成一句
    outputs: []
```

先用定时器自测，确认 TTS 能正常工作：

```
uv run python -c "
import sherpa_onnx

config = sherpa_onnx.OfflineTtsConfig(
    model=sherpa_onnx.OfflineTtsModelConfig(
        matcha=sherpa_onnx.OfflineTtsMatchaModelConfig(
            acoustic_model='./models/matcha-tts/matcha-icefall-zh-baker/model-steps-3.onnx',
            vocoder='./models/matcha-tts/vocos-22khz-univ.onnx',
            lexicon='./models/matcha-tts/matcha-icefall-zh-baker/lexicon.txt',
            tokens='./models/matcha-tts/matcha-icefall-zh-baker/tokens.txt',
        ),
        num_threads=2,
    ),
)
tts = sherpa_onnx.OfflineTts(config)
audio = tts.generate('你好，我是小莫！欢迎来到 DORA 的世界。', sid=0, speed=1.0)
print(f'生成 {len(audio.samples)} 个样本，采样率 {audio.sample_rate}Hz')
"
```

如果扬声器传出声"你好，我是小莫！"，说明 TTS 一切正常。

## 常见问题 FAQ

:::warning 语音合成很慢
首次加载模型需要几秒钟，这是正常的。后续合成速度会稳定。可以增加 `num_threads`（如 4）来加速。
:::

:::warning 播放没有声音
检查系统音量、扬声器是否正常。尝试用 `sounddevice.play` 播放一个测试音：

```python
import sounddevice as sd
import numpy as np
sd.play(np.zeros(16000, dtype=np.int16), 16000)
```
:::

:::warning 模型文件找不到
确认模型路径正确。可以使用绝对路径或在脚本所在目录执行。
:::

## 小结

- Matcha-TTS + sherpa-onnx 实现纯 CPU 中文语音合成。
- `tts.generate(text, sid, speed)` 生成语音，返回 `int16` 数组。
- 配合 `sounddevice` 播放合成音频。
