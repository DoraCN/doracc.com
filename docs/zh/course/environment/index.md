---
description: 第二章 · 搭建 DORA 开发环境——从零安装 Rust 工具链、Python 与 uv、获取 DORA 源码并编译，为后续章节准备好完整的开发环境。
---

# 第二章 · 搭建 DORA 开发环境

> 本章主题：准备好工坊

在开始写第一个数据流之前，需要先在本地搭建 DORA 开发环境。整个过程分为四步：

1. **Rust 工具链** — 安装 `rustup` + `cargo`
2. **Python 与 uv** — 安装 Python 运行时与包管理器
3. **编译 DORA** — 获取源码并编译
4. **验证环境** — 确认一切就绪

:::tip
本课程锁定 **DORA 1.0 RC**（源码 commit `25bac6b3`），所有人结果可复现。
:::

## 前置要求

- 一台电脑：**macOS、Linux 或 Windows**
- 基本的终端操作能力（能输命令）
- git（如未安装，各平台安装方式见对应小节）

## 本章内容

- **[2.1 Rust 工具链](./install-rust)**：三平台安装 `rustup` 与 Rust 编译环境
- **[2.2 Python 与 uv](./install-python)**：安装 Python 运行时与 uv 包管理器
- **[2.3 获取并编译 DORA](./build-dora)**：从 GitHub 克隆源码，`cargo build` 编译
- **[2.4 验证环境](./verify)**：确认 DORA CLI 和 Python 绑定都正常工作
- **[2.5（可选）国内镜像加速](./optional-mirrors)**：国内网络可选的镜像配置
