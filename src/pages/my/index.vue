<script setup lang="ts">
import { useUserStore } from '@/stores'
import type { CardListInstance } from '@/types/components'
import { goLogin } from '@/utils/login'
import { ref, watch } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const userStore = useUserStore()
const userInfo = userStore.userInfo
goLogin(userInfo)

watch(
  () => userStore.userInfo,
  (val) => {
    goLogin(val)
  },
)

const orderTypes = [
  { type: 1, text: '待付款', icon: 'icon-a-daifukuan_huaban1' },
  { type: 2, text: '待收货', icon: 'icon-daishouhuo' },
  { type: 3, text: '待评价', icon: 'icon-shinshopdaipingjia' },
  { type: 4, text: '退换/售后', icon: 'icon-tuikuanshouhou' },
  { type: 5, text: '全部订单', icon: 'icon-dingdan2' },
]

/**
 * 推荐商品
 */
// 组件实例
const cardList = ref<CardListInstance>()
// 滚动触底刷新
const onScrolltolower = () => {
  cardList.value?.loadData()
}
</script>

<template>
  <scroll-view class="viewport" scroll-y enable-back-to-top @scrolltolower="onScrolltolower">
    <!-- 个人资料 -->
    <view class="profile" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
      <!-- 情况1：已登录 -->
      <view class="overview" v-if="userInfo">
        <navigator url="/pageSubs/profile/index" hover-class="none">
          <image class="avatar" mode="aspectFill" :src="userInfo.avatar"></image>
        </navigator>
        <view class="meta">
          <view class="nickname"> {{ userInfo?.nickname }} </view>
          <navigator class="extra" url="/pageSubs/profile/index" hover-class="none">
            <text class="update">账号名：{{ userInfo.account }}</text>
          </navigator>
        </view>
      </view>
      <!-- 情况2：未登录 -->
      <view class="overview" v-else>
        <navigator url="/pages/login/login" hover-class="none">
          <image class="avatar gray" mode="aspectFill" src="/static/logo1.png"></image>
        </navigator>
        <view class="meta">
          <navigator url="/pages/login/login" hover-class="none" class="nickname"> 未登录 </navigator>
          <view class="extra">
            <text class="tips">点击登录账号</text>
          </view>
        </view>
      </view>
      <navigator class="settings" url="/pageSubs/setting/index" hover-class="none"> 设置 </navigator>
    </view>
    <!-- 我的订单 -->
    <view class="orders">
      <view class="like">
        <view>商品收藏 <text class="fold7">112</text></view>
        <view>店铺收藏 <text class="fold7">26</text></view>
        <view>我的足迹 <text class="fold7">200</text></view>
      </view>
      <view class="section">
        <view class="item flex-column" v-for="item in orderTypes" :key="item.type">
          <span :class="['iconfont', item.icon]"></span>
          <text class="fold7">{{ item.text }}</text>
        </view>
      </view>
    </view>
    <!-- 推荐 -->
    <view class="similar">
      <WeizTitle title="推荐" />
      <view class="content mt20">
        <WeizCardList ref="cardList" />
      </view>
    </view>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  background: $uni-bg-color-grey;
}

.viewport {
  height: 100%;
}

/* 用户信息 */
.profile {
  background: linear-gradient(to bottom, $uni-color-main 100%, $uni-bg-color-grey);
  padding-bottom: 60rpx;
  position: relative;

  .overview {
    display: flex;
    height: 120rpx;
    padding: 0 36rpx;
    color: #fff;
  }

  .avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .gray {
    filter: grayscale(100%);
  }

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 30rpx;
    padding: 16rpx 0;
    margin-left: $uni-margin-frame;
  }

  .nickname {
    max-width: 350rpx;
    margin-bottom: 16rpx;
    font-size: 30rpx;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .extra {
    display: flex;
    font-size: 20rpx;
  }

  .tips {
    font-size: 22rpx;
  }

  .update {
    padding: 3rpx 10rpx 1rpx;
    color: rgba(255, 255, 255, 0.8);
    border: 1rpx solid rgba(255, 255, 255, 0.8);
    margin-right: 10rpx;
    border-radius: 30rpx;
  }

  .settings {
    position: absolute;
    bottom: 60rpx;
    right: 40rpx;
    font-size: 30rpx;
    color: #fff;
  }
}

/* 我的订单 */
.orders {
  position: relative;
  z-index: 99;
  margin: 30rpx $uni-margin-frame 0;
  border-radius: $uni-margin-frame;
  box-shadow: 2rpx 10rpx 10rpx rgba(240, 240, 240, 0.6);
  background-color: #fff;
  overflow: hidden;
  .like {
    padding: 20rpx 60rpx;
    display: flex;
    justify-content: space-between;
    font-size: 24rpx;
    border-bottom: solid 1px $uni-line-color;
  }
  .section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40rpx 0 20rpx;
    .item {
      width: 20%;
      align-items: center;
      font-size: 24rpx;
      .iconfont {
        font-size: 50rpx;
        margin-bottom: $uni-margin-frame;
        color: $uni-color-main;
      }
    }
  }
}

/* 推荐 */
.similar {
  margin-top: $uni-margin-frame;
}
</style>
