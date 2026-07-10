---
description: 2.4 验证环境——确认 DORA CLI、Python 绑定均正常工作，前后端环境就绪。
---

# 2.4 验证环境

所有步骤完成后，运行以下命令确认环境就绪。

## 验证 DORA CLI

```bash
dora --version
# 应输出版本号，如 dora 1.0.0-rc1
```

如果提示 `dora: command not found`，说明未将编译产物加入 `PATH`。可以用完整路径测试：

```bash
./target/release/dora --version
```

或将 `target/release` 加入 `PATH`（见上一节）。

## 验证 Python 绑定

```bash
uv run python -c "from dora import Node; print('Python 绑定 OK')"
```

应输出：

```
Python 绑定 OK
```

如果报 `ModuleNotFoundError: No module named 'dora'`，说明 Python 绑定未正确安装，重新执行：

```bash
uv pip install -e apis/python/node
```

## 验证编译工具链

```bash
rustc --version
cargo --version
```

应各自输出版本号。

## 完整自检

你也可以一条命令完成全部检查：

```bash
echo "--- Rust ---" && rustc --version && cargo --version && echo "--- dora ---" && dora --version && echo "--- Python ---" && uv run python -c "from dora import Node; print('Python 绑定 OK')"
```

如果以上均正常输出，恭喜，开发环境已就绪！可前往[第三章](../first-dataflow/)开始第一个数据流。

## 常见问题

:::warning `dora: command not found`
DORA CLI 不在 `PATH` 中。使用完整路径 `./target/release/dora --version` 测试，或将 `target/release` 加入 `PATH`。
:::

:::warning `ModuleNotFoundError: No module named 'dora'`
Python 绑定未安装或安装到了错误的 Python 环境。确认在 `dora/` 目录下执行了 `uv pip install -e apis/python/node`。
:::

:::warning `linker not found` 编译报错
macOS: 运行 `xcode-select --install`；Linux: 安装 `build-essential`（Ubuntu）或 `Development Tools`（Fedora）；Windows: 安装 Visual Studio Build Tools。
:::
