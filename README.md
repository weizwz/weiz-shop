# weiz-shop

### 介绍

味值商城，app/微信小程序/H5 三端并发。

uin-app + vue3 + ts + vite 搭建的商城项目

**所有商品图片来自网络，仅供此项目演示使用，不可商用**

![预览图](https://p.weizwz.com/weizshop/weizshop_design_c2d317aa67e2d7a4.webp)

### 启动

安装

```shell
pnpm i
```

运行，以微信小程序为例

```shell
pnpm run dev:mp-weixin
```

然后打开 `微信开发者工具`，导入 `dist/dev/mp-weixin` 项目，然后就可以预览了

### 其他

#### 项目搭建

参考 [uni-app+vue3+ts项目搭建](https://note.weizwz.com/mobile/uniapp/project-building-uniapp-vue3)

参考 ~~[小兔鲜儿 - 项目起步](https://megasu.gitee.io/uni-app-shop-note/rabbit-shop/)~~

#### iconfont 图标使用

参考 [uni-app 图标库整合：使用 iconfont 构建属于自己的图标库](https://juejin.cn/post/7314121672886075443)

#### uni-app官方文档

参考 [uni-app官方文档](https://uniapp.dcloud.net.cn/)

参考 [uni-ui官方文档](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

#### 更新

- 2025.01.12
  uni-ui升级到1.5.7，执行 `npm update @dcloudio/uni-ui -S`，更新日志详见：https://ext.dcloud.net.cn/plugin?id=55&update_log
  
  @dcloudio/uni-app升级到3.0.0-4040520250104002，执行 `npx @dcloudio/uvm@latest`，https://uniapp.dcloud.net.cn/quickstart-cli.html

- 2024.01.17
  uni-ui升级到1.5.0，执行 `npm update @dcloudio/uni-ui -S`，更新日志详见：https://ext.dcloud.net.cn/plugin?id=55&update_log

- 2024.01.08
  uni-app 有新版本发布，请执行 `npx @dcloudio/uvm@latest` 更新，更新日志详见：https://download1.dcloud.net.cn/hbuilderx/changelog/3.99.2023122611.html
