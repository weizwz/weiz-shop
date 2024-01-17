<script setup lang="ts">
import { ref } from 'vue'
import { postLoginAPI, postLoginWxMinAPI, postLoginWxMinSimpleAPI } from '@/api/login'
import { useUserStore } from '@/stores'
import type { LoginParams, LoginResult } from '@/types/global'
import { onLoad } from '@dcloudio/uni-app'
import type { UniFormsInstance } from '@uni-helper/uni-ui-types'

//#ifdef MP-WEIXIN
// 获取 code 登录凭证
let code = ''
onLoad(async () => {
  const res = await wx.login()
  code = res.code
})
// 获取用户手机号码
const onGetphonenumber: UniHelper.ButtonOnGetphonenumber = async (ev) => {
  // 获取参数
  const encryptedData = ev.detail.encryptedData!
  const iv = ev.detail.iv!
  // 登录请求
  const res = await postLoginWxMinAPI({ code, encryptedData, iv })
  loginSuccess(res.result)
}
// 模拟手机号码快捷登录（开发练习）
const onGetphonenumberSimple = async () => {
  const res = await postLoginWxMinSimpleAPI('13998672369')
  loginSuccess(res.result)
}
//#endif

// 登录成功封装
const loginSuccess = (profile: LoginResult) => {
  // 保存用户信息
  const userStore = useUserStore()
  userStore.setUserInfo(profile)
  // 成功提示
  uni.showToast({ icon: 'success', title: '登录成功' })
  setTimeout(() => {
    // 页面跳转
    uni.switchTab({ url: '/pages/my/index' })
  }, 500)
}
// 登录表单
const formRole = ref<UniFormsInstance>()
const rules = ref<UniHelper.UniFormsRules>({
  account: {
    rules: [
      { required: true, errorMessage: '请输入用户名/手机号码' },
      {
        validateFunction: (rule, value, data, callback) => {
          if (value.length < 5 || value.length > 11) {
            callback('账号长度只能在5-11个字符之间')
          }
          return true
        },
      },
    ],
  },
  password: {
    rules: [
      { required: true, errorMessage: '请输入密码' },
      { required: true, errorMessage: '请输入密码' },
    ],
  },
})
const logoForm = ref<LoginParams>({
  account: '',
  password: '',
})

const submitForm = async () => {
  try {
    await formRole.value?.validate?.()
    const res = await postLoginAPI(logoForm.value)
    loginSuccess(res.result)
  } catch (error) {
    // uni.showToast({ icon: 'none', title: '登录失败，请重试' })
  }
}
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image mode="aspectFit" class="logo-img" src="@/static/logo1.png" alt="味值商城"></image>
    </view>
    <view class="login">
      <!-- 网页端表单登录 -->
      <uni-forms ref="formRole" :modelValue="logoForm" :rules="rules">
        <uni-forms-item label="" name="account">
          <uni-easyinput
            prefixIcon="person"
            v-model="logoForm.account"
            trim="both"
            placeholder="请输入用户名/手机号码"
          />
        </uni-forms-item>
        <uni-forms-item label="" name="password">
          <uni-easyinput
            prefixIcon="locked"
            v-model="logoForm.password"
            trim="both"
            type="password"
            placeholder="请输入密码"
          />
        </uni-forms-item>
      </uni-forms>
      <button class="button phone" @tap="submitForm">登录</button>

      <!-- 小程序端授权登录 -->
      //#ifdef MP-WEIXIN
      <button class="button phone icon-phone" open-type="getPhoneNumber" @getphonenumber="onGetphonenumber">
        手机号快捷登录
      </button>
      <view class="extra">
        <view class="caption">
          <view class="txt">其他登录方式</view>
        </view>
        <view class="options">
          <!-- 通用模拟登录 -->
          <button class="icon" type="default" @tap="onGetphonenumberSimple">模拟快捷登录</button>
        </view>
      </view>
      //#endif
      <view class="tips">登录/注册即视为你同意《服务条款》和《味值商城隐私协议》</view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
  box-sizing: border-box;
}

.logo {
  flex: 1;
  text-align: center;
  .logo-img {
    width: 220rpx;
    height: 220rpx;
    margin-top: 10vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;
  width: calc(100% - 40rpx);
  .is-input-border {
    border-radius: 80rpx;
    margin-bottom: 20rpx;
  }
  input {
    height: 80rpx;
    font-size: 28rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;
    margin-bottom: 40rpx;
    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: $uni-color-main;
  }

  .icon-phone {
    background-color: $uni-color-success;
  }

  .wechat {
    background-color: $uni-color-main;
  }

  .extra {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 120rpx;
    .caption {
      width: 440rpx;
      line-height: 1;
      border-top: 1rpx solid #ddd;
      font-size: 26rpx;
      color: #999;
      position: relative;
      .txt {
        position: absolute;
        top: -15rpx;
        width: 40%;
        left: 30%;
        text-align: center;
        background: #fff;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;
      .icon {
        border-radius: 50rpx;
        &::after {
          display: none;
        }
      }
    }

    .icon {
      font-size: 24rpx;
      color: #444;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }
    .icon-weixin::before {
      border-color: $uni-color-main;
      color: $uni-color-main;
    }
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #999;
  text-align: center;
}
</style>
