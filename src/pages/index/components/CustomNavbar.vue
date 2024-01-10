<script setup lang="ts">
import { getSearchTxtAPI } from '@/api/search'
import logo from '@/static/logo.png'
import { onMounted, ref } from 'vue'
// 获取屏幕边界到安全区域距离 https://uniapp.dcloud.net.cn/api/system/getWindowInfo.html#getwindowinfo
const { safeAreaInsets, screenWidth } = uni.getWindowInfo()
// 获取胶囊信息 https://uniapp.dcloud.net.cn/api/ui/menuButton.html#getmenubuttonboundingclientrect
let menuButtonInfo = { top: 0, right: 0, height: 32, width: 0 }
//#ifdef MP-WEIXIN
menuButtonInfo = uni.getMenuButtonBoundingClientRect()
//#endif

const pT = menuButtonInfo.top || safeAreaInsets?.top
const rightSpace = menuButtonInfo.right ? screenWidth - menuButtonInfo.right : 0

const toSearch = (searchKey: string) => {
  uni.redirectTo({
    url: '/pages/search/index?searchKey=' + searchKey,
    animationType: 'pop-in',
    animationDuration: 200,
  })
}

onMounted(() => {
  getSearchTxt()
})

// 默认一次返回10组文字
const searchTxt = ref<string[]>([])
const getSearchTxt = async () => {
  const res = await getSearchTxtAPI()
  searchTxt.value = res.result
}
</script>

<template>
  <view class="navbar" :style="{ paddingTop: pT + 'px' }">
    <!-- logo文字 -->
    <view class="logo" :style="{ height: menuButtonInfo.height + 'px' }">
      <image mode="aspectFit" class="logo-img" :src="logo" alt="味值商城"></image>
    </view>
    <!-- 搜索条 -->
    <view class="search" :style="{ height: menuButtonInfo.height + 'px', lineHeight: menuButtonInfo.height + 'px' }">
      <span class="iconfont icon-sousuo"></span>
      <view class="search-txt-wrapper" :style="{ height: menuButtonInfo.height + 'px' }">
        <swiper
          class="search-txt-content"
          :vertical="true"
          :circular="true"
          :autoplay="true"
          :interval="3000"
          :duration="1000"
        >
          <swiper-item class="search-txt-item" v-for="(item, index) in searchTxt" :key="index" @click="toSearch(item)">
            <view
              class="search-txt"
              :style="{ height: menuButtonInfo.height + 'px', lineHeight: menuButtonInfo.height + 'px' }"
              >{{ item }}</view
            >
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view class="navbar-space" :style="{ width: menuButtonInfo.width + rightSpace + 'px' }"></view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  padding-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
  .search {
    flex: 1;
    height: 64rpx;
    line-height: 64rpx;
    box-sizing: border-box;
    border-radius: 100rpx;
    display: flex;
    align-items: center;
    padding: 0 20rpx;
    margin-right: 20rpx;
    color: #999;
    background: rgba(201, 225, 247, 0.2);
    .search-txt-wrapper {
      flex: 1;
      margin-left: 10rpx;
      height: 100%;
      overflow: hidden;
      .search-txt-content {
        .search-txt {
          width: 100%;
          font-size: 12px;
          height: 64rpx;
          line-height: 64rpx;
        }
      }
    }
  }
  .navbar-space {
    width: 0;
  }
}
.search-txt-content {
  height: 100%;
}
.search-txt-item {
  height: auto !important;
}
</style>
