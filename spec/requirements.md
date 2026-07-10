# 课程需求对齐（Requirements）

> 本文件记录《从零开始学 DORA》与作者对齐后的需求结论。
> 所有课程写作、示例工程、工具说明都必须遵循此处约定。未在此列出的新需求，需先对齐再落地。

## 1. 受众与定位

- **目标学员**：有 Linux 基础、能输命令的开发者。
- **难度曲线**：从概念与环境搭建讲起，节奏平缓，前置假设最少。
- **写作语言**：全中文正文 + 中文代码注释。
- **Python 前置**：不假设学生会 Python，需提供"Python 速查笔记"附录（精简，面向有编程基础的读者）。
- **写作起始顺序**：先写不依赖运行环境的第一章（概念篇）；环境章可并行推进。

## 2. 技术选型

- **DORA 版本**：锁定 **dora 1.0 RC**，通过**源码编译**获得（非包管理器安装）。
  - 源码仓库：`https://atomgit.com/dora-rs/dora`（AtomGit，国内可访问）。
  - 锁定 commit：`25bac6b3e5ed7435f49bd494e0ff4ef81ee0a674`（保证编译可复现）。
- **节点开发语言**：本课 **Python 为主 + Rust 最小够用**（第九章只讲"看得懂 + 照着改一个节点"，演示多语言混编与性能）。
  - **C / C++ 不在本课**：它们主要用于硬件驱动、极限性能、与现有 C/C++ 库互通，属进阶需求，故放到**未来《DORA 进阶》中级课程**。
  - 第一章保留"DORA 支持 Python/Rust/C/C++ 四语言"的认知性介绍，让学员知道能力存在即可。
- **仿真引擎**：PyBullet（易装、CPU 友好、资料多）。
- **AI 模型**：轻量 CPU 模型；**不强依赖 GPU，CPU 必须能跑通**。已定：
  - 语音识别 ASR：**SenseVoiceSmall**（ModelScope `iic/SenseVoiceSmall`，经 sherpa-onnx 跑 ONNX，纯 CPU、三平台、免 PyTorch）。
  - 语音合成 TTS：待锁定（候选：sherpa-onnx 中文 VITS / piper 中文），到第八章前实测确定。
  - 视觉检测：YOLOv8n 等轻量模型。
  - 毕业项目 VLM：待锁定 CPU 可跑方案，到第十一章前实测确定。
- **仿真机械臂**：**SO-101（Standard Open Arm 101，LeRobot 生态）**，PyBullet 加载其 URDF；亦为可选真实硬件。
- **第一个数据流示例**：现成工程 dora 小飞机 `https://atomgit.com/DoraCN/aviation`（Rust + Bevy，依赖 dora 同一锁定 commit）；学生只运行体验，见 `spec/first-dataflow-aviation.md`。
- **课程规模**：12 章 + 8 个小项目（详见 `spec/course-outline.md`）。

## 3. 环境与配套工具

- **标准命令行搭建**：使用 Rust 工具链（rustup）+ uv/Python + 源码编译 dora，全程在系统终端执行。
  - 支持三平台：macOS / Windows / Linux。
  - 国内镜像（rsproxy、清华 pip、AtomGit）在对应章节标注为可选加速方案。
- **桌面工具（朵拉魔盒）**：由作者在独立项目中开发，本课程不再使用。其规格说明保留在 `spec/dorabox-features.md`，供后续参考。

## 4. 交付与组织

- **文档系统**：**Rspress**（Rspack/Rust 驱动，内置 Tabs/搜索/i18n，主题呼应 dora）。
  - 单版本，不做多版本管理。
  - **保留多语言能力**（`docs/en` + `docs/zh` 结构），**当前只做中文**，英文后续按需补。
  - **页面粒度**：每个小节（如 1.1、1.2）一个独立页面。
- **仓库策略**：**独立仓库**（本仓库），与 DORA 中文社区仓库分离。
  - 展示层可用同一 Rspress 主题，日后挂到社区站入口/子域名/子路径。
- **站点定位**：本仓库将部署为 **DORA 中文社区官网（doracc.com）**，替换现官网；站内并存两门课程（DORA 基础 `/guide/*`、从零开始学 DORA `/course/*`）+ 社区介绍/示例。详见 `spec/site-integration.md`。
  - **URL 保留（SEO 硬约束）**：`/guide/*`、`/example/`、`/doracc/`、图片路径原样保留；**默认语言锁定 `zh`**。
  - 保留 ICP/公安备案页脚与百度统计（境内官网需要）。
- **示例工程**：放同仓 `examples/`，学生 `git clone` 整仓后每章切目录运行。
- **开源协议**：**MIT**（版权所有者：DORA 中文社区、LoopFun 开源社区）。

## 5. 命名（已定）

- **课程名**：《从零开始学 DORA》
- **开源项目全称**：**DORA-rs**（`github.com/dora-rs/dora`），本课程统一简写为 **DORA**
- **机器人示例节点名**：**小莫**
- **名字分工**：
  - "DORA" = 本课要教的**技术框架**，正文统一使用 DORA（全称 DORA-rs）。
  - "小莫" = 课程中使用的示例机器人节点名，出现在代码示例和演示中。

## 6. 待定项

未拍板的需求统一集中在 `spec/open-questions.md` 管理（含技术可行性、写作流程、交付展示、内容范围等）；某项拍板后移出该清单并写回本文件对应位置。
