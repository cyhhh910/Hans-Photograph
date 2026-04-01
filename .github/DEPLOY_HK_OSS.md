# 香港 OSS 静态镜像（大陆相对更好访问的备用入口）

本仓库在 push 到 `main` 时，若打开开关，会额外把 Astro 构建结果 `dist/` 同步到 **阿里云 OSS 香港地域**，与 Vercel 并行，便于大陆用户访问（不替代 ICP 备案，仅改善可用性）。

## 1. 阿里云侧准备

1. 开通 **对象存储 OSS**，地域选择 **香港（中国）** `oss-cn-hongkong`。
2. 创建 **Bucket**，读写权限按「静态网站托管」需求配置：
   - 在 Bucket → **基础设置** → **静态页面**：设置默认首页 `index.html`（及可选 404 页）。
   - 在 **访问控制** / **跨域** / **Bucket 策略** 中允许 **公共读**（或按官方「静态网站」文档配置），否则浏览器无法直接打开 HTML/图片。
3. 创建 **AccessKey**（RAM 用户建议仅授予该 Bucket 的读写权限），记下 `AccessKey ID` / `AccessKey Secret`。
4. （推荐）绑定 **自定义域名** + HTTPS（在 OSS 控制台或 CDN 中完成），大陆用户访问你的备用域名即可。

## 2. GitHub 仓库配置

### 变量（Settings → Secrets and variables → Actions → **Variables**）

| Name | 说明 |
|------|------|
| `OSS_MIRROR_ENABLED` | 填 `true` 才会执行同步；未设置或为其他值则 **跳过**，不影响仅 Vercel 的流程。 |
| `ALIBABA_OSS_ENDPOINT` | 可选，默认 `oss-cn-hongkong.aliyuncs.com`。若 Bucket 在别的地域可改掉。 |
| `ALIBABA_OSS_PREFIX` | 可选，对象键前缀（不要以 `/` 开头亦可），例如 `site` → 文件落在 `oss://bucket/site/...`。 |

### 密钥（Settings → Secrets and variables → Actions → **Secrets**）

| Name | 说明 |
|------|------|
| `ALIBABA_OSS_BUCKET` | Bucket 名称（不含 `oss://`）。 |
| `ALIBABA_OSS_ACCESS_KEY_ID` | 阿里云 AccessKey ID。 |
| `ALIBABA_OSS_ACCESS_KEY_SECRET` | 阿里云 AccessKey Secret。 |
| `PUBLIC_SANITY_PROJECT_ID` | 与 Vercel 一致，供 CI 拉取 Sanity 数据。 |
| `PUBLIC_SANITY_DATASET` | 同上。 |
| `PUBLIC_SANITY_API_VERSION` | 同上（例如 `2025-03-01`）。 |

## 3. 行为说明

- 工作流：`.github/workflows/deploy-hk-oss-mirror.yml`。
- 使用 `ossutil sync`，带 `--delete`：删除 OSS 上已在本地 `dist/` 中不存在的文件，避免残留旧路由。
- 首次接入可在 GitHub → **Actions** 里手动运行 **Deploy HK OSS mirror**（workflow_dispatch）做验证。

## 4. 与安全相关

- **不要** 把 AccessKey 或 Deploy Hook 写进仓库。
- RAM 用户权限最小化；若只用于上传静态站，勿给全账号权限。
