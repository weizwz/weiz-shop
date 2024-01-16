<script setup lang="ts">
import type { Address } from '@/types/api'
import { onMounted } from 'vue'
import { ref } from 'vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const popupEmit = defineEmits(['close', 'changeAddress'])

const current = ref<Address>()
const addressList = ref<Address[]>([
  { id: '1110', name: '李凡单', phone: '138269874596', address: '西安市雁塔区团结南路129号南窑国际' },
  { id: '1111', name: '王大成', phone: '13985675321', address: '西安市雁塔区团结南路12号' },
  { id: '1112', name: '任陈明', phone: '15169876593', address: '西安市雁塔区团结南路192号' },
  { id: '1113', name: '吴伟', phone: '15196875945', address: '西安市雁塔区团结南路99号高新万达' },
])
const radioChange = (evt: UniHelper.RadioGroupOnChangeEvent) => {
  for (let i = 0; i < addressList.value.length; i++) {
    addressList.value[i].checked = false
    if (addressList.value[i].id === evt.detail.value) {
      addressList.value[i].checked = true
      current.value = addressList.value[i]
      popupEmit('changeAddress', current.value)
    }
  }
}
const closeWindow = () => {
  popupEmit('close')
}
const getCheckAddress = () => {
  for (let i = 0; i < addressList.value.length; i++) {
    if (addressList.value[i].checked) {
      current.value = addressList.value[i]
      break
    }
  }
}
const createAddress = () => {}
// 请求数据
onMounted(() => {
  getCheckAddress()
})
</script>

<template>
  <view class="address-panel flex-column" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <view class="style"></view>
    <view class="close" @tap="closeWindow"><uni-icons type="closeempty" size="18" color="#999"></uni-icons></view>
    <view class="title fold7">配送至</view>
    <scroll-view :scroll-y="true" class="address-list">
      <view v-if="addressList.length <= 0" class="no-address">当前无可用地址，请选择其他收货地址</view>
      <radio-group v-else @change="radioChange">
        <label class="address-label flex" v-for="item in addressList" :key="item.id">
          <view>
            <radio :value="item.id" :checked="item.id === current?.id" color="#18c7ff" />
          </view>
          <view class="address">
            <view class="info">{{ item.name }} {{ item.phone }}</view>
            <view class="item">{{ item.address }}</view>
          </view>
        </label>
      </radio-group>
    </scroll-view>
    <view class="address-new">
      <button @tap="createAddress" size="mini" type="default" class="weiz-btn weiz-btn-search">选择其他收货地址</button>
    </view>
  </view>
</template>

<style lang="scss">
.address-panel {
  position: relative;
  > .style {
    position: absolute;
    top: -$uni-margin-frame;
    width: 100%;
    height: $uni-margin-frame;
    background: #fff;
    border-radius: $uni-margin-frame $uni-margin-frame 0 0;
  }
  > .close {
    position: absolute;
    top: 0;
    right: $uni-margin-frame;
  }
  .title {
    height: 60rpx;
    line-height: 60rpx;
    font-size: 32rpx;
    text-align: center;
  }
  .no-address {
    height: 500rpx;
    line-height: 500rpx;
    font-size: 24rpx;
    text-align: center;
  }
  .address-list {
    max-height: 50vh;
    min-height: 500rpx;
    padding: $uni-margin-frame;
    overflow: hidden;
    .address-label {
      align-items: center;
      font-size: 28rpx;
      line-height: 42rpx;
      margin-bottom: $uni-margin-frame;
      .address {
        margin-left: $uni-margin-frame;
      }
    }
  }
  .address-new {
    text-align: center;
    padding-bottom: $uni-margin-frame;
  }
}
</style>
