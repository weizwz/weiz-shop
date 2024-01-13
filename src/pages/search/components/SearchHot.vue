<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHotSearchAPI } from '@/api/search'
import type { SearchHot } from '@/types/api'

let hotSearchList = ref<SearchHot[]>([])
let hotForeList = ref<SearchHot[]>([])
let hotLaterList = ref<SearchHot[]>([])

const getData = async () => {
  const res = await getHotSearchAPI()
  hotSearchList.value = res.result
  hotForeList.value = hotSearchList.value.filter((item, index) => {
    return index <= 2
  })
  hotLaterList.value = hotSearchList.value.filter((item, index) => {
    return index > 2
  })
}

onMounted(() => {
  getData()
})
</script>

<template>
  <view class="search-hot">
    <view class="title"> 热搜排行榜 </view>
    <view class="content flex-column">
      <view class="content-fore flex">
        <view v-for="item in hotForeList" :key="item.id" class="content-fore-wrapper">
          <image mode="scaleToFill" :src="item.img"></image>
          <view class="content-idx">{{ item.rank }}</view>
          <view class="content-name">{{ item.name }}</view>
          <view class="content-hot">热度 {{ item.hot }}</view>
        </view>
      </view>
      <view class="content-later">
        <view v-for="item in hotLaterList" :key="item.id" class="content-later-wrapper flex-align-center mb20">
          <view class="content-idx">{{ item.rank }}</view>
          <view class="content-later-content flex">
            <image mode="aspectFit" :src="item.img"></image>
            <view class="content-wrapper">
              <view class="content-name">{{ item.name }}</view>
              <view class="content-desc"> {{ item.desc }}</view>
            </view>
          </view>
          <view class="content-hot">热度 {{ item.hot }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.search-hot {
  .title {
    margin-bottom: 20rpx;
    color: $uni-color-main;
    font-weight: 600;
  }
  .content-fore {
    justify-content: space-between;
    height: 300rpx;
    margin-bottom: $uni-margin-frame;
    .content-fore-wrapper {
      width: calc(33.33% - $uni-margin-frame / 2);
      height: 100%;
      position: relative;
      border-radius: $uni-margin-frame;
      overflow: hidden;
      image {
        width: 100%;
        height: inherit;
      }
      .content-idx {
        position: absolute;
        top: -40rpx;
        left: -40rpx;
        width: 80rpx;
        height: 80rpx;
        line-height: 115rpx;
        border-radius: 100%;
        background: $uni-color-aquamarine;
        color: #fff;
        text-indent: 50rpx;
        font-size: 28rpx;
      }
      .content-name,
      .content-hot {
        position: absolute;
        left: 10%;
        bottom: 50rpx;
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 28rpx;
        font-weight: 600;
        color: #fff;
        text-align: center;
        text-shadow: 1px 1px rgba(0, 0, 0, 0.8);
      }
      .content-hot {
        bottom: 10rpx;
        font-size: 24rpx;
        font-weight: 500;
      }
    }
  }
  .content-later-wrapper {
    justify-content: space-between;
    .content-idx {
      width: 50rpx;
      font-size: 28rpx;
      color: $uni-color-main;
    }
    .content-later-content {
      flex: 1;
      image {
        width: 80rpx;
        height: 80rpx;
        border-radius: 10rpx;
        margin-right: 20rpx;
      }
      .content-name {
        font-size: 28rpx;
        line-height: 48rpx;
      }
      .content-desc {
        font-size: 24rpx;
        line-height: 32rpx;
        color: $uni-text-color-grey;
      }
    }
    .content-hot {
      font-size: 24rpx;
      line-height: 32rpx;
      color: $uni-text-color-grey;
    }
  }
}
</style>
