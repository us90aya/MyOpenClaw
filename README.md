# 后台管理系统

基于 Vue3 + Vite + TypeScript + Naive UI 技术栈开发的完整后台管理系统，具有登录、注册、用户管理等功能。

## 🚀 主要功能

### 登录系统
- **手机+验证码登录**：支持手机号登录，可获取验证码
- **用户名+密码登录**：传统登录方式
- **注册功能**：支持新用户注册并自动登录

### 用户管理
- **列表查看**：显示用户列表，包含用户资料
- **搜索功能**：支持按用户名或手机号搜索
- **添加用户**：点击“新增”按钮添加新用户
- **编辑/删除**：支持编辑和删除用户
- **详情页面**：点击列表行查看用户详细信息
- **权限管理**：用户有管理员和普通用户两种角色

### 其他功能
- **主题切换**：支持自动或手动切换夜间/日间模式
- **响应式设计**：完美支持手机端访问
- **验证式**：表单验证和错误提示

## 🛠️ 技术栈

### 前端技术
- **Vue 3.3.4**：使用 Composition API 和新特性
- **Vite 5.0.0**：高性能开发服务器
- **TypeScript 5.0.2**：强型系统，提高代码质量
- **Naive UI 2.0.0**：现代化 UI 组件库
- **WindiCSS 3.0.0**：高性能样式工具

### 后端技术
- **Node.js 18+：运行环境
- **Git**：版本控制

## 📋 项目结构

```
├── src/
│   ├── components/          # 可重用组件
│   ├── router/             # 路由配置
│   ├── store/              # Vuex 状态管理
│   ├── views/              # 视图组件
│   │   ├── login/        # 登录页面
│   │   ├── dashboard/    # 仪表盘
│   │   └── users/        # 用户管理
│   │       ├── index.vue # 用户列表
│   │       └── detail.vue # 用户详情
│   ├── main.ts            # 应用入口
│   └── App.vue            # 根组件
├── package.json           # 项目依赖
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
├── .gitignore             # Git 忽略文件
└── README.md             # 项目说明
```

## 🚀 快速开始

### 1. 环境要求
- Node.js 18 或更高版本
- npm 7+ 或 yarn 1.22+

### 2. 安装依赖

```bash
# 复制项目
git clone https://github.com/us90aya/MyOpenClaw.git
cd MyOpenClaw

# 安装依赖
npm install
```

### 3. 启动开发服务器

```bash
# 启动开发服务器
npm run dev

# 或使用 yarn
yarn dev
```

开发服务器默认会在 `http://localhost:3000` 启动。

### 4. 构建生产版本

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 🌐 访问项目

### 本地访问
- 开发模式：`http://localhost:3000`
- 生产模式：构建后的 `dist/` 目录

### 线上访问
项目已部署到 GitHub Codespace：

**公网访问链接**：[https://expert-train-r766pvwq5v92p44j-3000.app.github.dev](https://expert-train-r766pvwq5v92p44j-3000.app.github.dev)

支持手机端访问，UI 会自动适配屏幕尺寸。

## 🔐 登录账号

### 默认登录账号

#### 用户名+密码登录
- **用户名**：`admin`
- **密码**：`任意密码字符串`

#### 手机+验证码登录
- **手机号**：`13800138000`
- **验证码**：`点击"获取验证码"按钮生成`

### 注册新用户
在登录页面点击“注册账号”，按提示完成注册后将自动登录。

## 🛠️ 开发说明

### 代码规范
- 使用 TypeScript 强型系统
- 遵循 Vue 3 Composition API 最佳实践
- 使用 Naive UI 组件组合
- 样式使用 WindiCSS

### 项目特点
- **现代化技术栈**：Vue 3 + Vite + TypeScript
- **简洁UI设计**：使用Naive UI默认主题色
- **响应式布局**：支持手机端访问
- **验证式**：完善的表单验证
- **错误处理**：用户友好的错误提示

### 测试
项目使用 Vue Test Utils 进行单元测试。

## 🔄 版本控制

项目使用 Git 进行版本控制：

```bash
# 检查状态
git status

# 提交更改
git add .
git commit -m "更改描述"

# 推送到远程仓库
git push origin main
```

## 📄 许可证

本项目采用 MIT 许可证。

## 📞 联系方式

如有问题或建议，请联系项目作者。

---

**最后更新**：2026年02月

*此项目仅用于学习和社交目的，请谨慎使用。*