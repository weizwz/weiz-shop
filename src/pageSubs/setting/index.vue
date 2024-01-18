<script setup lang="ts">
import { useUserStore } from '@/stores'
const userStore = useUserStore()

// 退出登录
const onLogout = () => {
  // 模态弹窗
  uni.showModal({
    content: '是否退出登录？',
    success: (res) => {
      if (res.confirm) {
        // 清理用户信息
        userStore.clearUserInfo()
        // 返回上一页
        uni.navigateBack()
      }
    },
  })
}
</script>

<template>
  <view class="viewport">
    <!-- 列表1 -->
    <view class="list" v-if="true">
      <navigator url="/pageSubs/address/index" hover-class="none" class="item flex-between">
        <text>我的收货地址</text>
        <uni-icons type="right" size="14"></uni-icons>
      </navigator>
    </view>
    <!-- 列表2 -->
    <view class="list">
      <button hover-class="none" class="item flex-between" open-type="openSetting">授权管理</button>
      <button hover-class="none" class="item flex-between" open-type="feedback">问题反馈</button>
      <button hover-class="none" class="item flex-between" open-type="contact">联系我们</button>
    </view>
    <!-- 列表3 -->
    <view class="list">
      <navigator hover-class="none" class="item arrow" url=" ">关于味值商城</navigator>
    </view>
    <!-- 操作按钮 -->
    <view class="action">
      <view class="button" @tap="onLogout">退出登录</view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: $uni-bg-color-grey;
}

.viewport {
  padding: 20rpx;
}

/* 列表 */
.list {
  padding: 0 $uni-margin-frame;
  background-color: #fff;
  margin-bottom: $uni-margin-frame;
  border-radius: $uni-margin-frame;
  .item {
    line-height: 90rpx;
    padding-left: 10rpx;
    font-size: 30rpx;
    color: #333;
    border-top: 1rpx solid #ddd;
    position: relative;
    text-align: left;
    border-radius: 0;
    background-color: #fff;
    &::after {
      width: auto;
      height: auto;
      left: auto;
      border: none;
    }
    &:first-child {
      border: none;
    }
    &::after {
      right: 5rpx;
    }
  }
}

/* 操作按钮 */
.action {
  text-align: center;
  line-height: 90rpx;
  margin-top: 40rpx;
  font-size: 32rpx;
  color: #333;
  .button {
    background-color: #fff;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
  }
}
</style>
