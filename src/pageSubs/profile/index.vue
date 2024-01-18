<script setup lang="ts">
import type { Gender, LoginResult } from '@/types/global'
import type { UniFormsInstance } from '@uni-helper/uni-ui-types'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
const userStore = useUserStore()

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 信息表单
const formRole = ref<UniFormsInstance>()
const rules = ref<UniHelper.UniFormsRules>({
  nickname: {
    rules: [
      { required: true, errorMessage: '请输入昵称' },
      {
        validateFunction: (rule, value, data, callback) => {
          if (value.length < 4 || value.length > 20) {
            callback('账号长度只能在4-20个字符之间')
          }
          return true
        },
      },
    ],
  },
  gender: {
    rules: [{ required: true, errorMessage: '请选择性别' }],
  },
  birthday: {
    rules: [{ required: true, errorMessage: '请选择生日' }],
  },
  mobile: {
    rules: [{ required: true, errorMessage: '请输入电话' }],
  },
})
const userForm = ref<LoginResult>(userStore.userInfo as LoginResult)
const genders = ref<Gender[]>([
  {
    text: '男',
    value: '001',
  },
  {
    text: '女',
    value: '002',
  },
  {
    text: '保密',
    value: '003',
  },
])

const submitForm = async () => {
  try {
    await formRole.value?.validate?.()
    userStore.setUserInfo(userForm.value)
    // 调用接口保存
    // 成功提示
    uni.showToast({ icon: 'success', title: '保存成功' })
    setTimeout(() => {
      // 页面跳转
      uni.switchTab({ url: '/pages/my/index' })
    }, 500)
  } catch (error) {
    // uni.showToast({ icon: 'none', title: '保存失败，请重试' })
  }
}
// 头像
const changeAvatar = () => {
  // 调用拍照/选择图片
  uni.chooseMedia({
    // 文件个数
    count: 1,
    // 文件类型
    mediaType: ['image'],
    success: (res) => {
      // 本地路径
      const tempFile = res.tempFiles[0]
      const { tempFilePath, size } = tempFile
      if (size > 1024 * 1024) {
        uni.showToast({ icon: 'none', title: '文件大小请不要大于1M' })
        return
      }

      // 文件上传，当前无接口，在失败里读取本地文件
      uni.uploadFile({
        url: '/upload/avatar',
        name: 'file', // 后端数据字段名
        filePath: tempFilePath, // 新头像
        success: (res) => {
          // 判断状态码是否上传成功
          if (res.statusCode === 200) {
            // 提取头像
            const { avatar } = JSON.parse(res.data).result
            // 当前页面更新头像
            userForm.value!.avatar = avatar
            // 更新 Store 头像
            userStore.userInfo!.avatar = avatar
            uni.showToast({ icon: 'success', title: '更新成功' })
          } else {
            // uni.showToast({ icon: 'fail', title: '更新失败，请重试' })
            userForm.value!.avatar = tempFilePath
            userStore.userInfo!.avatar = tempFilePath
            uni.showToast({ icon: 'success', title: '更新成功' })
          }
        },
      })
    },
  })
}
</script>

<template>
  <view class="viewport">
    <view class="top" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left">
        <uni-icons type="left" size="20" color="#fff"></uni-icons>
      </navigator>
      <view class="title">个人信息</view>
      <!-- 头像 -->
      <view class="avatar">
        <view class="avatar-content" @tap="changeAvatar">
          <image class="image" :src="userForm.avatar" mode="aspectFill" />
          <text class="text">点击修改头像</text>
        </view>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <uni-forms class="content" ref="formRole" :modelValue="userForm" :rules="rules">
        <uni-forms-item label="账号" name="account">
          <uni-easyinput
            v-model="userForm.account"
            trim="both"
            placeholder="请输入用户名/手机号码"
            :clearable="false"
            disabled
          />
        </uni-forms-item>
        <uni-forms-item label="昵称" name="nickname">
          <uni-easyinput v-model="userForm.nickname" trim="both" placeholder="请输入昵称" :clearable="false" />
        </uni-forms-item>
        <uni-forms-item label="性别" name="gender">
          <uni-data-checkbox v-model="userForm.gender" :localdata="genders" />
        </uni-forms-item>
        <uni-forms-item label="生日" name="birthday">
          <uni-datetime-picker type="date" return-type="date" v-model="userForm.birthday" :clear-icon="false" />
        </uni-forms-item>
        <uni-forms-item label="电话" name="mobile">
          <uni-easyinput v-model="userForm.mobile" trim="both" placeholder="请输入电话" :clearable="false" />
        </uni-forms-item>
      </uni-forms>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="submitForm">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  background: $uni-bg-color-grey;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.top {
  position: relative;
  background: linear-gradient(to bottom, $uni-color-main 100%, $uni-bg-color-grey);
  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }
  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #fff;
  margin: 0 $uni-margin-frame;
  padding: $uni-margin-frame * 2;
  border-radius: 0 0 $uni-margin-frame $uni-margin-frame;
  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 0;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: $uni-color-main;
  }
}
</style>
