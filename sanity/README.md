# Sanity Studio Setup

在项目根目录执行：

```bash
npx sanity@latest init --create-project "Hans Cao Photograph"
```

创建完成后，把 `sanity/schemaTypes/` 目录中的 schema 文件复制到 Studio 的 `schemaTypes` 目录中，并在 `schema.ts` 中导入：

```ts
import { schemaTypes } from './schemaTypes';
```

然后启动 Studio：

```bash
npx sanity dev
```
