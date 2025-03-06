
# 智慧商城（Smart Shopping）

一个基于 Vue.js 的移动端电商实战项目，旨在学习和实践前端开发技能。

## 项目简介
“智慧商城”是一个移动端电商系统，模拟了真实的在线购物场景。通过该项目，你可以学习 Vue 全家桶（Vue.js、Vue Router、Vuex）以及 Vant UI 组件库的使用，掌握前后端交互、状态管理、移动端适配等技能。该项目由黑马程序员设计，作为教学案例，帮助开发者从零搭建一个完整的电商应用。

- **接口文档**: [Apifox 接口文档](https://apifox.com/apidoc/shared-dead2bca-2509-43dc-a4de-ede5218058a1)
- **演示地址**: [http://cba.itlike.com/public/mweb/#/](http://cba.itlike.com/public/mweb/#/)

## 功能模块
- **登录注册**
  - 手机号登录（图形验证码 + 短信验证码）。
  - 未注册手机号自动注册。
- **首页**
  - 轮播图展示。
  - 分类导航。
  - “猜你喜欢”商品推荐。
- **搜索**
  - 关键词搜索，支持历史记录持久化。
  - 搜索结果列表。
- **商品详情**
  - 商品图片、价格、评价展示。
  - 加入购物车或立即购买。
- **购物车**
  - 商品列表管理（全选、数量修改、删除）。
  - 订单结算。
- **订单结算**
  - 地址选择、支付方式（余额支付）。
  - 支持购物车结算和立即购买。
- **我的订单**
  - 按状态查看订单（全部、待支付、待发货等）。
  - 操作订单（支付、取消、确认收货）。
- **个人中心**
  - 用户信息展示。
  - 退出登录功能。

## 技术栈
- **前端框架**: Vue.js 2.x
- **路由管理**: Vue Router
- **状态管理**: Vuex
- **UI 组件库**: Vant UI (v2)
- **HTTP 请求**: Axios
- **CSS 预处理器**: Less
- **移动端适配**: PostCSS (px-to-viewport, 375px 设计稿)
- **构建工具**: Vue CLI
- **包管理**: Yarn

## 安装与运行
### 前提条件
- Node.js (>= 12.x)
- Yarn (推荐) 或 npm
- Vue CLI (全局安装: `npm i @vue/cli -g`)

### 安装步骤
1. 克隆仓库：
   ```bash
   git clone https://github.com/your-username/smart-shopping.git
   cd smart-shopping
   ```
2. 安装依赖：
   ```bash
   yarn install
   ```
   或
   ```bash
   npm install
   ```
3. 运行项目：
   ```bash
   yarn serve
   ```
   或
   ```bash
   npm run serve
   ```
   访问: [http://localhost:8080](http://localhost:8080)
4. 打包项目：
   ```bash
   yarn build
   ```
   生成的 `dist` 文件夹可部署到服务器。

## 项目目录结构
```text
smart-shopping/
├── dist/                  # 打包输出目录
├── public/                # 静态资源
│   ├── index.html         # 入口 HTML
│   └── favicon.ico
├── src/                   # 源代码
│   ├── api/               # 接口请求模块
│   │   ├── login.js       # 登录相关接口
│   │   ├── home.js        # 首页接口
│   │   └── ...
│   ├── assets/            # 静态资源（图片等）
│   ├── components/        # 公共组件
│   │   ├── GoodsItem.vue  # 商品项组件
│   │   └── CountBox.vue   # 数量选择组件
│   ├── styles/            # 全局样式
│   │   └── common.less    # 重置样式
│   ├── utils/             # 工具模块
│   │   ├── request.js     # Axios 封装
│   │   ├── storage.js     # 本地存储工具
│   │   └── vant-ui.js     # Vant 按需导入配置
│   ├── views/             # 页面组件
│   │   ├── login/         # 登录页
│   │   ├── layout/        # 主布局（含 Tabbar）
│   │   └── ...
│   ├── store/             # Vuex 状态管理
│   │   ├── modules/
│   │   │   ├── user.js    # 用户模块
│   │   │   └── cart.js    # 购物车模块
│   │   └── index.js       # Vuex 入口
│   ├── router/            # 路由配置
│   │   └── index.js
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── babel.config.js        # Babel 配置
├── postcss.config.js      # PostCSS 配置（vw 适配）
├── vue.config.js          # Vue CLI 配置
└── package.json           # 项目依赖和脚本
```

## 使用说明
- **登录**：
  - 访问 `/login`，输入手机号和验证码登录。
  - 登录信息存储在 Vuex 和本地（localStorage）。
- **首页导航**：
  - 点击 Tabbar 切换首页、分类、购物车、个人中心。
- **购物车管理**：
  - 添加商品后，访问 `/cart` 查看和管理。
- **订单流程**：
  - 从购物车或商品详情页跳转到 `/pay` 结算。
  - 提交订单后跳转至 `/myorder` 查看。

## 开发注意事项
- **接口请求**：所有请求基于 `utils/request.js` 封装的 Axios，基础地址为 `http://cba.itlike.com/public/index.php?s=/api/`。
- **组件按需导入**：在 `utils/vant-ui.js` 中配置 Vant 组件，避免打包体积过大。
- **路由守卫**：`/pay` 和 `/myorder` 需要登录，使用全局前置守卫拦截。
- **持久化**：用户信息和购物车数据通过 `utils/storage.js` 持久化到 localStorage。

## 项目优化
- **路由懒加载**：路由组件使用 `() => import()` 实现按需加载。
- **打包配置**：设置 `publicPath: './'` 支持相对路径部署。
- **响应拦截**：统一处理接口错误提示和 Loading 效果。