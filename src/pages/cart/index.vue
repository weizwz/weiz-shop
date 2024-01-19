<script setup lang="ts">
import { watchLoginStatus } from '@/components/common/login'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
watchLoginStatus()
</script>

<template>
  <view class="">test</view>
</template>

<style lang="scss"></style>
