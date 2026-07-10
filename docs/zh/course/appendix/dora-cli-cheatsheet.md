---
description: dora 命令速查表——dora 1.0 RC 常用 CLI 命令快速参考。
---

# dora 命令速查表

> 基于 **dora 1.0 RC**。命令在终端里执行。

## 最常用（记住这两条就能起步）

```bash
dora build dataflow.yml   # 按 dataflow.yml 里的 build 指令，准备各节点（装依赖/编译）
dora run   dataflow.yml   # 本地独立运行整个数据流（无需协调器），最常用
```

其它随手会用到的：

```bash
dora --version            # 查看 dora 版本
dora --help               # 查看所有命令
dora new <名字>           # 生成一个新项目或新节点的模板
dora validate dataflow.yml# 校验 YAML 是否写对、类型是否匹配
dora graph dataflow.yml   # 把数据流画成图，直观看节点连线
```

## 运行与查看

| 命令 | 作用 |
|------|------|
| `dora run <yaml>` | 本地独立运行数据流（无协调器），开发最常用 |
| `dora build <yaml>` | 执行各节点的 build 指令（装依赖、编译等） |
| `dora logs <数据流> <节点>` | 查看某个节点的日志 |
| `dora list` | 列出正在运行的数据流 |
| `dora stop` | 停止一个正在运行的数据流 |
| `dora top` | 实时资源监视器（CPU/内存/队列等） |

## 协调器模式（多数据流 / 分布式，进阶）

| 命令 | 作用 |
|------|------|
| `dora up` | 在本地启动协调器（Coordinator）与守护进程（Daemon） |
| `dora start <yaml>` | 在已运行的协调器上启动一个数据流 |
| `dora down` | 关闭协调器与守护进程（会先停掉运行中的数据流） |
| `dora clean` | 清理已结束/失败的数据流记录 |
| `dora cluster ...` | 管理多机集群（up / status / down） |

## 调试与诊断

| 命令 | 作用 |
|------|------|
| `dora doctor` | 运行一套系统诊断，排查环境问题 |
| `dora status` | 检查系统健康状态 |
| `dora record` | 把数据流消息录制到文件（`.drec`），供离线回放 |
| `dora replay <文件.drec>` | 回放录制的数据流，可离线调试 |
| `dora inspect` | 实时查看运行中的数据流 |

:::tip 记不住？
零基础阶段你只需牢记 **`dora build` + `dora run`** 这两条。其它命令用到哪一条，对应章节会专门讲。
:::

:::warning 版本提示
dora 处于 1.0 RC 阶段，个别命令与参数可能随版本微调，以课程使用的版本为准。
:::
