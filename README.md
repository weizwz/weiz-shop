# uni-vue3-ts-shop

### 介绍

uin-app + vue3 + ts + vite

### 启动

安装
```shell
npm i
```

运行，以微信小程序为例

```shell
npm run dev:mp-weixin
```

然后打开 `微信开发者工具`，导入 `dist/dev/mp-weixin` 项目，然后就可以预览了

### 项目搭建流程

#### 初始化

拉取 `uni-app` 官方项目基础架构代码 https://uniapp.dcloud.net.cn/quickstart-cli.html
```shell
npx degit dcloudio/uni-preset-vue#vite-ts uni-vue3-ts-shop

cd uni-vue3-ts-shop

npm i
```
#### 安装uni-app和微信小程序支持ts的扩展插件

```shell
npm i -D @uni-helper/uni-app-types miniprogram-api-typings
```

修改 `tsconfig.json`
```jsonc
{
  "compilerOptions": {
    "ignoreDeprecations": "5.0",
    "allowJs": true,
    },
    "types": ["@dcloudio/types", "miniprogram-api-typings", "@uni-helper/uni-app-types"]
  },
  "vueCompilerOptions": {
    // experimentalRuntimeMode 已废弃，现调整为 nativeTags，请升级 Volar 插件至最新版本
    "nativeTags": ["block", "component", "template", "slot"]
  }
}
```

#### 安装 `prettier`
```shell
npm i -D prettier
```

根目录下新建 `.prettierrc.json`
```json
{
  "singleQuote": true,
  "semi": false,
  "printWidth": 120,
  "trailingComma": "all",
  "endOfLine": "auto"
}
```

#### 安装 `eslint`

```shell
npm i -D eslint eslint-plugin-vue @rushstack/eslint-patch @vue/eslint-config-typescript  @vue/eslint-config-prettier
```

根目录下新建 `.eslintrc.js`
```js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  // 小程序全局变量
  globals: {
    uni: true,
    wx: true,
    WechatMiniprogram: true,
    getCurrentPages: true,
    getApp: true,
    UniApp: true,
    UniHelper: true,
    App: true,
    Page: true,
    Component: true,
    AnyObject: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 120,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    'vue/multi-word-component-names': ['off'],
    'vue/no-setup-props-destructure': ['off'],
    'vue/no-deprecated-html-element-is': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
  },
}
```

`package.json` 中新增命令 `lint`
```json
{
  "scripts": {
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  }
}
```

然后运行 `npm run lint`，将项目内的文件格式化为 `eslint` 规定的格式

#### 安装 `uni-ui`
查看官方文档 https://uniapp.dcloud.net.cn/component/uniui/quickstart.html ，安装类型声明文件 `@uni-helper/uni-ui-types`
```shell
npm i  -D sass sass-loader
npm i @dcloudio/uni-ui
npm i -D @uni-helper/uni-ui-types
```

配置类型声明文件，修改 `tsconfig.json`
```json
{
  "compilerOptions": {
    "types": ["@dcloudio/types", "miniprogram-api-typings", "@uni-helper/uni-app-types", "@uni-helper/uni-ui-types"]
  }
}
```

修改 `src/pages.json`，配置自动导入组件
```jsonc
{ // 组件自动导入
  "easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置  
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue" 
		}
	},
  "pages": [
    // ……
  ]
}
```

#### 安装 `pina`
`pinia-plugin-persistedstate` 是持久化 `pina` 插件
```shell
npm i pinia pinia-plugin-persistedstate
```


插件默认使用 `localStorage` 实现持久化，小程序端不兼容，需要替换持久化API。