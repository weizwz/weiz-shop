<script setup lang="ts">
import { useUserStore } from '@/stores'

const userStore = useUserStore()
</script>

<template>
  <view class="">
    <view>用户信息： {{ userStore.userInfo }}</view>
    <button
      @tap="
        userStore.setUserInfo({
          userName: 'weizwz',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="userStore.clearUserInfo()" size="mini" plain type="primary">清理用户信息</button>
  </view>
</template>

<style lang="scss"></style>
