# Hans Cao Photograph

极简摄影作品网站，技术栈：`Astro` + `TailwindCSS` + `Sanity` + `Vercel`。

## 当前已完成

- 首页：大留白 + 品牌入口 + 拼贴式预览
- 作品页：瀑布流展示 + Tag / 城市筛选
- 详情页：沉浸式大图 + 右侧元数据栏
- 数据层：已接入 Sanity Client，同时提供本地 mock 数据兜底

## 目录结构

```text
.
├── public/images/              # 示例图片
├── sanity/schemaTypes/         # Sanity 内容模型
├── src/components/             # 复用组件（导航、卡片、筛选器）
├── src/layouts/                # 基础布局（SEO + 全局样式）
├── src/lib/sanity.ts           # Sanity 查询与数据映射
├── src/data/mockPhotos.ts      # 本地兜底数据
└── src/pages/                  # 页面路由
```

## 本地运行

```bash
npm install
npm run dev
```

## 连接 Sanity（内容管理）

1. 在 [Sanity](https://www.sanity.io/) 创建项目，拿到 `projectId` 和 `dataset`。
2. 复制环境变量：

```bash
cp .env.example .env
```

3. 填写 `.env`：

```env
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2025-03-01
```

未配置环境变量时，网站会自动使用 `src/data/mockPhotos.ts` 的演示数据，不会报错。

## Sanity Schema

已包含以下内容模型：

- `photo`（单张作品）
- `tag`（分类标签）
- `siteSettings`（站点基础信息）

路径：`sanity/schemaTypes/`

## 部署到 Vercel

1. 将仓库推送到 GitHub。
2. 在 [Vercel](https://vercel.com/) 导入项目。
3. 在 Vercel 项目设置里添加与 `.env` 同名环境变量。
4. 点击 Deploy。

## 后续建议

- 把目前的示例图片替换为你真实作品
- 批量整理标签命名规范（如城市统一英文 slug）
- 增加键盘切换与上一张/下一张导航
