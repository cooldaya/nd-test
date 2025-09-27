

功能：
    一.直接通过swagger url生成api接口文件  
        1.配置 ./src/project-config.js    swaggerUrl
        2.运行 pnpm run gen:apis
    二.通过views下的文件层级关系，自动生成项目路由(最多支持三级路由)
        1.自动对所有 /views/**/*-page/index.vue 生成路由
        2.合并文件夹下 route.js 的路由配置
    三. （未做） 自动生成可 配置的路由-按钮  权限配置树 数据（不包含 接口配置）