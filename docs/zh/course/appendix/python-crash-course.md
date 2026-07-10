---
description: Python 极简速成——零基础学员在开始写节点前，掌握最小够用的 Python 语法。
---

# Python 极简速成

不会 Python？没关系。这一页只讲**后面写节点会用到的那一点点**，看完就够开始了。建议在开始[第四章](../python-node/)前读一遍。

:::info 小莫说
不用怕！编程就是把"想让电脑做的事"用它能懂的话写下来。我们一小步一小步来。
:::

## 怎么运行、怎么写注释

Python 代码写在 `.py` 文件里，用 `python 文件名.py` 运行。`#` 后面的是**注释**，给人看的，电脑会忽略：

```python
# 这是一行注释
print("你好，小莫！")  # print 会把内容打印到屏幕
```

## 变量与基本类型

**变量**就是给数据起个名字，用 `=` 赋值：

```python
name = "小莫"       # 字符串（文字），用引号括起来
age = 1             # 整数
speed = 3.5         # 小数（浮点数）
is_ready = True     # 布尔值：True（真）或 False（假）
nothing = None      # 空值：表示“什么都没有”
```

## 打印与 f-string

想把变量拼进文字里，用 **f-string**（引号前加 `f`，变量放 `{}` 里）：

```python
print(f"{name} 今年 {age} 岁，速度是 {speed}")
# 输出：小莫 今年 1 岁，速度是 3.5
```

## 列表与字典（最常用的两种"容器"）

**列表（list）**：一串有顺序的东西，用 `[]`：

```python
directions = ["上", "下", "左", "右"]
print(directions[0])   # 取第 1 个（从 0 开始数）→ 上
directions.append("停") # 往后加一个
```

**字典（dict）**：一组"键 → 值"的对应，用 `{}`：

```python
event = {"type": "INPUT", "id": "image"}
print(event["type"])   # 用键取值 → INPUT
```

> 在 DORA 的节点里，你会经常见到 `event["type"]`、`event["value"]` 这种写法——它就是在从字典里取值。

## 条件判断：if

根据情况做不同的事：

```python
if speed > 3:
    print("好快！")
elif speed == 0:
    print("停住了")
else:
    print("慢慢走")
```

> 注意：Python 靠**缩进**（前面的空格）来表示"这几行属于 if 里面"。同一层的缩进要一致（通常 4 个空格）。

## 循环：for 与 while

**for**：把一串东西挨个处理：

```python
for d in directions:
    print(f"方向：{d}")
```

在 DORA 里，节点会用一个特殊的 for 循环**不停地接收事件**（这就是"事件循环"）：

```python
for event in node:                 # 一个接一个地拿到事件
    if event["type"] == "INPUT":   # 如果是输入事件
        data = event["value"]      # 取出数据来处理
```

**while**：条件成立就一直循环：

```python
count = 0
while count < 3:
    print(count)
    count = count + 1   # 别忘了让它有机会结束，否则会死循环
```

## 函数：def

把一段可复用的逻辑打包起来，用 `def` 定义、用名字调用：

```python
def add(a, b):
    return a + b        # return 把结果交回去

result = add(2, 3)      # 调用，result 得到 5
print(result)
```

## import：借用别人写好的工具

很多现成功能在"库"里，用 `import` 拿来用：

```python
import numpy as np          # 起个简称 np
arr = np.array([1, 2, 3])   # 用 numpy 造一个数组

from dora import Node       # 从 DORA 库里，只拿 Node 这一个东西
node = Node()
```

## 你已经够用了！

掌握上面这些——**变量、打印、列表/字典、if、for/while、函数、import**——就足够看懂并修改本课程的 Python 节点了。遇到新语法，我们会在用到的地方随时补充。

:::tip 想系统学 Python？
本页只是"够用就好"。若你想更系统地学习，可课后再找专门的 Python 入门教程；但对本课程来说，这些已经足够。
:::
