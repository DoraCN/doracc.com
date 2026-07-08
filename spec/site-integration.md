# 站点整合方案（doracc.com 官网）

> 本仓库将部署为 **DORA 中文社区官网（doracc.com）**，替换现有官网。
> 站内并存两门课程 + 社区介绍 + 示例。参考源码在 `.leon/doracc.com`（全局忽略、只读、不入库）。

## 一、站点定位

- 站点身份：**DORA 中文社区官网**；标题/Logo/favicon 采用社区版（`logo.svg`/`logo-dark.svg`/`favicon.ico`）。
- 首页 `/`：**社区门户**（可基于旧官网 hero 调整），列出两门课程入口。
- 顶栏：**并列导航项**——社区介绍、示例、DORA 基础、跟朵拉学机器人、外链（DORA 官网/AtomGit）。

## 二、两门课程并存

| 课程 | 路径 | 版本/风格 | 比喻 |
|------|------|----------|------|
| **DORA 基础**（来自社区官网） | `/guide/*`（原样保留） | dora 0.x，参考/讲解式 | 工厂/工蜂 |
| **跟朵拉学机器人**（本课程） | `/course/*`（语义化 slug：concepts/first-dataflow/… ，独立文件夹 `docs/zh/course/`） | dora 1.0 RC，零基础项目驱动 | 黑板/课堂 |

- 两门课**各自独立**，保留各自版本、风格与比喻，**不强行统一**。
- Rspress 按当前路径自动切换侧边栏，互不干扰。
- **侧边栏隔离机制（重要）**：每门课各占一个顶层目录（`docs/zh/guide/`、`docs/zh/course/`），各带自己的 `_meta.json`；**根目录 `docs/zh/` 不放 `_meta.json`**，否则其会成为全站默认侧边栏、泄漏到另一门课。根级 `example.mdx`、`doracc.mdx` 用 `sidebar: false`。

## 三、URL 保留（SEO，硬约束）

因替换 doracc.com，同域名下必须保留已收录 URL：

- 保留：`/guide/*`、`/example/`、`/doracc/`、首页 `/`、图片 `/*.png`。
- 做法：社区内容**文件名/目录/`_meta.json` 一字不改**放到 `docs/zh/guide/`、`docs/zh/example.mdx`、`docs/zh/doracc.mdx`，图片放 `docs/public/`。
- **默认语言锁定 `zh`**（默认语言在根路径，绝不可改，否则 `/guide` 变 `/zh/guide` 收录失效）。
- 上线前**逐条比对旧站真实 URL**（结尾 `.html`/斜杠/cleanUrls）确保一致。

## 四、移植取舍（因替换官网，社区站专属内容需保留）

保留：
- **ICP/公安备案页脚**（境内上线法律必需）。
- **百度统计**（`head` 中注入加载脚本 + `theme/` 自定义主题上报路由 PV）。
- 社区 Logo/favicon。

调整：
- `editLink` 指向**本仓库**地址（原指向 doracc.com 仓库）。
- 保持**本站现有主题**，不引入社区的自定义 theme 与本地包 `rstack-doc-ui`（保证视觉统一）。

## 五、署名

- DORA 基础课程内容作者：**李扬 / DORA 中文社区**（社区亦为本课程版权方之一，同源授权友好）。在基础课程入口/页脚注明来源与作者。

## 六、迁移步骤（待放行后执行）

1. 复制 `guide/`（start/tutorial/topics + index）→ `docs/zh/guide/`（原样）。
2. 复制 `example.mdx`、`doracc.mdx` → `docs/zh/`。
3. 复制教程图片与 logo/favicon → `docs/public/`。
4. 迁移百度统计组件与 head 脚本；接入 `globalUIComponents`。
5. 配置：保留 `lang: 'zh'`；站点标题/Logo 改社区；备案页脚；`editLink` 改本仓库。
6. 首页改为社区门户 + 两门课入口。
7. 顶栏 `_nav.json` 重建（并列项）。
8. `bun run build` 通过；核对 `/guide/*`、`/example/`、`/doracc/` URL 与旧站一致。

## 七、遗留/风险

- **版本分叉**：基础课程为 0.x，与本课程 1.0 RC 并存，需在基础课程页**明确标注版本**，避免混淆；日后可评估升级。
- 备案号、统计站点 ID 等以社区实际信息为准。
