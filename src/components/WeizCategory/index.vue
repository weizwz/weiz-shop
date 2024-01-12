<script setup lang="ts">
import type { CategoryItem } from '@/types/api'

// 定义 props 接收数据
defineProps<{
  list: CategoryItem[]
}>()
</script>

<template>
  <view class="category">
    <navigator class="category-item" hover-class="none" url="/pages/index/index" v-for="item in list" :key="item.id">
      <span :class="['iconfont', item.icon]"></span>
      <text class="text">{{ item.title }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
.category {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: $uni-margin-frame $uni-margin-frame 0;
  border-radius: $uni-margin-frame;
  min-height: 160rpx;
  background: #fff;
  .category-item {
    // 不可设置百分比 https://uniapp.dcloud.net.cn/component/navigator.html#navigator
    width: calc(20vw - $uni-margin-frame / 2);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: #333;
    .iconfont {
      font-size: 48rpx;
      margin-bottom: 10rpx;
    }
    .text {
      font-size: 24rpx;
    }
  }
}
</style>
