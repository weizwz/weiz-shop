<script setup lang="ts">
import { useUserStore } from '@/stores'
import { getUserInfoAPI } from '@/api/user'

const userStore = useUserStore()

const getUserInfo = async () => {
  const res = await getUserInfoAPI({ id: 'weizwz' })
  const { result } = res
  userStore.setUserInfo(result)
}
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
    <button @tap="getUserInfo()" size="mini" plain type="primary">发送请求</button>
  </view>
</template>

<style lang="scss"></style>
