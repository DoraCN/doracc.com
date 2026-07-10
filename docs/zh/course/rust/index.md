---
description: 第九章 · Rust 节点加速——学会何时用 Rust、如何写 Rust 节点，以及让 Python 与 Rust 在同一数据流里混合协作。
---

# 第九章 · Rust 节点加速

> 本章主题：💪 Rust 加速

前八章的节点都是 Python 写的。这一章，我们请来"心算高手"Rust，给需要极致性能的关键节点加速。本课对 Rust **只求"最小够用"**——看得懂、能照着改、能体验混编，不系统学语法。

## 本章你会学到

- **[9.1 何时用 Rust](./why-rust)**：判断什么节点值得用 Rust，什么用 Python 就好。
- **[9.2 写一个 Rust 节点](./write-rust-node)**：照着模板写 Rust 节点，和 Python 三段式一一对照。
- **[9.3 Python 与 Rust 混合](./mix-python-rust)**：让两种语言在同一数据流里无缝协作。
- **[🎯 小项目⑥：高频处理节点](./project-highfreq)**：Rust 高频计算 + Python 可视化。

## 学完能做什么

- 判断哪些节点值得用 Rust 加速（高频 + 密集计算 + 是瓶颈）；
- 看懂并照着改一个 Rust DORA 节点；
- 写出 Python 与 Rust 混编的数据流。

## 前置要求

- 完成第四到六章，熟练用 Python 写节点、连数据流；
- **不需要任何 Rust 基础**——本章从零带你认识。

:::info 小莫说
既聪明又强壮，才是完整的我！这一章不用怕 Rust——我们只学"够用"的部分，你会发现它和 Python 像双胞胎～
:::
