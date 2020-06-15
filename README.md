# 小测评(H5)

## 一、 项目说明

> 1. 框架：`umi2.x`
> 2. 组件：`antd-mobile`
> 3. 动画库：`react-transition-group`
> 4. 不可变数据：`immer`
> 5. 适配方案：`postcss-px-to-viewport`、`postcss-retina-1px`（存在Bug!）
> 6. Hook:  后续尝试用Hook替换掉Class

## 二、目录说明

```
├── dist/                          // 默认的 build 输出目录
├── src/                           // 源码目录，可选
	├── component                  // 公共组件
	├── container                  // 页面模块
	├── models                     // Dva全局数据
	├── services                   // 接口请求
    ├── layouts/index.js           // 全局入口
    ├── utils                      // 工具方法
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板文件
        └── page.js                // page页
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .umirc.js                      // umi 配置
├── server.js                      // 部署起的静态资源服务器
└── package.json
```
