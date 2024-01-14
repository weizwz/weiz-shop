<script setup lang="ts">
import { navData } from '@/utils/navData'

const navBarData = navData()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: navBarData.top + 'px', height: navBarData.height + 'px' }">
    <!-- logo文字 -->
    <view class="logo" :style="{ height: navBarData.height + 'px' }">
      <image mode="aspectFit" class="logo-img" src="@/static/logo.png" alt="味值商城"></image>
    </view>
    <!-- 搜索条 -->
    <view class="search-bar">
      <WeizSearch :height="navBarData.height" />
    </view>
    <view class="navbar-space" :style="{ width: navBarData.width + navBarData.marginRight + 'px' }"></view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  padding: 20px 0 10px;
  position: relative;
  height: 64rpx;
  display: flex;
  align-items: center;
  z-index: 1;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64rpx;
    padding: 0 20rpx;
    width: 120rpx;
    .logo-img {
      height: 100%;
      width: inherit;
    }
  }
  .search-bar {
    flex: 1;
  }
  .navbar-space {
    width: 0;
  }
}
</style>
