# wx-react-app  
[![node](https://img.shields.io/badge/node-%3E%3D7.9.0-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-%3E%3D4.2.0-green.svg)]()
[![antd](https://img.shields.io/badge/antd-%5E3.2.2-green.svg)]()
[![ant-design-pro](https://img.shields.io/badge/ant--design--pro-%5E1.1.0-green.svg)]()  

使用 [Create-React-App](https://github.com/facebook/create-react-app) + [Ant-Design-Pro](https://github.com/ant-design/ant-design-pro) 框架整合，集合了react-redux、react-router-redux、redux-saga、axios 等。  

## ~~重要说明~~

~~为什么不使用 Ant Design 官方的构建工具进行构建？~~

~~由于官方构建工具，在 Debug 的时候，无法在源码上进行调试，通过浏览器 Sources 看到的源码是编译后的代码，给调试造成了很大的障碍,所以采用上述方法进行了一下整合。~~

上述问题，据说在 Ant Design 官方构建工具 roadhog@2.2.0 已经解决掉了，感兴趣的童鞋可以去下载试一下。

## 效果gif

![](https://github.com/pythonsir/wx-react-app/blob/master/src/Untitled.gif)

## 版本说明
wx-react-app 在 v0.3.0 之后加入了接口服务。  

开源项目 [wx-react-service](https://github.com/pythonsir/wx-react-service) 为其提供接口服务支持。  

wx-react-app 在 v0.3.0 之前还是采用 mock.js模拟数据

## 项目结构

```
- build                      打包后的项目目录
- public
  - favicon.ico
  - index.html               主页面
  - mainifest.json
- src                        源码文件夹
  - assets                   资源文件夹
  - common
    - menu.js                菜单配置文件
    - router.js              路由配置文件
  - components               组件文件夹
    ...
  - layouts                  布局文件夹
    - BaseLayout.js          后台布局
    - BaseLayout.less
    - UserLayout.js          登录布局
    - UserLayout.less
  - mock                     模拟数据文件夹
    ......
  - redux
    - index.js               所有同步redux的入口
    ......                   
  - routes                   容器组件文件夹
    ......
  - saga                     
    - index.js               异步redux的入口
    ......
  - services
    - api.js                 请求入口
  - store
    - index.js
  - untils                   辅助类
    .....
  index.js
  index.css
- config-overrides.js        webpack配置文件
......
```


## 安装
下载完成后，在项目根目录使用 `npm install` 或者 `yarn install` , 推荐使用 `yarn` 安装。
## 启动
在根目录运行如下命令:  
`yarn start`
