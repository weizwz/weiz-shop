<script setup lang="ts">
import type { BannerItem } from '@/types/api'
import { ref } from 'vue'

const activeIndex = ref(0)

// 当 swiper 下标发生变化时触发
const onChange: UniHelper.SwiperOnChange = (ev) => {
  // ! 非空断言，主观上排除掉空值情况
  activeIndex.value = ev.detail.current
}
// 定义 props 接收
defineProps<{
  list: BannerItem[]
  dotBottom: Number
}>()
</script>

<template>
  <view class="carousel">
    <swiper class="swiper" :circular="true" :autoplay="true" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator :url="item.url" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator" :style="{ bottom: dotBottom + 'rpx' }">
      <text v-for="(item, index) in list" :key="item.id" class="dot" :class="{ active: index === activeIndex }"></text>
    </view>
  </view>
</template>

<style lang="scss">
/* 轮播图 */
.carousel {
  height: 360rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .swiper {
    height: 360rpx;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 36rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .active {
      background-color: #409eff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
