<script setup lang="ts">
import type { stringBoolean } from '@/types/global'
import CustomNavbar from './components/CustomNavbar.vue'

// uniapp获取url传参
const query = defineProps<{
  search: stringBoolean
  searchKey: string
}>()
</script>

<template>
  <view class="search">
    <CustomNavbar :search="search" :searchKey="searchKey" />
  </view>
</template>

<style lang="scss">
.search {
  .uni-easyinput {
    height: 100%;
    .uni-easyinput__content {
      height: 100%;
      background: #f2f2f2 !important;
      border-radius: 64rpx;
      .weiz-btn.weiz-btn-search {
        margin-right: 10rpx;
      }
    }
  }
}
</style>
