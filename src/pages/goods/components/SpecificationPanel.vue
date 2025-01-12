<script setup lang="ts">
import { ref } from 'vue'
import type { GoodsSpec } from '@/types/api'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 参数
const props = defineProps<{
  id: string
}>()
const popupEmit = defineEmits(['close', 'changeSpec'])

// 数量
const currentNum = ref<UniHelper.UniNumberBoxValue>(1)
const minNum = ref<UniHelper.UniNumberBoxValue>(1)
const maxNum = ref<UniHelper.UniNumberBoxValue>(Math.ceil(Math.random() * 99) + 1)
// 规格
const specification = ref<GoodsSpec[]>([
  { id: '001', name: '经典味 500g 1袋装', price: '29.90', image_url: '/static/images/card/index/1.png' },
  { id: '002', name: '奶香味 500g 1袋装', price: '32.90', image_url: '/static/images/card/index/2.png' },
  { id: '003', name: '海盐味 500g 1袋装', price: '28.90', image_url: '/static/images/card/index/3.png' },
  { id: '004', name: '经典味 1500g 3袋装', price: '82.00', image_url: '/static/images/card/index/4.png' },
  { id: '005', name: '奶香味 1500g 3袋装', price: '86.00', image_url: '/static/images/card/index/5.png' },
])
const currentSpec = ref<GoodsSpec>(specification.value[0])

const changeSpec = (idx: number) => {
  currentSpec.value = specification.value[idx]
  currentNum.value = 1
  popupEmit('changeSpec', currentSpec.value)
}
const changeNumber = (number: UniHelper.UniNumberBoxValue) => {
  currentNum.value = number
}
const closeWindow = () => {
  popupEmit('close')
}

// 暴露方法给父组件
const getCurrentSpec = () => {
  return currentSpec.value
}
const getCurrentNum = () => {
  return {
    minNum: minNum.value,
    maxNum: maxNum.value,
    number: currentNum.value,
  }
}
defineExpose({
  getCurrentSpec,
  getCurrentNum,
})
</script>

<template>
  <view class="specification-panel flex-column" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <view class="style"></view>
    <view class="close" @tap="closeWindow"><uni-icons type="closeempty" size="18" color="#999"></uni-icons></view>
    <view class="current flex">
      <image class="current-img" mode="aspectFill" :src="currentSpec.image_url" />
      <view class="content">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">{{ currentSpec.price.split('.')[0] }}</text>
          <text class="suffix">.{{ currentSpec.price.split('.')[1] }}</text>
        </view>
        <view class="selected"
          >已选<text class="fold">{{ currentSpec.name }}</text
          >, <text class="fold">{{ currentNum }}个</text></view
        >
      </view>
    </view>
    <view class="pl20 title">规格({{ specification.length }})</view>
    <scroll-view :scroll-y="true" class="scroll-select">
      <view class="content p20 flex-wrap">
        <view
          :class="{ 'item boxSize flex-column': true, active: item.id === currentSpec.id }"
          v-for="(item, index) in specification"
          :key="item.id"
          @tap="changeSpec(index)"
        >
          <image class="content-img" mode="aspectFill" :src="item.image_url" />
          <view class="item-desc">{{ item.name }}</view>
        </view>
      </view>
    </scroll-view>
    <view class="number flex">
      <text class="title">数量</text>
      <uni-number-box v-model="currentNum" :min="minNum" @change="changeNumber" :max="maxNum" />
    </view>
  </view>
</template>

<style lang="scss">
.specification-panel {
  position: relative;
  > .style {
    position: absolute;
    top: -$uni-margin-frame;
    width: 100%;
    height: $uni-margin-frame;
    background: #fff;
    border-radius: $uni-margin-frame $uni-margin-frame 0 0;
  }
  > .close {
    position: absolute;
    top: 0;
    right: $uni-margin-frame;
  }
  .title {
    font-size: 26rpx;
  }
  .current {
    height: 100%;
    padding: 0 $uni-margin-frame $uni-margin-frame;
    box-sizing: border-box;
    > .current-img {
      width: 180rpx;
      height: 180rpx;
      border-radius: 20rpx;
    }
    .content {
      padding-left: $uni-margin-frame;
      .price {
        padding: 60rpx 20rpx 10rpx 0;
        font-size: 34rpx;
        color: $uni-text-color-price;
        .number {
          font-size: 56rpx;
        }
      }
      .selected {
        font-size: 28rpx;
        color: $uni-text-color-grey;
        > .fold {
          color: $uni-text-color;
          &:first-child {
            margin-left: $uni-margin-frame;
          }
        }
      }
    }
  }
  .scroll-select {
    max-height: 50vh;
    overflow: hidden;
    .content {
      .item {
        width: 230rpx;
        border-radius: 20rpx;
        overflow: hidden;
        margin-right: 10rpx;
        margin-bottom: 20rpx;
        border: solid 1rpx $uni-text-color-price-bg;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &.active {
          border-color: #ff4142;
          .item-desc {
            color: #ff4142;
            background: $uni-text-color-price-bg;
          }
        }
        > .content-img {
          width: 100%;
          height: 230rpx;
        }
        .item-desc {
          background: $uni-bg-color-grey;
          padding: 4rpx 20rpx;
          text-align: center;
          font-size: 26rpx;
          line-height: 38rpx;
          height: 80rpx;
          font-weight: 600;
        }
      }
    }
  }
  > .number {
    justify-content: space-between;
    align-items: center;
    padding: 0 $uni-margin-frame $uni-margin-frame;
  }
}
</style>
