# uni-vue3-ts-shop

#### 介绍

uin-app + vue3 + ts + vite

#### 启动

安装
```shell
npm i
```

运行，以微信小程序为例

```shell
npm run dev:mp-weixin
```

然后打开 `微信开发者工具`，导入 `dist/dev/mp-weixin` 项目，然后就可以预览了

#### 项目初始化流程

### 初始化

https://uniapp.dcloud.net.cn/quickstart-cli.html


```shell
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

cd my-vue3-project

npm i
```
### 安装uni-app和微信小程序对ts支持的插件

```shell
npm i -D @uni-helper/uni-app-types miniprogram-api-typings
```

修改 `tsconfig.json`
```json
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

### 安装 `uni-ui`

```shell
npm i  -D sass sass-loader
npm i @dcloudio/uni-ui
npm i -D @uni-helper/uni-ui-types
```

修改 `tsconfig.json`
```json
{
  "compilerOptions": {
    "types": ["@dcloudio/types", "miniprogram-api-typings", "@uni-helper/uni-app-types", "@uni-helper/uni-ui-types"]
  }
}
```

修改 `src/pages.json`
```json
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

### 安装 `pina`

```shell
npm i pinia pinia-plugin-persistedstate
```

