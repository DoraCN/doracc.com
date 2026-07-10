---
description: 第八章 · 语音与流式——用麦克风采集音频、sherpa-onnx 做语音识别（SenseVoiceSmall）与合成（Matcha-TTS），结合 Streaming 模式实现可打断对话。
---

# 第八章 · 语音与流式

> 本章主题：👂🗣 语音与流式

从本章开始，小莫可以"听见"并"说话"了。我们搭建一条语音流水线：麦克风采集音频 → SenseVoice 语音识别 → Matcha-TTS 语音合成 → 可打断对话。

## 本章内容

- **[8.1 麦克风与音频流](./audio-stream)**：用 sounddevice 从麦克风采集音频
- **[8.2 语音识别：SenseVoiceSmall](./asr-sensevoice)**：sherpa-onnx 离线语音识别
- **[8.3 语音合成：Matcha-TTS](./tts)**：sherpa-onnx 文字转语音
- **[8.4 可打断对话](./streaming-dialog)**：Streaming 模式实现语音打断
- **[🎯 小项目⑤：和小莫语音互动](./project-voice)**：完整语音交互流水线

## 前置要求

- 完成[第四章](../python-node/)、[第五章](../data/)，能写节点、处理数据
- 电脑有麦克风和扬声器
- sherpa-onnx 模型已下载

:::tip 模型体积说明
本章需要下载两个模型：SenseVoice（约 40MB）和 Matcha（声学模型 72MB + 声码器 51MB），共约 160MB。磁盘空间请预留足够。
:::

:::warning 尊重模型许可
SenseVoiceSmall 和 Matcha-icefall-zh-baker 均遵循各自的开源协议。Matcha 中文模型基于标贝数据训练，仅限非商业用途。
:::
