# DORA 中文社区官网（doracc.com）

本仓库是 **DORA 中文社区官网** 的源码。站内并存两门中文课程、社区介绍与示例，面向中文开发者提供 DORA 的学习、交流与共建。

## 关于 DORA 中文社区

**DORA 中文社区** 是面向中文开发者的 DORA 学习、交流与共建家园。DORA（Dataflow-Oriented Robotic Architecture）是一个为 AI 时代打造的高性能机器人开发框架，比 ROS2 更快、更简单、更懂 AI。我们希望把最好的中文教程、最热情的交流氛围和最开放的共建机制带给每一个想做机器人的人。

> 我们的目标：让"用 DORA 做机器人"这件事，对中文世界的每个人都**触手可及**。

**我们提供：**

- **系统的中文课程**：面向零基础的《跟朵拉学机器人：从零到具身智能》，以及参考式的《DORA 基础教程》。
- **权威资料导航**：DORA 官网中文文档、源码仓库、示例工程。
- **活跃的交流渠道**：官方微信群、公众号，以及 GitHub 的 Issues / Discussions。
- **开放的共建机制**：欢迎贡献教程、示例、勘误与建议，人人既是使用者也是共建者。

**社区特点：** 技术驱动、生态共建、新兴且活跃。随着具身智能（Embodied AI）浪潮，社区正快速成长。欢迎你加入，一起把机器人小多养大！🤖

### 关于发起人

DORA 中文社区由 **李扬** 发起（2025，北京），他同时也是 **LoopFun 开源社区** 的发起人。**LoopFun** 是一个面向全社会的具身智能开源社区，致力于降低具身智能机器人的开发门槛，让人人都能上手，并在动手创造中收获快乐。本站与课程由 **DORA 中文社区** 与 **LoopFun 开源社区** 携手共建。

## 站点内容

| 板块 | 路径 | 说明 |
|------|------|------|
| 社区门户首页 | `/` | 品牌与两门课程入口 |
| 跟朵拉学机器人 | `/course/*` | 零基础项目驱动课程（基于 DORA 1.0 RC） |
| DORA 基础教程 | `/guide/*` | 系统、参考式的概念与命令讲解 |
| 示例 | `/example/` | DORA + YOLOv8 等示例 |
| 中文社区介绍 | `/doracc/` | 社区介绍与加入渠道 |

## 两门课程

- **跟朵拉学机器人：从零到具身智能**（`/course/`）：零基础友好，跟着机器人 **小多** 循序渐进完成 8 个小项目，直到用 VLM 完成"看见并抓取"的毕业项目。配套桌面工具 **朵拉魔盒（DoraBox）** 一键准备隔离环境；基于 **DORA 1.0 RC 源码编译**；软件为主、不强依赖 GPU。
- **DORA 基础教程**（`/guide/`）：面向想系统通读 DORA 概念与命令的读者。

## 目录结构

```
├── docs/
│   ├── zh/                 # 中文内容（默认语言）
│   │   ├── index.md        # 社区门户首页
│   │   ├── course/         # 《跟朵拉学机器人》课程
│   │   ├── guide/          # DORA 基础教程
│   │   ├── example.mdx      # 示例
│   │   ├── doracc.mdx       # 社区介绍
│   │   └── _nav.json        # 顶部导航
│   ├── en/                 # 英文（当前以中文为主）
│   └── public/             # 静态资源（logo、图片、favicon 等）
├── theme/                  # 自定义主题（含百度统计路由上报）
├── styles/                 # 全局样式
├── examples/              # 课程各章的可运行示例工程
├── spec/                  # 课程与站点规范（改动内容前必读）
├── rspress.config.ts      # Rspress 配置
├── AGENTS.md              # 面向 AI 协作者的约定
└── LICENSE                # MIT
```

## 规范文档（改动前必读）

- `spec/requirements.md` —— 需求结论（受众、技术选型、交付、命名等）
- `spec/course-outline.md` —— 课程大纲（12 章 + 8 小项目）
- `spec/writing-conventions.md` —— 写作约定（章节模板、故事线、Callout、术语、图示等）
- `spec/glossary.md` —— 术语表（中文括注英文）
- `spec/metaphor-system.md` —— 核心比喻体系（黑板与课堂）
- `spec/dorabox-features.md` / `spec/dorabox-roadmap.md` —— 朵拉魔盒功能与路线图
- `spec/site-integration.md` —— 站点结构说明
- `spec/open-questions.md` —— 待确认需求清单

## 本地开发

本站基于 [Rspress](https://rspress.dev) 构建，推荐使用 [Bun](https://bun.sh)（也可用 npm）。

```bash
bun install      # 安装依赖（或 npm install）
bun run dev      # 本地开发（或 npm run dev）
bun run build    # 生产构建（或 npm run build）
bun run preview  # 预览生产构建（或 npm run preview）
```

## 技术要点

- **文档系统**：Rspress（Rspack 驱动），中文为主，支持多语言。
- **图示**：Mermaid（经 `rspress-plugin-mermaid`）。

## 开源协议

本项目基于 [MIT](./LICENSE) 协议开源。版权所有者：**DORA 中文社区、LoopFun 开源社区**。
