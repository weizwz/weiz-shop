<script setup lang="ts">
import { useUserStore } from '@/stores'

const userStore = useUserStore()
if (!userStore.userInfo) {
  uni.redirectTo({
    url: '/pages/login/index',
  })
}
</script>

<template>
  <view class="">
    <view>用户信息： {{ userStore.userInfo }}</view>
    <button size="mini" plain type="primary">保存用户信息</button>
    <button @tap="userStore.clearUserInfo()" size="mini" plain type="primary">清理用户信息</button>
  </view>
</template>

<style lang="scss"></style>
