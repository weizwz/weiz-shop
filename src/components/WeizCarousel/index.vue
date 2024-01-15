<script setup lang="ts">
import type { BannerItem } from '@/types/api'
import { ref } from 'vue'

const activeIndex = ref(0)

// 当 swiper 下标发生变化时触发
const onChange: UniHelper.SwiperOnChange = (ev: UniHelper.SwiperOnChangeEvent) => {
  // ! 非空断言，主观上排除掉空值情况
  activeIndex.value = ev.detail.current
}
// 定义 props 接收 withDefaults设置默认值
withDefaults(
  defineProps<{
    list: BannerItem[]
    dotBottom?: number
    size?: string
  }>(),
  {
    dotBottom: 12,
  },
)
</script>

<template>
  <view :class="['carousel', size]">
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
  height: 280rpx;
  margin: 0 $uni-margin-frame;
  border-radius: $uni-margin-frame;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .swiper {
    height: 280rpx;
  }
  &.small {
    height: 200rpx;
    .swiper {
      height: 200rpx;
    }
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 32rpx;
      height: 8rpx;
      margin: 0 8rpx;
      border-radius: 8rpx;
      background-color: rgba(255, 255, 255, 0.5);
    }
    .active {
      background-color: $uni-color-primary;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
