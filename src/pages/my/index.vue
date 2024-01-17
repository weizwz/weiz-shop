<script setup lang="ts">
import { useUserStore } from '@/stores'
import { goLogin } from '@/utils/login'
import { watch } from 'vue'

const userStore = useUserStore()
goLogin(userStore.userInfo)

watch(
  () => userStore.userInfo,
  (val) => {
    goLogin(val)
  },
)
</script>

<template>
  <view class="">
    <view>用户信息： {{ userStore.userInfo }}</view>
    <button @tap="userStore.clearUserInfo()" size="mini" type="primary">清理用户信息</button>
  </view>
</template>

<style lang="scss"></style>
