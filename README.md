## Stack:

| Package | Description |
| --- | --- |
| `taro init pintushi-taro` | Create Taro apps with no build configuration.
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
