---
description: 2.5（可选）国内镜像加速——配置 rustup 安装源、crates 包索引、pip 镜像以加速下载与编译。
---

# 2.5（可选）国内镜像加速

如果你在中国大陆网络环境下编译，配置国内镜像可显著加速依赖下载。

## Rustup 镜像

安装 rustup 时，默认从官方 CDN 下载，国内可能很慢或超时。设置以下环境变量可改用国内镜像：

```bash
# 字节跳动（推荐）
export RUSTUP_DIST_SERVER="https://rsproxy.cn"
export RUSTUP_UPDATE_ROOT="https://rsproxy.cn/rustup"

# 或清华大学
# export RUSTUP_DIST_SERVER="https://mirrors.tuna.tsinghua.edu.cn/rustup"
# export RUSTUP_UPDATE_ROOT="https://mirrors.tuna.tsinghua.edu.cn/rustup/rustup"
```

设置后执行安装命令即可走国内镜像：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://rsproxy.cn/rustup-init.sh | sh
```

## Rust crates 镜像

编辑 `~/.cargo/config`（Windows 为 `%USERPROFILE%\.cargo\config`），添加以下配置：

### 字节跳动 rsproxy（推荐）

Rust 1.68 及以上版本支持 sparse 协议，速度更快：

```toml
[source.crates-io]
replace-with = "rsproxy-sparse"

[source.rsproxy-sparse]
registry = "sparse+https://rsproxy.cn/index/"

[registries.rsproxy]
index = "https://rsproxy.cn/crates.io-index"

[net]
git-fetch-with-cli = true
```

如果 Rust 版本低于 1.68，使用非 sparse 版：

```toml
[source.crates-io]
replace-with = "rsproxy"

[source.rsproxy]
registry = "https://rsproxy.cn/crates.io-index"
```

### 清华大学

```toml
[source.crates-io]
replace-with = "tuna"

[source.tuna]
registry = "sparse+https://mirrors.tuna.tsinghua.edu.cn/crates.io-index/"
```

### 中国科学技术大学

```toml
[source.crates-io]
replace-with = "ustc"

[source.ustc]
registry = "sparse+https://mirrors.ustc.edu.cn/crates.io-index/"
```

### 上海交通大学

```toml
[source.crates-io]
replace-with = "sjtug"

[source.sjtug]
registry = "sparse+https://mirrors.sjtug.sjtu.edu.cn/crates.io-index/"
```

## pip 镜像

uv 支持通过环境变量设置 pip 镜像源：

```bash
export UV_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple
```

也可写入配置文件 `~/.config/uv/uv.toml`（macOS 下为 `~/Library/Application Support/uv/uv.toml`，Windows 下为 `%APPDATA%\uv\uv.toml`）：

```toml
[[index]]
url = "https://pypi.tuna.tsinghua.edu.cn/simple"
```

## git 克隆加速

如果 `github.com` 访问慢，可优先使用国内镜像：

```bash
git clone https://atomgit.com/dora-rs/dora.git
```

或使用 GitHub 代理：

```bash
git clone https://ghproxy.com/https://github.com/dora-rs/dora.git
```

:::warning 镜像可能有时延
镜像源同步官方仓库可能有数小时延迟。日常开发建议以官方源为准，编译受阻时临时切换镜像。
:::

## 小结

- **rustup 镜像**：设置 `RUSTUP_DIST_SERVER` 和 `RUSTUP_UPDATE_ROOT` 环境变量，加速 rustup 安装。
- **crates 镜像**：编辑 `~/.cargo/config`，推荐 rsproxy 或清华大学 sparse 源。
- **pip 镜像**：uv 通过 `UV_INDEX_URL` 或配置文件设置清华源。
- **git 镜像**：AtomGit 或 ghproxy 可加速仓库克隆。
