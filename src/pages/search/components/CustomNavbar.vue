<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { navData } from '@/utils/navData'
import { useSearchStore } from '@/stores'
import type { stringBoolean } from '@/types/global'

const searchStore = useSearchStore()
const navBarData = navData()
const searchValue = ref<string>('')
const searchFocus = ref<boolean>(false)

const props = defineProps<{
  search: stringBoolean
  searchKey: string
}>()
// 页面初始化
const init = () => {
  if (props.search === '1') {
    searchValue.value = props.searchKey
    searchHandle()
  } else {
    searchFocus.value = true
  }
}
onMounted(() => {
  init()
})
// 返回上个页面
const toBack = () => {
  uni.navigateBack({
    delta: 1,
    animationType: 'slide-out-right',
    animationDuration: 300,
  })
}
const searchHandle = () => {
  // 保存搜索词
  searchStore.setSearchInfoKey(searchValue.value)
  console.log('开始搜索')
}
// 搜索按钮
const searchBtnHandle = () => {
  if (searchValue.value === '') {
    searchValue.value = props.searchKey
  }
  searchFocus.value = false
  searchHandle()
}
// 清理搜索
const clearSearchHandle = () => {}
</script>

<template>
  <view class="navbar" :style="{ paddingTop: navBarData.top + 'px', height: navBarData.height + 'px' }">
    <!-- 返回按钮 -->
    <view class="search-back" @tap="toBack">
      <uni-icons type="left" size="24" color="#fff"></uni-icons>
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
          :style="{ height: navBarData.height - 6 + 'px', lineHeight: navBarData.height - 6 + 'px' }"
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
  background: $uni-color-main;
  .search-back {
    width: 60rpx;
    padding-left: $uni-margin-frame;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
