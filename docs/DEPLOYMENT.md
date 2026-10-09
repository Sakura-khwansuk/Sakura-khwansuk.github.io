# 部署与服务配置

## 1. 创建仓库
- 仓库名：`Sakura-khwansuk.github.io`
- 可见性：Public
- README：可添加；本项目已含 README
- `.gitignore` 和 License 可暂不添加
- 默认分支使用 `main`

GitHub 用户名和仓库名大小写不影响 GitHub URL，但仓库名必须与账号用户名完全匹配才能使用根站点地址。

## 2. 上传项目
解压项目，将其中所有文件上传到仓库根目录，或使用 Git：
```bash
git init
git branch -M main
git add .
git commit -m "Initial Sakura blog"
git remote add origin https://github.com/Sakura-khwansuk/Sakura-khwansuk.github.io.git
git push -u origin main
```
如果 GitHub 网页创建仓库时已经生成 README，先执行 `git pull --rebase origin main`，解决可能的 README 冲突后再推送；更简单的方式是创建空仓库后直接推送项目。

## 3. 启用 Pages
仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。推送后到 Actions 查看构建状态。成功后网址为：
`https://Sakura-khwansuk.github.io/`

## 4. Decap CMS 登录（不可跳过）
`/admin/` 是管理界面，不等于已经有可用的安全登录。GitHub Pages 是静态托管，没有内置 OAuth 代理。Decap 的 GitHub backend 需要 OAuth 认证流程。请从 Decap CMS 当前官方文档选择受支持的 OAuth provider / proxy，设置 GitHub OAuth App 的回调地址和服务端密钥。**OAuth client secret 只能放在认证服务的环境变量中，不能放进仓库、`config.yml` 或前端 JavaScript。**

如果不想部署 OAuth 代理，另一种方案是暂时通过本地 Git 提交更新；但这不满足“浏览器后台直接编辑”的目标。完成 OAuth 配置后，再按服务商文档更新 `static/admin/config.yml` 的认证相关配置。

## 5. 图片上传
CMS 配置中的图片目录为 `static/images/uploads`，发布后的路径为 `/images/uploads/...`。建议上传前压缩图片，避免仓库过大。公开仓库里的图片对任何人可见。

## 6. Giscus 评论（可选）
Giscus 通过 GitHub Discussions 提供评论。启用前：
1. 在仓库开启 Discussions。
2. 在 Giscus 官方配置页按仓库和 Discussion 分类生成配置。
3. 添加评论组件时填入仓库、分类、分类 ID、仓库 ID 等公开标识。
4. 说明：评论者需符合 GitHub/Giscus 的参与条件；评论内容不是匿名任意访客留言，也不等同于“任何人无需账户即可直接评论”。如果必须让任何访客无需登录即可留言，应选择另一种评论服务并评估其审核与隐私政策。

## 7. 访问统计（可选）
可以考虑 GoatCounter 这类隐私友好型统计服务，但应在启用前阅读其当前政策和设置，确认是否满足“不采集访客 IP、设备信息”的要求。不要将“隐私友好”理解为绝对零数据收集。若要统计单篇阅读量，需要确认页面路径是否被服务正确记录。

## 8. 页面和动效验收
- 桌面：米白底、淡蓝强调、深灰正文、四角静态手绘装饰。
- 手机：四角装饰隐藏，导航和卡片不溢出。
- hover：不允许卡片上浮或位移。
- 动效：只保留淡入淡出和平滑滚动，支持减少动态效果偏好。
- 内容：文章、书单、关于我可编辑。
- 图片：点击图片放大。
- 隐私：公开仓库无密钥，不采集不必要的访问者数据。

## 9. 路径说明
当前配置是根域名仓库（`Sakura-khwansuk.github.io`）。如果仓库改为普通项目仓库名（例如 `sakura-blog`），必须修改 `baseURL`、CMS `site_url` / `display_url`、资源路径策略和 Pages 构建配置，不能只改仓库名。
