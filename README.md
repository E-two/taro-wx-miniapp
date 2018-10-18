# 前言

**Taro** 是一套遵循 [React](https://reactjs.org/) 语法规范的 **多端开发** 解决方案。现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

使用 **Taro**，我们可以只书写一套代码，再通过 **Taro** 的编译工具，将源代码分别编译出可以在不同端（微信小程序、H5、React-Native 等）运行的代码。

该项目基于Taro，使用Redux，统一封装了api请求中间件，可以直接拿来使用

## Stack:

| Package | Description |
| --- | --- |
| `taro init taro-wx-miniapp` | Create Taro apps with no build configuration.
| `redux` | Predictable state container for JavaScript apps
| `redux-thunk` | An alternative side effect model for Redux apps
| `normalizr` | Normalizes nested JSON according to a schema
| `taro-ui` | An enterprise-class UI design language and React-based implementation
| `babel` | Compiler for writing next generation JavaScript

## Installation:

1. Need to install all dependencies using this command:

  ```
  npm install
  or
  yarn install
  ```  

2. Next, you can run application:  

  #### In development mode:

  ```
  npm run dev:weapp
  or
  yarn dev:weapp
  ```

  #### Build app:

  ```
  npm run build:weapp
  or
  yarn build:weapp
  ```
  
  ## Npm commands:

| Command | Description |
| --- | --- |
| `npm install or yarn install` | Install project dependencies and build files
| `npm run dev:weapp or yarn dev:weapp` | Run mock api and wexin miniapp
| `npm run dev:swan or yarn dev:swan` | Run baidu miniapp
| `npm run dev:alipay or yarn dev:alipay` | Run alipay miniapp
| `npm run dev:h5 or yarn dev:h5` | Run H5
| `npm run dev:rn or yarn dev:rn` | Run React Native
| `npm run build:weapp or yarn build:weapp` | Build wexin miniapp
| `npm run build:swan or yarn build:swan` | Build baidu miniapp
| `npm run build:alipay or yarn build:alipay` | Build alipay miniapp
| `taro build --type h5 --watch or npx taro build --type h5 --watch` | Build H5
| `taro build --type rn --watch or npx taro build --type rn --watch` | Build React Native
| `npm run template test` | Create template page
| `taro update self or npm i -g @tarojs/cli@latest or yarn global add @tarojs/cli@latest` | Update taro cli
| `taro update project` | Update taro dependencies
