# react+redux+typescript构建前端项目

视频参考：https://www.bilibili.com/video/BV1Wb41147QT?from=search&seid=15906508399145941210
视频参考2：https://www.bilibili.com/video/BV1C7411k7ZQ?from=search&seid=15906508399145941210

资料参考1：https://github.com/CCZX/React-TypeScript-from0to1

资料参考2：https://github.com/CCZX/wechat

## 1搭建开发环境

- 项目初始化

```bash
mkdir react-ts

cd react-ts

npm init -y
```

- 安装相关依赖

```bash
cnpm i typescript webpack webpack-cli webpack-dev-server ts-loader cross-env webpack-merge clean-webpack-plugin html-webpack-plugin -D
```

## 2-生成ts配置文件

此时，可以使用 tsc 命令，生成 tsconfig 文件

```
cnpm i typescript -g

tsc --init
```

文件如下：

```json
{
  "compilerOptions": {
    "target": "es5", // 编译后的版本
    "module": "commonjs", // 编译后模块的写法
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
}

```



## 3-配置 webpack

- 安装依赖

```bash
cnpm i typescript webpack webpack-cli webpack-dev-server ts-loader cross-env webpack-merge clean-webpack-plugin html-webpack-plugin -D

cnpm i react @types/react react-dom @types/react-dom -S

cnpm i redux react-redux @types/react-redux redux-logger redux-promise redux-thunk @types/redux-logger @types/redux-promise -D

cnpm i react-router-dom @types/react-router-dom connected-react-router antd -S

cnpm i eslint @typescript-eslit/eslint-plugin @typescript-eslit/parser -D

cnpm i @types/jest ts-jest -D
```

- 编写 `/config/webpack.base.config.js`

```js
/*
 * @Description: 
 * @Date: 2020-12-11 15:34:09
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

// 清理产出目录的插件
 const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//  产出 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    // 输出目录
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    contentBase: '../dist'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
```



- 编写 `webpack.config.dev.js`

```js
const { smart } = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = smart(base, {
  mode: 'development',
  devtool: 'inline-soruce-map'
})
```



- 编写 `webpack.config.prod.js`

```js
const { smart } = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = smart(base, {
  mode: 'production',
})
```



- 新建 `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>react-ts</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

- 新建 `src/index.tsx`

```js
console.log('hello')
```

- 配置 `package.json` 中的 `dev`, `build` 命令

```json
{
  "name": "react-typeScript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config ./config/webpack.dev.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./config/webpack.prod.config.js",
    "eslint": "eslint src --ext .js,.ts,.tsx",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^24.9.1",
    "@types/react-redux": "^7.1.7",
    "@types/react-router-dom": "^5.1.3",
    "@types/redux-logger": "^3.0.7",
    "@types/redux-promise": "^0.5.28",
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^7.0.0",
    "css-loader": "^3.4.2",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^25.1.0",
    "react-redux": "^7.1.3",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-promise": "^0.6.0",
    "redux-thunk": "^2.3.0",
    "style-loader": "^1.1.3",
    "ts-jest": "^25.0.0",
    "ts-loader": "^6.2.1",
    "typescript": "^3.7.5",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.1",
    "webpack-merge": "^4.2.2"
  },
  "dependencies": {
    "@types/react": "^16.9.19",
    "@types/react-dom": "^16.9.5",
    "antd": "^3.26.7",
    "connected-react-router": "^6.6.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-router-dom": "^5.1.2"
  }
}
```

- 启动验证

```bash
yarn dev
# http://localhost:8080/

yarn build
```

- 可能报错
  - 错误1：`smart is not a  function`
  - 错误2：`webpack-cli/bin/config-yargs...`
- 解决办法：使用上面的 `package.json` 文件，锁定依赖版本

## 4-配置 eslint

- 配置 `.eslintrc.json` 文件

```json
{
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint/eslint-plugin"
    ],
    "extends": [
        // 使用推荐配置
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        // 配置规则
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off"
    }
}
```

- 配置 `package.json` ，新增 `eslint`  命令

这里可以安装 vs code 的 eslint 插件



## 5-单元测试

- 安装 jest 测试工具

```bash
cnpm i @types/jest ts-jest -D
```

- 新建 `jest.config.js` 配置

```js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node'
}
```

- 编写测试文件

```tsx
// src/calc.tsx

function sum (a: number, b: number) {
  return a + b
}
function minus (a: number, b: number) {
  return a - b
}

module.exports = {
  sum,
  minus
}

// src/calc.test.jsx
let calc = require('./calc')

describe('测试calc', () => {
  test('1+1', () => {
    expect(calc.sum(1,1)).toBe(2)
  })
  
  test('111', () => {
    expect(calc.minus(1,1)).toBe(0)
  })
})
```

- 配置 `package.json` 中 测试命令

```json
"scripts": {
    // ...
    "test": "jest"
  },
```

- 运行测试命令： `npm run test`



## 6-支持 React

- 安装 react

```bash
cnpm i react @types/react react-dom @types/react-dom -S
```

- 编写 `src/index.tsx`

```tsx
import React from 'react';
import ReactDom from 'react-dom'

const Index = () => {
  return (
    <div>hello, world</div>
  )
}

ReactDom.render(<Index />, document.getElementById("root"))
```

- 这里可能会标红语法问题，需要配置 `tsconfig.json`

```json
{
  "compilerOptions": {
      // ... 新加这个
    "jsx": "preserve", /** 'preserve' | 'react-native' | 'react' */
     //  'preserve' 表示保留 jsx 语法 和 tsx 后缀
     //  'react-native' 表示 保留 jsx 语法但会把后缀改为 js
     //  'react' 表示不保留 jsx 语法，直接编译成 es5
  }
}

```

- 启动测试：

```bsh
yarn dev

// http://localhost:8080/
```

可以看到预览效果

- 其他 ts 相关：
  - `Element` 是指原生 `DOM` 对象元素，可不是 `React` 里的东西，而是 `DOM` 里面的类型

```tsx
// React.tsx
    // DOM Elements
    // ReactHTMLElement
function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
element: DetailedReactHTMLElement<P, T>,
 props?: P,
 ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
```

![继承关系](http://img.zhufengpeixun.cn/elementss.png)

## 7-定义 函数组件和类组件

```tsx
import React from 'react';
import ReactDom from 'react-dom'

interface Props {
  className: string
}
interface State {
  id: string
}

const props: Props = {
  className: 'title'
}

const Index = (props: Props) => {
  const { className } = props
  return (
    <div className={className}>hello, world</div>
  )
}

class Hello extends React.Component<Props, State> {
  state = {
    id: '11'
  }
  render() {
    return React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
  }
}





ReactDom.render(<Index {...props} />, document.getElementById("root"))
```



## 9-使用 redux

- 安装依赖：

```bash
cnpm i redux react-redux @types/react-redux redux-logger redux-promise redux-thunk @types/redux-logger @types/redux-promise -D
```

- 创建文件 `/src/store/index.tsx`

```tsx
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'



```



