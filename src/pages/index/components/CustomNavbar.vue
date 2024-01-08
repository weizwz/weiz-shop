<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 获取胶囊信息 https://uniapp.dcloud.net.cn/api/ui/menuButton.html#getmenubuttonboundingclientrect
const menuButtonInfo = uni.getMenuButtonBoundingClientRect()

const pT = menuButtonInfo && menuButtonInfo.top ? menuButtonInfo.top : safeAreaInsets?.top

const toSearch = () => {
  uni.redirectTo({
    url: '/pages/search/index',
    animationType: 'pop-in',
    animationDuration: 200,
  })
}
</script>

<template>
  <view class="navbar" :style="{ paddingTop: pT + 'px' }">
    <!-- logo文字 -->
    <view class="logo" :style="{ height: menuButtonInfo?.height + 'px', lineHeight: menuButtonInfo?.height + 'px' }">
      <text class="logo-text">味值商城</text>
    </view>
    <!-- 搜索条 -->
    <view
      class="search"
      :style="{ height: menuButtonInfo?.height + 'px', lineHeight: menuButtonInfo?.height + 'px' }"
      @tap="toSearch"
    >
      <span class="iconfont icon-sousuo"></span>
      <view class="search-txt-wrapper">
        <text class="search-txt">零食</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  padding-top: 20px;
  position: relative;
  display: flex;
  align-item: center;
  margin-bottom: 10px;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    line-height: 64rpx;
    margin-right: 10rpx;
    font-family: '隶书';
    color: $uni-color-primary;
    padding: 0 20rpx;
    .logo-text {
      flex: 1;
      font-size: 40rpx;
    }
  }
  .search {
    width: 40%;
    height: 64rpx;
    line-height: 64rpx;
    box-sizing: border-box;
    border: solid 1px #c8c7cc;
    border-radius: 100px;
    display: flex;
    align-item: center;
    padding: 0 20rpx;
    color: #999;
    font-size: 12px;
    .search-txt-wrapper {
      flex: 1;
      margin-left: 10rpx;
    }
  }
}
</style>
