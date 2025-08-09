# TIC Index - 团队展示网站

[![Vue 3](https://img.shields.io/badge/Vue-3.5.18-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=flat-square&logo=greensock)](https://greensock.com/gsap/)

> 一个现代化的团队展示网站，基于 Vue 3 + Vite + Tailwind CSS 构建，展示团队成员、技术栈、项目成果和联系方式。

## ✨ 功能特性

- 🎨 **现代化设计** - 采用毛玻璃质感、渐变色彩和动态粒子背景
- 📱 **响应式布局** - 完美适配桌面端、平板和移动设备
- 🎭 **丰富动画** - 基于 GSAP 的滚动触发动画和交互效果
- 💫 **粒子背景** - 自定义 Canvas 粒子系统，支持鼠标交互
- ⌨️ **打字特效** - 首页标语的动态打字机效果
- 🖼️ **图片画廊** - 集成 GLightbox 的响应式图片展示
- 🃏 **翻转卡片** - 团队成员的 3D 翻转卡片展示
- 🎯 **技术栈展示** - 动态展示团队使用的技术和工具
- 🏆 **成果时间线** - 展示团队获得的奖项和成就
- 📞 **联系方式** - 多种联系方式和二维码展示

## 🛠️ 技术栈

### 核心框架
- **Vue 3** - 现代化的渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架

### 动画和交互
- **GSAP** - 专业级 JavaScript 动画库
- **GLightbox** - 轻量级响应式灯箱组件
- **自定义粒子系统** - 基于 Canvas 的动态背景

### 开发工具
- **pnpm** - 快速、节省磁盘空间的包管理器
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - 自动添加 CSS 浏览器前缀

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- pnpm >= 7.0.0

### 安装步骤

1. **克隆项目**
```bash
git clone <repository-url>
cd tic-index-2
```

2. **安装依赖**
```bash
pnpm install
```

3. **启动开发服务器**
```bash
pnpm dev
```

4. **打开浏览器访问**
```
http://localhost:5173
```

### 构建生产版本

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 📁 项目结构

```
tic-index-2/
├── public/                 # 静态资源
│   ├── env/               # 环境和活动图片
│   ├── person/            # 团队成员头像
│   └── logo.png           # 网站 Logo
├── src/
│   ├── components/        # Vue 组件
│   │   ├── AppHeader.vue      # 网站头部
│   │   ├── HeroSection.vue    # 英雄区域（打字特效）
│   │   ├── AboutSection.vue   # 关于我们
│   │   ├── TechStackSection.vue # 技术栈展示
│   │   ├── MembersSection.vue   # 团队成员（翻转卡片）
│   │   ├── AwardsSection.vue    # 获奖时间线
│   │   ├── GallerySection.vue   # 图片画廊
│   │   ├── JoinUsSection.vue    # 加入我们
│   │   ├── ParticlesBackground.vue # 粒子背景
│   │   └── AppFooter.vue      # 网站底部
│   ├── composables/       # 组合式函数
│   │   ├── useTeamData.js     # 团队数据管理
│   │   └── useAnimations.js   # 动画效果管理
│   ├── data/
│   │   └── teamData.js        # 团队数据配置
│   ├── App.vue            # 根组件
│   ├── main.js            # 应用入口
│   └── style.css          # 全局样式
├── index.html             # HTML 模板
├── package.json           # 项目配置
├── vite.config.js         # Vite 配置
├── tailwind.config.js     # Tailwind CSS 配置
└── postcss.config.js      # PostCSS 配置
```

## 🎨 自定义配置

### 修改团队数据

编辑 `src/data/teamData.js` 文件来更新：
- 团队介绍
- 成员信息
- 技术栈
- 获奖记录
- 图片画廊
- 联系方式

### 修改打字特效文字

在 `src/components/HeroSection.vue` 中找到 `typewriterTexts` 数组：

```javascript
const typewriterTexts = [
  "创新无界 · 代码改变世界",
  "构建未来 · 技术驱动梦想"
]
```

### 自定义主题色彩

在 `tailwind.config.js` 中修改颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // 自定义主色调
      },
      secondary: {
        // 自定义辅助色
      }
    }
  }
}
```

## 📱 响应式设计

网站采用移动优先的响应式设计：

- **手机端** (< 768px): 单列布局，触摸友好的交互
- **平板端** (768px - 1024px): 双列布局，适中的元素尺寸
- **桌面端** (> 1024px): 多列布局，丰富的悬浮效果

## 🎯 性能优化

- **代码分割** - 动态导入减少初始加载时间
- **图片优化** - 合理的图片尺寸和格式
- **懒加载** - 组件和资源的按需加载
- **树摇优化** - 移除未使用的代码
- **缓存策略** - 合理的浏览器缓存配置

## 🚀 部署指南

### GitHub Pages 部署（推荐）

本项目已配置自动化 GitHub Actions workflow，可以自动部署到 GitHub Pages：

1. **启用 GitHub Pages**
   - 进入你的 GitHub 仓库设置页面
   - 找到 "Pages" 选项
   - 在 "Source" 中选择 "GitHub Actions"

2. **推送代码触发部署**
   ```bash
   git add .
   git commit -m "feat: 添加 GitHub Pages 自动部署"
   git push origin main
   ```

3. **查看部署状态**
   - 在仓库的 "Actions" 标签页查看工作流状态
   - 部署完成后，网站将可通过 `https://<username>.github.io/<repository-name>` 访问

4. **自定义域名**（可选）
   - 在仓库设置的 "Pages" 部分添加自定义域名
   - 在 `public` 目录添加 `CNAME` 文件

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 构建命令：`pnpm build`
4. 输出目录：`dist`

### Netlify 部署

1. 连接 GitHub 仓库
2. 构建命令：`pnpm build`
3. 发布目录：`dist`

### 服务器部署

```bash
# 构建项目
pnpm build

# 将 dist 目录上传到服务器
# 配置 Nginx 或 Apache 指向 dist 目录
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add some amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

### 开发规范

- 使用 Vue 3 Composition API
- 遵循 ESLint 代码规范
- 组件采用单一职责原则
- 提交信息使用语义化格式

## 🙏 致谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [GSAP](https://greensock.com/) - 专业动画库
- [GLightbox](https://github.com/biati-digital/glightbox) - 现代化灯箱组件
