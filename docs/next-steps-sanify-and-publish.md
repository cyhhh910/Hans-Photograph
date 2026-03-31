# 下一步：从内容录入到对外发布

## 1. 启动网站（前台）

```bash
cd "/Users/cao-yinhan/Desktop/Hans Photograph/sleepy-solstice"
npm run dev
```

打开 `http://localhost:4321`

## 2. 初始化并登录 Sanity（第一次）

```bash
cd "/Users/cao-yinhan/Desktop/Hans Photograph/sleepy-solstice"
npm run sanity:login
```

然后填写 `.env`（复制自 `.env.example`）：

```env
PUBLIC_SANITY_PROJECT_ID=你的projectId
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2025-03-01
```

## 3. 启动 Sanity Studio（后台）

```bash
npm run sanity:dev
```

打开 `http://localhost:3333`

建议录入顺序：

1. 新建 `tag`（例如：`hong-kong`、`beijing`、`street`）
2. 新建 `photo` 并关联对应 tag
3. 把 `isFeatured` 打开可出现在首页拼贴区

## 4. 本地联调

- 前台：`http://localhost:4321/works`
- 后台：`http://localhost:3333`

每次在后台发布后，刷新前台页面检查：

- 作品是否出现
- 标签筛选是否生效
- 详情页元数据是否完整

## 5. 对外发布到 Vercel

1. 推送代码到 GitHub
2. 在 Vercel 导入仓库
3. 配置环境变量（和 `.env` 同名）
4. Deploy

之后：

- 改代码 -> push -> Vercel 自动重新部署
- 改内容（Sanity）-> 前台拉取新数据（通常刷新即可看到）
