nd-test/
├── public/                          # 静态资源目录
│   ├── favicon.ico                  # 网站图标
│   ├── logo.png                     # 系统 Logo
│   └── vite.svg                     # Vite 图标
│
├── src/                             # 源代码目录
│   ├── main.js                      # 应用入口文件
│   ├── App.vue                      # 根组件
│   ├── style.css                    # 全局样式
│   │
│   ├── api/                         # API 封装层
│   │   ├── index.js                 # API 统一导出
│   │   ├── config.js                # API 配置和拦截器
│   │   ├── base.js                  # API 基础封装类
│   │   ├── types.js                 # API 类型定义
│   │   └── modules/                 # API 模块
│   │       ├── auth.js              # 认证相关 API
│   │       ├── user.js              # 用户管理 API
│   │       ├── system.js            # 系统管理 API
│   │       └── common.js            # 通用 API
│   │
│   ├── assets/                      # 静态资源
│   │   ├── images/                  # 图片资源
│   │   │   ├── logo.png
│   │   │   ├── avatar-default.png
│   │   │   └── login-bg.jpg
│   │   ├── icons/                   # 图标资源
│   │   └── styles/                  # 样式文件
│   │       ├── variables.css        # CSS 变量
│   │       ├── mixins.css           # CSS 混入
│   │       └── common.css           # 通用样式
│   │
│   ├── components/                  # 公共组件
│   │   ├── common/                  # 通用组件
│   │   │   ├── PageHeader.vue       # 页面头部
│   │   │   ├── PageFooter.vue       # 页面底部
│   │   │   ├── Loading.vue          # 加载组件
│   │   │   ├── Empty.vue            # 空状态组件
│   │   │   ├── ConfirmDialog.vue    # 确认对话框
│   │   │   └── FileUpload.vue       # 文件上传组件
│   │   │
│   │   ├── business/                # 业务组件
│   │   │   ├── UserSelector.vue     # 用户选择器
│   │   │   ├── RoleSelector.vue     # 角色选择器
│   │   │   ├── DataTable.vue        # 数据表格
│   │   │   └── SearchForm.vue       # 搜索表单
│   │   │
│   │   └── layout/                  # 布局组件
│   │       ├── MainLayout.vue       # 主布局
│   │       ├── AuthLayout.vue       # 认证布局
│   │       ├── Sidebar.vue          # 侧边栏
│   │       ├── Header.vue           # 顶部导航
│   │       └── Breadcrumb.vue       # 面包屑导航
│   │
│   ├── views/                       # 页面组件
│   │   ├── auth/                    # 认证相关页面
│   │   │   ├── Login.vue            # 登录页
│   │   │   ├── Register.vue         # 注册页
│   │   │   └── ForgotPassword.vue   # 忘记密码页
│   │   │
│   │   ├── business/                # 业务页面
│   │   │   ├── Dashboard.vue        # 仪表板
│   │   │   ├── UserList.vue         # 用户列表
│   │   │   ├── UserDetail.vue       # 用户详情
│   │   │   ├── DataAnalysis.vue     # 数据分析
│   │   │   └── Reports.vue          # 报表页面
│   │   │
│   │   ├── system/                  # 系统管理页面
│   │   │   ├── Settings.vue         # 系统设置
│   │   │   ├── UserManage.vue       # 用户管理
│   │   │   ├── RoleManage.vue       # 角色管理
│   │   │   ├── ResourceManage.vue   # 资源管理
│   │   │   ├── OrganizationManage.vue # 组织管理
│   │   │   └── DictionaryManage.vue # 数据字典管理
│   │   │
│   │   ├── profile/                 # 个人中心页面
│   │   │   ├── Profile.vue          # 个人信息
│   │   │   ├── ChangePassword.vue   # 修改密码
│   │   │   └── Settings.vue         # 个人设置
│   │   │
│   │   └── common/                  # 通用页面
│   │       ├── NotFound.vue         # 404 页面
│   │       ├── Unauthorized.vue     # 403 页面
│   │       └── Error.vue            # 错误页面
│   │
│   ├── router/                      # 路由配置
│   │   ├── index.js                 # 路由主配置
│   │   ├── guards.js                # 路由守卫
│   │   └── modules/                 # 路由模块
│   │       ├── auth.js              # 认证路由
│   │       ├── business.js          # 业务路由
│   │       └── system.js            # 系统路由
│   │
│   ├── stores/                      # 状态管理 (Pinia)
│   │   ├── index.js                 # Store 入口
│   │   ├── auth.js                  # 认证状态
│   │   ├── app.js                   # 应用全局状态
│   │   ├── user.js                  # 用户状态
│   │   └── system.js                # 系统状态
│   │
│   ├── utils/                       # 工具函数
│   │   ├── request.js               # 请求工具
│   │   ├── auth.js                  # 认证工具
│   │   ├── storage.js               # 存储工具
│   │   ├── validate.js              # 验证工具
│   │   ├── format.js                # 格式化工具
│   │   ├── date.js                  # 日期工具
│   │   └── permission.js            # 权限工具
│   │
│   ├── hooks/                       # 组合式函数
│   │   ├── useAuth.js               # 认证相关 Hook
│   │   ├── usePermission.js         # 权限相关 Hook
│   │   ├── useTable.js              # 表格相关 Hook
│   │   └── useForm.js               # 表单相关 Hook
│   │
│   ├── constants/                   # 常量定义
│   │   ├── index.js                 # 常量入口
│   │   ├── api.js                   # API 常量
│   │   ├── routes.js                # 路由常量
│   │   ├── permissions.js           # 权限常量
│   │   └── status.js                # 状态常量
│   │
│   ├── directives/                  # 自定义指令
│   │   ├── index.js                 # 指令入口
│   │   ├── permission.js            # 权限指令
│   │   └── loading.js               # 加载指令
│   │
│   ├── plugins/                     # 插件
│   │   ├── index.js                 # 插件入口
│   │   ├── element-plus.js          # Element Plus 配置
│   │   └── axios.js                 # Axios 配置
│   │
│   └── swagger-apis/                # 自动生成的 API (保持不变)
│       ├── core/                    # API 核心文件
│       ├── models/                  # 数据模型
│       ├── services/                # 服务接口
│       └── index.ts                 # API 入口
│
├── tests/                           # 测试文件
│   ├── unit/                        # 单元测试
│   ├── e2e/                         # 端到端测试
│   └── fixtures/                    # 测试数据
│
├── docs/                            # 文档
│   ├── api.md                       # API 文档
│   ├── deployment.md                # 部署文档
│   └── development.md               # 开发文档
│
├── .env                             # 环境变量
├── .env.development                 # 开发环境变量
├── .env.production                  # 生产环境变量
├── .gitignore                       # Git 忽略文件
├── .eslintrc.js                     # ESLint 配置
├── .prettierrc                      # Prettier 配置
├── gen-api.js                       # API 生成脚本
├── index.html                       # HTML 模板
├── package.json                     # 项目配置
├── pnpm-lock.yaml                   # 依赖锁定文件
├── README.md                        # 项目说明
└── vite.config.js                   # Vite 配置