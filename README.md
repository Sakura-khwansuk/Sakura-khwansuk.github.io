# Sakura Blog

个人博客起始项目：Hugo Extended + Hugo Stack + Decap CMS + GitHub Pages。

## 当前包含
- 首页、文章、足迹归档、书单、关于我、文章详情页的内容结构
- Hugo Stack 主题模块配置
- 米白 / 淡蓝 / 深灰基础视觉，深浅色模式 CSS 变量
- 限制动效：仅淡入淡出与平滑滚动；移动端隐藏四角装饰
- Decap CMS 管理后台入口 `/admin/`
- GitHub Actions 自动构建并发布到 GitHub Pages
- Giscus 评论占位配置、GoatCounter 统计占位配置
- 示例文章与书单条目

## 重要：首次部署前需要完成
1. 在 GitHub 创建公开仓库 `Sakura-khwansuk.github.io`。
2. 将本项目文件推送到该仓库。
3. 在仓库 Settings → Pages → Build and deployment 中选择 **GitHub Actions**。
4. 在仓库 Settings → Actions → General 中确认允许 Actions 运行。
5. 按需配置 Decap CMS OAuth 服务。**GitHub Pages 本身不提供 OAuth 登录服务**，`static/admin/config.yml` 中的 GitHub backend 不能仅靠填仓库名就完成安全登录。请先按 `docs/DEPLOYMENT.md` 配置 OAuth，再启用后台。
6. 按需配置 Giscus 和 GoatCounter，未配置时网站仍可构建。

## 本地预览
先安装 Hugo Extended（建议使用当前稳定版）和 Git。然后在项目目录运行：

```bash
hugo server -D
```

浏览器打开终端显示的本地地址。

## 内容更新
- 文章：`content/posts/`
- 书单：`content/books/`
- 关于我：`content/about/`
- CMS：`static/admin/`

## 隐私提醒
仓库是公开的，仓库中的 Markdown、图片和历史提交都可能被访问。不要提交密码、OAuth secret、访问令牌、私人照片或其他敏感信息。统计服务与评论服务可能有自己的日志和数据处理政策，启用前应阅读其最新说明。
