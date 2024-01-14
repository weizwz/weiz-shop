<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getBannerAPI } from '@/api/banner'
import type { BannerItem } from '@/types/api'

// 轮播图 或者 ref([] as BannerItem[])
const bannerList = ref<BannerItem[]>([])
const getBannerList = async () => {
  const res = await getBannerAPI('category')
  bannerList.value = res.result
}
onLoad(async () => {
  getBannerList()
})
</script>

<template>
  <view class="viewport">
    <!-- 搜索框 -->
    <view class="search-top">
      <WeizSearch :height="36" theme="white" />
    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view v-for="(item, index) in 10" :key="item" class="item" :class="{ active: index === 0 }">
          <text class="name"> 零食 </text>
        </view>
      </scroll-view>
      <!-- 右侧：二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <!-- 焦点图 -->
        <WeizCarousel class="categories-banner" :list="bannerList" size="small" />
        <!-- 内容区域 -->
        <view class="panel" v-for="item in 3" :key="item">
          <view class="title">
            <text class="name">饼干类</text>
          </view>
          <view class="section">
            <navigator v-for="goods in 4" :key="goods" class="goods" hover-class="none" :url="`/pages/goods/goods?id=`">
              <image class="image" src="/static/images/card/category/1.png"></image>
              <view class="name ellipsis">五谷饼干</view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.search-top {
  padding: 0 $uni-margin-frame;
  margin: $uni-margin-frame 0;
}
/* 分类 */
.categories {
  flex: 1;
  min-height: 400rpx;
  display: flex;
}
.categories-banner {
  height: 200rpx;
}
/* 一级分类 */
.primary {
  overflow: hidden;
  width: 180rpx;
  flex: none;
  background-color: #f6f6f6;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96rpx;
    font-size: 26rpx;
    color: #595c63;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 42rpx;
      bottom: 0;
      width: 96rpx;
      border-top: 1rpx solid #e3e4e7;
    }
  }
  .active {
    background-color: #fff;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8rpx;
      height: 100%;
      background-color: $uni-color-main;
    }
  }
}
.primary .item:last-child::after,
.primary .active::after {
  display: none;
}
/* 二级分类 */
.secondary {
  background-color: #fff;
  .panel {
    margin: $uni-margin-frame $uni-margin-frame 0;
  }
  .title {
    height: 60rpx;
    line-height: 60rpx;
    color: #333;
    font-size: 28rpx;
    border-bottom: 1rpx solid #f7f7f8;
  }
  .section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0 0;
    .goods {
      width: 163.33rpx;
      margin: 0rpx $uni-margin-frame $uni-margin-frame 0;
      &:nth-child(3n) {
        margin-right: 0;
      }
      image {
        width: 163.33rpx;
        height: 163.33rpx;
        border-radius: 10rpx;
      }
      .name {
        padding: 5rpx;
        font-size: 22rpx;
        color: #333;
      }
    }
  }
}
</style>
