<script setup lang="ts">
import { useCartsStore } from '@/stores'
import type { CartItem } from '@/types/global'
import { onMounted } from 'vue'
import { computed, ref, watch } from 'vue'
const useCarts = useCartsStore()
const cartsList = computed(() => useCarts.carts)

const delCartItem = (id: string) => {
  useCarts.delCarts(id)
  uni.showToast({ icon: 'success', title: '已删除' })
}
/**
 * 计算价格和数量
 */
let allMoney = ref<string>('')
let allNum = ref<number>(0)
const all = (data: CartItem[]) => {
  let add = 0
  let num = 0
  for (const item of data) {
    add += Number(item.specification.price) * item.number
    num += item.number
  }
  return {
    add: add.toFixed(2),
    num,
  }
}
const comAll = (data: CartItem[]) => {
  const { add, num } = all(data)
  allMoney.value = add
  allNum.value = num
}

/**
 * 选中/取消，全选/全取消
 */
const checkAllStatus = ref<boolean>(true)
const changeChecked = (item: CartItem) => {
  item.checked = !item.checked
}
const checkAll = (data: CartItem[]) => {
  let _status = true
  for (const item of data) {
    if (item.checked === false) {
      _status = false
      break
    }
  }
  checkAllStatus.value = _status
}
const changeCheckedAll = () => {
  checkAllStatus.value = !checkAllStatus.value
  for (const item of cartsList.value) {
    item.checked = checkAllStatus.value
  }
}

// 初始化，监听
onMounted(() => {
  comAll(cartsList.value)
  checkAll(cartsList.value)
})

watch(
  () => useCarts.carts,
  (val) => {
    comAll(val)
    checkAll(val)
  },
  //深度监听
  { deep: true },
)
</script>

<template>
  <scroll-view scroll-y class="scroll-view">
    <!-- 已登录: 显示购物车 -->
    <template v-if="true">
      <!-- 购物车列表 -->
      <view class="cart-list" v-if="cartsList.length > 0">
        <!-- 优惠提示 -->
        <view class="tips">
          <text class="label">满减</text>
          <text class="desc">满2件, 即可享受9折优惠</text>
        </view>
        <!-- 滑动操作分区 -->
        <uni-swipe-action>
          <!-- 滑动操作项 -->
          <uni-swipe-action-item v-for="item in cartsList" :key="item.id" class="cart-swipe">
            <!-- 商品信息 -->
            <view class="goods">
              <!-- 选中状态 -->
              <view class="checkbox" :class="{ checked: item.checked }" @tap="changeChecked(item)"></view>
              <navigator :url="`/pages/goods/index?id=${item.id}`" hover-class="none" class="navigator">
                <image mode="aspectFill" class="picture" :src="item.specification.image_url"></image>
                <view class="meta">
                  <view class="name ellipsis">{{ item.name }}</view>
                  <view class="attrsText ellipsis">{{ item.specification.name }}</view>
                  <view class="price">{{ item.specification.price }}</view>
                </view>
              </navigator>
              <!-- 商品数量 -->
              <view class="count">
                <uni-number-box v-model="item.number" :min="item.minNum" :max="item.maxNum" />
              </view>
            </view>
            <!-- 右侧删除按钮 -->
            <template v-slot:right>
              <view class="cart-swipe-right">
                <button class="button delete-button" @tap="delCartItem(`${item.id}`)">删除</button>
              </view>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <!-- 购物车空状态 -->
      <view class="cart-blank" v-else>
        <text class="text">购物车还是空的，快来挑选好货吧</text>
        <navigator open-type="switchTab" url="/pages/index/index" hover-class="none">
          <button class="button">去首页看看</button>
        </navigator>
      </view>
      <!-- 吸底工具栏 -->
      <view class="toolbar" v-if="cartsList.length > 0">
        <view class="checkbox all" :class="{ checked: checkAllStatus }" @tap="changeCheckedAll"></view>
        <text class="text">合计:</text>
        <text class="amount">{{ allMoney }}</text>
        <view class="button-grounp">
          <view class="button payment-button" :class="{ disabled: false }"> 去结算({{ allNum }}) </view>
        </view>
      </view>
    </template>
    <!-- 未登录: 提示登录 -->
    <view class="login-blank" v-else>
      <text class="text">登录后可查看购物车中的商品</text>
      <navigator url="/pages/login/login" hover-class="none">
        <button class="button">去登录</button>
      </navigator>
    </view>
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef"></XtxGuess>
    <!-- 底部占位空盒子 -->
    <view class="toolbar-height"></view>
  </scroll-view>
</template>

<style lang="scss">
// 根元素
:host {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f7f7f8;
}

// 滚动容器
.scroll-view {
  flex: 1;

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40rpx;
    height: 40rpx;
    position: relative;
    margin-right: 20rpx;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 30rpx;
      height: 30rpx;
      border: solid 5rpx $uni-color-main;
      border-radius: 50%;
    }

    &.checked::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '✓';
      width: 30rpx;
      height: 30rpx;
      line-height: 30rpx;
      font-size: 28rpx;
      text-align: center;
      color: #fff;
      border-radius: 50%;
      background: $uni-color-main;
    }
  }
}

// 购物车列表
.cart-list {
  padding: 0 $uni-margin-frame;
  // 优惠提示
  .tips {
    display: flex;
    align-items: center;
    line-height: 1;
    margin: $uni-margin-frame;
    font-size: 26rpx;
    color: #666;

    .label {
      color: #fff;
      padding: 7rpx 15rpx;
      border-radius: 4rpx;
      font-size: 24rpx;
      background-color: $uni-color-main;
      margin-right: $uni-margin-frame;
    }
  }
  .uni-swipe {
    border-radius: $uni-margin-frame;
    overflow: hidden;
  }
  // 购物车商品
  .goods {
    display: flex;
    align-items: center;
    padding: $uni-margin-frame;
    background-color: #fff;
    position: relative;

    .navigator {
      display: flex;
    }

    .picture {
      width: 170rpx;
      height: 170rpx;
      border-radius: $uni-margin-frame;
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: $uni-margin-frame;
    }

    .name {
      height: 72rpx;
      font-size: 26rpx;
      color: #444;
    }

    .attrsText {
      line-height: 1.8;
      padding: 0 15rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #888;
      background-color: #f7f7f8;
    }

    .price {
      line-height: 1;
      font-size: 26rpx;
      color: #444;
      margin-bottom: 2rpx;
      color: $uni-text-color-price;

      &::before {
        content: '￥';
        font-size: 80%;
      }
    }

    // 商品数量
    .count {
      position: absolute;
      bottom: $uni-margin-frame;
      right: $uni-margin-frame;
    }
  }

  .cart-swipe {
    display: block;
    margin: 20rpx 0;
  }

  .cart-swipe-right {
    display: flex;
    height: 100%;
    margin-left: 1rpx;

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      padding: 6px;
      line-height: 1.5;
      color: #fff;
      font-size: 26rpx;
      border-radius: 0;
    }

    .delete-button {
      background-color: $uni-color-error;
    }
  }
}

// 空状态
.cart-blank,
.login-blank {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  .image {
    width: 400rpx;
    height: 281rpx;
  }
  .text {
    color: #444;
    font-size: 26rpx;
    margin: 20rpx 0;
  }
  .button {
    width: 240rpx !important;
    height: 60rpx;
    line-height: 60rpx;
    margin-top: 20rpx;
    font-size: 26rpx;
    border-radius: 60rpx;
    color: #fff;
    background-color: $uni-color-main;
  }
}

// 吸底工具栏
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: var(--window-bottom);
  z-index: 1;

  height: 100rpx;
  padding: 0 20rpx;
  display: flex;
  align-items: center;
  border-top: 1rpx solid #ededed;
  border-bottom: 1rpx solid #ededed;
  background-color: #fff;
  box-sizing: content-box;

  .all {
    position: relative;
    height: 40rpx;
    margin-left: 25rpx;
    font-size: 14px;
    color: #444;
    display: flex;
    align-items: center;
  }

  .text {
    margin-right: 8rpx;
    margin-left: 32rpx;
    color: #444;
    font-size: 14px;
  }

  .amount {
    font-size: 20px;
    color: $uni-text-color-price;

    .decimal {
      font-size: 12px;
    }

    &::before {
      content: '￥';
      font-size: 12px;
    }
  }

  .button-grounp {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 72rpx;
    font-size: 13px;
    color: #fff;

    .button {
      width: 240rpx;
      margin: 0 10rpx;
      border-radius: 72rpx;
    }

    .payment-button {
      background-color: $uni-color-main;

      &.disabled {
        opacity: 0.6;
      }
    }
  }
}
// 底部占位空盒子
.toolbar-height {
  height: 100rpx;
}
</style>
