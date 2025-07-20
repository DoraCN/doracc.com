---
pageType: home

hero:
  name: Dora中文社区
  text: 为AI时代打造的现代机器人框架
  tagline: 极简 · 安全 · 高效
  actions:
    - theme: brand
      text: 探索教程 →
      link: /guide/start/introduction
    - theme: alt
      text: GitHub仓库
      link: https://github.com/dora-rs/dora
  image:
    src: 
      dark: /logo-dark.svg
      light: /logo.svg
    alt: Dora中文社区
features:
  - title: 极致性能的零拷贝通信
    details: 通过自研的共享内存服务器和标准化的 Apache Arrow 消息格式，在单机内部实现了真正的“零拷贝”数据传输。这一机制从根本上消除了传统进程间通信的主要性能瓶颈，使其在处理大数据量时延迟极低。
    icon: ⚡️
  - title: 以数据流为核心的声明式架构
    details: 整个机器人应用被抽象为一个有向图（数据流），开发者通过一个简洁的YAML文件来声明式地定义图的结构。这种方式类极大地增强了应用的模块化、可组合性和可配置性，让复杂的系统逻辑变得直观且易于管理。
    icon:  🔗
  - title: 现代化的开发者体验与快速原型设计
    details: 引入了多项源自现代Web开发的先进特性，旨在提升开发效率。热重载允许开发者在不关闭和重启整个机器人系统的情况下，在运行时修改并重新加载代码。大量的开箱即用的预封装节点直接引用，快速搭建和验证原型系统。
    icon: 💡
  - title: 强大的多语言与跨平台支持
    details: 为Python、Rust、C和C++等主流机器人开发语言提供了一流的API支持，其高性能的零拷贝通信对所有支持的语言都有效，特别是解决了AI开发者社区高度依赖的Python性能问题。原生支持 Linux、macOS、Windows。
    icon: 🌐
  - title: 内置可观测性
    details: 原生集成了OpenTelemetry标准，可以轻松地收集和导出应用的日志、追踪和度量数据 。这使得开发者能够利用各种兼容的后端工具（如Prometheus, Datadog）来监控系统状态、分析性能瓶颈和调试复杂问题。
    icon: 🔭
  - title: 社区驱动与开放性
    details: 致力于构建一个开放、活跃的开发者社区，以汇集全球智慧，共同推动机器人技术的发展。作为一个完全开源的项目，其代码库、设计文档和发展路线图都是公开的，鼓励用户和贡献者参与其中，共同塑造框架的未来。
    icon: 🧑‍🤝‍🧑
---
