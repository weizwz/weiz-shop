<script setup lang="ts">
import { useUserStore } from '@/stores'
import { watch } from 'vue'

const userStore = useUserStore()

watch(
  () => userStore?.userInfo?.id,
  (val) => {
    if (!val) {
      uni.redirectTo({
        url: '/pages/login/index',
      })
    }
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
