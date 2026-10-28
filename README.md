# 赵博洋 · Personal Site

赵博洋的个人作品集与写作站，用来展示 AI 产品 / Agent 系统、项目档案、工作随笔，以及持续补充的生活记录。

在线地址（发布后）：<https://zby-123-coder.github.io/>

## 内容维护

| 想改什么 | 位置 |
| --- | --- |
| 站点标题、域名、导航、社交入口 | `src/config.ts` |
| 首页身份与一句话 | `src/components/blog/BlogProfile.astro` |
| 项目档案、亮点、证据边界与 GitHub 索引 | `src/content/projects/data.json` |
| 随笔 / 长文章 | `src/content/blogs/` |
| 照片、游戏、书与工具记录 | `src/content/interests/` |
| 关于页 | `src/content/about/about.md` |
| GitHub 个人主页 README | `docs/github-profile-README.md` |

## 本地预览

需要 Node.js 24 与 pnpm 12.9.1。

```bash
pnpm install
pnpm dev
```

发布前至少运行：

```bash
pnpm check
pnpm build
```

## GitHub Pages 发布

本仓库包含 [GitHub Pages 工作流](.github/workflows/deploy-pages.yml)。在 `zby-123-coder` 账号下新建**公开**仓库 `zby-123-coder.github.io`，将本目录推送至其 `main` 分支，并在 **Settings → Pages** 选择 **GitHub Actions**。工作流会构建 `dist/` 并发布，无需手动上传构建目录。

日常更新就是：修改内容 → 本地校验 → commit → push。推送到 `main` 后站点自动更新。

## 公开边界

- 不提交 `.env`、令牌、客户资料、内部链接、未获授权的业务源码或个人隐私信息。
- 项目叙述必须区分本地实现、履历材料、原型研究与真实线上结果；没有验证的效果不包装成已上线事实。
- 首次发布不接入分析统计、远程可执行小部件、评论或外部业务 API。需要它们时，先确认数据归属、隐私告知与部署边界。
- 仓库源于 [YuBlog](https://github.com/wutongyuonce/YuBlog)，按 [MIT License](LICENSE) 使用；保留其版权与许可证声明。
