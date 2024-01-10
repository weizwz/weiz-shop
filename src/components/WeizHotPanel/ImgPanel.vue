<script setup lang="ts">
import type { HotPcitureItem } from '@/types/api'

// 定义 props 接收数据
defineProps<{
  img: HotPcitureItem
}>()
</script>

<template>
  <view class="img-content">
    <image class="image" mode="aspectFill" :src="img.src"></image>
    <view class="mark-wrapper">
      <view v-if="img.price" class="mark price">¥ {{ img.price }}</view>
    </view>
    <view class="mark-wrapper mark-wrapper-sales">
      <view v-if="img.sales" class="mark sales">月销{{ img.sales }}件</view>
    </view>
    <view class="mark-wrapper mark-wrapper-brand">
      <view v-if="img.brand" class="mark brand">{{ img.brand }}</view>
    </view>
    <view class="mark-wrapper mark-wrapper-date">
      <view v-if="img.date" class="mark date">{{ img.date }}上架</view>
    </view>
  </view>
</template>

<style lang="scss">
.img-content {
  position: relative;
  width: 150rpx;
  height: 150rpx;
  overflow: hidden;
  border-radius: 10rpx;
  .image {
    width: 100%;
    height: 100%;
    border-radius: 10rpx;
  }
  .mark-wrapper {
    position: absolute;
    bottom: 15rpx;
    left: 0;
    width: 100%;
    height: 30rpx;
    line-height: 30rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .mark {
      padding: 0 10rpx;
      border-radius: 20rpx;
      background: #ffe4df;
      font-size: 20rpx;
      color: #fa2c19;
      font-weight: 700;
    }
    &.mark-wrapper-sales {
      bottom: inherit;
      top: 0;
      justify-content: flex-start;
      .sales {
        width: 100%;
        text-align: center;
        border-radius: 0;
        font-weight: 600;
        color: #fff;
        background: rgba(250, 44, 25, 0.6);
      }
    }
    &.mark-wrapper-brand {
      bottom: 10rpx;
      justify-content: flex-start;
      .brand {
        border-radius: 0 30rpx 30rpx 0;
        padding-right: 15rpx;
        background: #c9e1f7;
        color: #409eff;
      }
    }
    &.mark-wrapper-date {
      bottom: inherit;
      top: 0;
      justify-content: flex-end;
      .date {
        border-radius: 0 0 0 10rpx;
        background: #fcc802;
        font-weight: 500;
      }
    }
  }
}
</style>
