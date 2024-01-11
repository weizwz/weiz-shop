<script setup lang="ts">
import type { GoodsItem, RankItem } from '@/types/api'
// 定义 props 接收
defineProps<{
  goods: GoodsItem<RankItem>
}>()
</script>

<template>
  <navigator hover-class="none" :url="`/pages/goods/details?type=${goods.id}`" class="goods">
    <swiper
      v-if="goods.type === 'swiper'"
      class="goods-swiper"
      :circular="true"
      :autoplay="true"
      :interval="3000"
      :duration="600"
      :indicator-dots="true"
      indicator-color="rgba(255, 255, 255, 0.6)"
      indicator-active-color="#fff"
      :style="{ height: `calc(${goods.image_ratio} * (50vw - 30rpx))` }"
    >
      <swiper-item class="goods-swiper-item" v-for="(img, index) in goods.image_url" :key="index">
        <image :src="img" mode="widthFix"></image>
      </swiper-item>
    </swiper>
    <view v-else-if="goods.type === 'video'" class="goods-video">
      <view class="goods-video-image" :style="{ height: `calc(${goods.image_ratio} * (50vw - 30rpx))` }">
        <image :src="goods?.video_url" mode="widthFix"></image>
        <view class="goods-video-image-name">{{ goods.videoName }}</view>
      </view>
      <view class="goods-video-info">
        <image :src="typeof goods.image_url === 'string' ? goods.image_url : ''" mode="widthFix"></image>
        <view class="goods-video-name-info">
          <view class="goods-video-name">{{ goods.name }}</view>
          <view class="goods-price">
            <span class="goods-price-unit">¥</span>
            <span class="goods-price-main">{{ goods?.price ? goods?.price.split('.')[0] : '' }}</span>
            <span class="goods-price-other">.{{ goods?.price ? goods?.price.split('.')[1] : '' }}</span>
          </view>
        </view>
      </view>
    </view>
    <view v-else-if="goods.type === 'normal'" class="goods-normal">
      <image :src="typeof goods.image_url === 'string' ? goods.image_url : ''" mode="widthFix"></image>
      <view class="goods-info">
        <view class="goods-name">
          <view v-if="goods.nameTag" class="goods-name-tag">{{ goods.nameTag }}</view>
          <view class="goods-name-title">{{ goods.name }}</view>
        </view>
        <view v-if="goods.priceTag" class="goods-price-tag">
          <view class="goods-price-tag-icon"><span class="iconfont icon-wodefapiao"></span></view>
          {{ goods.priceTag }}
        </view>
        <view class="goods-price">
          <span class="goods-price-unit">¥</span>
          <span class="goods-price-main">{{ goods?.price ? goods?.price.split('.')[0] : '' }}</span>
          <span class="goods-price-other">.{{ goods?.price ? goods?.price.split('.')[1] : '' }}</span>
          <span v-if="goods.oldPrice" class="goods-price-desc"> 到手价 </span>
          <span v-if="goods.oldPrice" class="goods-price-old">¥{{ goods.oldPrice }}</span>
        </view>
        <view class="goods-comment-wrapper">
          <view v-if="goods.payTag" class="goods-pay-tag">先享后付</view>
          <view class="goods-comment">{{ goods.comment }}条评论</view>
          <view v-if="!goods.payTag" class="goods-commentRate">{{ goods.commentRate }}好评率</view>
        </view>
        <view v-if="goods.rank" class="goods-rank">
          <navigator hover-class="none" :url="`/pages/rank?type=${goods.rank.link}`" class="goods-rank-wrapper">
            <view class="goods-rank-num">
              <span class="iconfont icon-a-jiangbeipaihangbang-m"></span>
              <span class="goods-rank-num-txt">{{ goods.rank.rank }}</span>
            </view>
            <view class="goods-rank-type">{{ goods.rank.type }}</view>
            <view class="goods-rank-link">
              {{ goods.rank.type.length <= 8 ? '' : '榜' }}
              <span class="iconfont icon-fanhui"></span>
            </view>
          </navigator>
        </view>
      </view>
    </view>
  </navigator>
</template>

<style lang="scss">
.goods {
  width: 100%;
  height: 100%;
  border-radius: $uni-margin-frame;
  background: #fff;
  overflow: hidden;
  image {
    width: 100%;
    height: inherit;
  }
  .goods-swiper {
    width: 100%;
  }
  .goods-video {
    width: 100%;
    .goods-video-image {
      border-radius: $uni-margin-frame;
      overflow: hidden;
      position: relative;
      .goods-video-image-name {
        position: relative;
        left: 0;
        bottom: 100rpx;
        height: 80rpx;
        line-height: 40rpx;
        width: calc(100% - 40rpx);
        padding: 0 20rpx;
        overflow: hidden;
        font-size: 28rpx;
        color: #fff;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .goods-video-info {
      height: 140rpx;
      padding: 20rpx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      overflow: hidden;
      > image {
        width: 100rpx;
        height: 100rpx;
        border-radius: 10rpx;
        flex: 0 0 auto;
      }
      .goods-video-name-info {
        height: 100rpx;
        width: calc(100% - 100rpx);
        padding: 0 20rpx;
        box-sizing: border-box;
      }
      .goods-video-name {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 24rpx;
        height: 43rpx;
        line-height: 43rpx;
      }
    }
  }
  .goods-normal {
    width: 100%;
  }
  .goods-price {
    height: 52rpx;
    line-height: 52rpx;
    margin-top: 5rpx;
    color: $uni-text-color-price;
    font-size: 38rpx;
    font-weight: 600;
    .goods-price-unit {
      font-size: 24rpx;
    }
    .goods-price-other {
      font-size: 24rpx;
    }
    .goods-price-desc {
      font-size: 20rpx;
      font-weight: 700;
    }
    .goods-price-old {
      color: $uni-text-color-grey;
      font-size: 20rpx;
    }
  }
  .goods-info {
    padding: 0 $uni-margin-frame $uni-margin-frame;
    .goods-name {
      height: 46rpx;
      overflow: hidden;
      font-size: 28rpx;
      font-weight: 600;
      display: flex;
      .goods-name-tag {
        white-space: nowrap;
        font-size: 20rpx;
        font-weight: 400;
        background: $uni-text-color-price;
        padding: 4rpx 10rpx;
        border-radius: 6rpx;
        color: #fff;
        height: 24rpx;
        line-height: 24rpx;
        margin-top: 8rpx;
      }
      .goods-name-title {
        line-height: 46rpx;
        flex: 1;
        word-break: break-all;
        overflow: hidden;
        margin-left: 5rpx;
      }
    }
    .goods-price-tag {
      display: flex;
      width: fit-content;
      align-items: center;
      height: 32rpx;
      line-height: 32rpx;
      margin-top: 5rpx;
      padding-right: 10rpx;
      font-size: 22rpx;
      background: #fef6ee;
      border-radius: 6rpx;
      color: $uni-text-color-rank-main;
      box-sizing: border-box;
      .goods-price-tag-icon {
        width: 24rpx;
        height: 24rpx;
        background: $uni-text-color-price;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 5rpx;
        margin-left: 2rpx;
        .iconfont {
          color: #fff;
        }
      }
    }
    .goods-comment-wrapper {
      height: 32rpx;
      line-height: 32rpx;
      padding: 5rpx 0;
      display: flex;
      align-items: center;
      white-space: nowrap;
      font-size: 24rpx;
      font-weight: 400;
      color: $uni-text-color-grey;
      .goods-pay-tag {
        font-size: 24rpx;
        padding: 2rpx 8rpx;
        background: #e1fded;
        color: $uni-color-success;
        font-weight: 500;
        margin-right: 10rpx;
        border-radius: 6rpx;
      }
      .goods-comment {
        margin-right: 10rpx;
      }
    }
    .goods-rank {
      height: 52rpx;
      line-height: 52rpx;
      margin-top: 10rpx;
      border-radius: 12rpx;
      overflow: hidden;
      .goods-rank-wrapper {
        display: flex;
        white-space: nowrap;
      }
      .goods-rank-num {
        width: 60rpx;
        background: $uni-text-color-rank-main;
        padding: 0 30rpx 0 10rpx;
        font-size: 24rpx;
        color: #fff;
        display: flex;
        .goods-rank-num-txt {
          margin-left: 5rpx;
          flex: 1;
          text-align: center;
          font-weight: 600;
        }
      }
      .goods-rank-type {
        flex: 1;
        font-size: 20rpx;
        font-weight: 600;
        background: $uni-text-color-rank-bg;
        color: $uni-text-color-rank-main;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 20rpx 0 0 20rpx;
        padding: 0 10rpx;
        margin-left: -20rpx;
      }
      .goods-rank-link {
        font-size: 20rpx;
        font-weight: 600;
        background: $uni-text-color-rank-bg;
        color: $uni-text-color-rank-main;
        padding-right: 10rpx;
        > .iconfont {
          font-size: 16rpx;
        }
      }
    }
  }
}
</style>
