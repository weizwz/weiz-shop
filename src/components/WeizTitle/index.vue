<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <view class="weiz-title">
    <view class="content">
      <image class="title-img" src="https://p.weizwz.com/weizshop/title_ae3b004ab912294d.webp" mode="aspectFit" />
      <view class="txt">{{ title }}</view>
      <image class="title-img" src="https://p.weizwz.com/weizshop/title_ae3b004ab912294d.webp" mode="aspectFit" />
    </view>
  </view>
</template>

<style lang="scss">
.weiz-title {
  width: 100%;
  height: 66rpx;
  line-height: 66rpx;
  > .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > .title-img {
      height: 24rpx;
      width: 31rpx;
      margin-right: 20rpx;
      &:last-child {
        margin-right: 0;
      }
    }
    > .txt {
      height: 100%;
      position: relative;
      font-size: 32rpx;
      font-weight: 600;
      margin-right: 20rpx;
    }
  }
}
</style>
