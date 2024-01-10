<script setup lang="ts">
import type { GoodsItem, RankItem } from '@/types/api'
// 定义 props 接收
defineProps<{
  goods: GoodsItem<RankItem>
}>()
</script>

<template>
  <navigator hover-class="none" :url="`/pages/goods/details?type=${goods.id}`" class="goods">
    <image :src="goods.image_url" mode="aspectFill"></image>
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
        <span class="goods-price-main">{{ goods.price.split('.')[0] }}</span>
        <span class="goods-price-other">.{{ goods.price.split('.')[1] }}</span>
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
  </navigator>
</template>

<style lang="scss">
.goods {
  width: 100%;
  height: 100%;
  border-radius: $uni-margin-frame;
  background: #fff;
  overflow: hidden;
  > image {
    width: calc(50vw - $uni-margin-frame * 3 / 2);
    height: calc(50vw - $uni-margin-frame * 3 / 2);
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
        background: #ff4142;
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
      color: #ff7500;
      box-sizing: border-box;
      .goods-price-tag-icon {
        width: 24rpx;
        height: 24rpx;
        background: #ff4142;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 5rpx;
        margin-left: 2rpx;
        .iconfont {
          color: #fff;
        }
      }
    }
    .goods-price {
      height: 52rpx;
      line-height: 52rpx;
      margin-top: 5rpx;
      color: #ff4142;
      font-size: 36rpx;
      font-weight: 600;
      .goods-price-unit {
        font-size: 24rpx;
      }
      .goods-price-other {
        font-size: 24rpx;
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
      font-weight: 300;
      color: $uni-text-color-grey;
      .goods-pay-tag {
        padding: 2rpx 8rpx;
        background: #e1fded;
        color: $uni-color-success;
        font-weight: 400;
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
        background: #f4b200;
        padding: 0 30rpx 0 10rpx;
        font-size: 24rpx;
        color: #fff;
        display: flex;
        .goods-rank-num-txt {
          margin-left: 5rpx;
          flex: 1;
          text-align: center;
        }
      }
      .goods-rank-type {
        flex: 1;
        font-size: 20rpx;
        font-weight: 600;
        background: #fdf2d7;
        color: #d89e0b;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 20rpx 0 0 20rpx;
        padding: 0 10rpx;
        margin-left: -20rpx;
      }
      .goods-rank-link {
        font-size: 20rpx;
        font-weight: 600;
        background: #fdf2d7;
        color: #d89e0b;
        padding-right: 10rpx;
        > .iconfont {
          font-size: 16rpx;
        }
      }
    }
  }
}
</style>
