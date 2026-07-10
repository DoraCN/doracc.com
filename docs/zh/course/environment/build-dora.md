---
description: 2.3 获取并编译 DORA——从 GitHub 克隆 DORA 源码，使用 cargo build 编译，并安装 Python 绑定。
---

# 2.3 获取并编译 DORA

Rust 工具链和 Python 环境就绪后，下一步是获取 DORA 源码并编译。

本课程锁定 **DORA 1.0 RC**（commit `25bac6b3`），确保所有人结果可复现。

## 克隆源码

```bash
# 克隆 DORA 仓库
git clone https://github.com/dora-rs/dora.git
cd dora

# 检出课程锁定的版本
git checkout 25bac6b3e5ed7435f49bd494e0ff4ef81ee0a674
```

:::tip
国内网络可用 [AtomGit 镜像](https://atomgit.com/dora-rs/dora) 加速：

```bash
git clone https://atomgit.com/dora-rs/dora.git
cd dora
git checkout 25bac6b3e5ed7435f49bd494e0ff4ef81ee0a674
```
:::

## 编译 DORA CLI

在 `dora/` 目录下，执行：

```bash
cargo build --release
```

这会编译 DORA 的 CLI 工具、守护进程及核心库。首次编译需要下载并构建大量依赖，**可能需要 10-30 分钟**，取决于网络和机器性能。后续再次编译会快很多。

:::tip 编译时间长的原因
Rust 编译时会在 `~/.cargo` 下缓存依赖，`target/` 下缓存中间产物。首次编译后，后续修改只需要重编变动的部分，会快得多。网络慢可参考 [2.5 节](./optional-mirrors) 配置国内 crates 镜像。
:::

编译完成后，DORA CLI 位于 `target/release/dora`。可以验证：

```bash
./target/release/dora --version
```

## 安装 Python 绑定

编译完成后，需要将 Python 绑定安装到 Python 环境中：

```bash
# 在 dora/ 项目根目录下
uv pip install -e apis/python/node
```

这会让 Python 能 `import dora` 并使用其中的 `Node` 类。`-e` 表示以可编辑模式安装（源码更改后不用重装）。

:::tip
如果你希望在任意目录下都能直接运行 `dora` 命令，可以将编译产物加入 `PATH`。在 `~/.bashrc` 或 `~/.zshrc` 中添加：

```bash
export PATH="$PATH:/path/to/dora/target/release"
```

（Windows 用户通过系统环境变量设置，将 `dora\target\release` 加入 `PATH`。）
:::

## 编译小飞机工程（可选）

第三章会用到 dora 小飞机示例。你可以提前编译：

```bash
# 回到 dora/ 目录
cargo build --release --features dora --bin aviation-dora --bin aviation-controller
```

也可在第三章需要时再编译。

## 小结

- `git clone` 获取 DORA 源码，锁定 commit `25bac6b3`。
- `cargo build --release` 编译 DORA CLI。
- `uv pip install -e apis/python/node` 安装 Python 绑定。
- 将 `target/release` 加入 `PATH` 方便全局调用。
- 小飞机工程可提前编译或留到第三章。
