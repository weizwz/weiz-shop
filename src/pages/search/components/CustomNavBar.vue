<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navData } from '@/utils/navData'

const navBarData = navData()
const searchValue = ref<string>('')
const searchFocus = ref<boolean>(false)

const props = defineProps<{
  search: stringBoolean
  searchKey: string
}>()

const init = () => {
  if (props.search === '1') {
    searchValue.value = props.searchKey
  } else {
    searchFocus.value = true
  }
}
onMounted(() => {
  init()
})

const toBack = () => {
  uni.navigateBack({
    delta: 1,
    animationType: 'slide-out-right',
    animationDuration: 1000,
  })
}
const searchHandle = () => {
  console.log('开始搜索')
}
const searchBtnHandle = () => {
  if (searchValue.value === '') {
    searchValue.value = props.searchKey
  }
  searchFocus.value = false
  searchHandle()
}
const clearSearchHandle = () => {}
</script>

<template>
  <view class="navbar" :style="{ paddingTop: navBarData.top + 'px', height: navBarData.height + 'px' }">
    <!-- 返回按钮 -->
    <view class="search-back" @tap="toBack">
      <uni-icons type="left" size="24"></uni-icons>
    </view>
    <!-- 搜索条 -->
    <uni-easyinput
      class="search-wrapper"
      :style="{ height: navBarData.height + 'px', lineHeight: navBarData.height + 'px' }"
      radius="64"
      :placeholder="searchKey"
      placeholderStyle="color: #9a9a9a; font-size: 28rpx;"
      :inputBorder="false"
      primaryColor="#c0c4cc"
      trim="both"
      clearButton="auto"
      cancelButton="none"
      v-model="searchValue"
      :focus="searchFocus"
      @confirm="searchHandle"
      @clear="clearSearchHandle"
    >
      <template #right>
        <button
          @tap="searchBtnHandle"
          size="mini"
          type="default"
          class="weiz-btn weiz-btn-search"
          :style="{ height: navBarData.height - 8 + 'px', lineHeight: navBarData.height - 8 + 'px' }"
        >
          搜索
        </button>
      </template>
    </uni-easyinput>
    <view class="navbar-space" :style="{ width: navBarData.width + navBarData.marginRight + 'px' }"></view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  padding: 20px 0 10px;
  position: relative;
  height: 64rpx;
  display: flex;
  align-items: center;
  z-index: 1;
  .search-back {
    width: 60rpx;
    padding-left: $uni-margin-frame;
    height: 100%;
    display: flex;
    align-items: center;
    just-content: center;
  }
  .search-wrapper {
    flex: 1;
  }
  .navbar-space {
    width: 0;
  }
}
.search-txt-content {
  height: 100%;
}
.search-txt-item {
  height: auto !important;
}
</style>
