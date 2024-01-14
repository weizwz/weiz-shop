<script setup lang="ts">
import type { stringBoolean } from '@/types/global'
import CustomNavbar from './components/CustomNavbar.vue'
import SearchHot from './components/SearchHot.vue'
import { useSearchStore } from '@/stores'
import { onMounted, ref, watch } from 'vue'
import { getWantSearchAPI } from '@/api/search'

const searchStore = useSearchStore()
let historyKeys = ref<string[]>([])
let wantSearchKeys = ref<string[]>([])

// uniapp获取url传参
defineProps<{
  search: stringBoolean
  searchKey: string
}>()

// 获取搜索历史
const getSearchHistory = () => {
  historyKeys.value = searchStore.getSearchInfoKey()
}
// 清除
const clearSearchKey = () => {
  searchStore.clearSearchInfoKey()
}
// 猜你想搜
const getWantSearch = async () => {
  const res = await getWantSearchAPI()
  wantSearchKeys.value = res.result
}

onMounted(() => {
  getSearchHistory()
  getWantSearch()
})

watch(
  () => searchStore.state.searchKey,
  (val) => {
    historyKeys.value = val
  },
)
</script>

<template>
  <view class="search">
    <CustomNavbar :search="search" :searchKey="searchKey" />
    <scroll-view class="scroll-view" :scroll-y="true">
      <view class="scroll-content">
        <view class="search-history">
          <view class="search-history-title-wrapper">
            <text class="search-history-title">搜索历史</text>
            <uni-icons type="trash" size="16" @tap="clearSearchKey"></uni-icons>
          </view>
          <view class="search-history-key">
            <view class="search-history-key-item" v-for="(item, index) in historyKeys" :key="index">
              <view class="search-history-key-txt">{{ item }}</view>
            </view>
          </view>
        </view>
        <view class="search-history">
          <view class="search-history-title-wrapper">
            <text class="search-history-title">猜你想搜</text>
            <uni-icons type="reload" size="16" @tap="getWantSearch"></uni-icons>
          </view>
          <view class="search-history-key">
            <view class="search-history-key-item" v-for="(item, index) in wantSearchKeys" :key="index">
              <view class="search-history-key-txt">{{ item }}</view>
            </view>
          </view>
        </view>
        <SearchHot />
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}
.search {
  height: 100%;
  display: flex;
  flex-direction: column;
  .scroll-view {
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    .scroll-content {
      padding: $uni-margin-frame;
    }
    .search-history:nth-child(2) {
      margin-bottom: 20rpx;
    }
    .search-history-title-wrapper {
      height: 48rpx;
      line-height: 48rpx;
      display: flex;
      align-items: center;
      margin-bottom: 20rpx;
      .search-history-title {
        font-size: 32rpx;
        font-weight: 600;
        margin-right: $uni-margin-frame;
      }
    }
    .search-history-key {
      display: flex;
      flex-wrap: wrap;
      .search-history-key-item {
        height: 42rpx;
        line-height: 42rpx;
        padding: 6rpx 20rpx;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        background: #f2f2f2;
        border-radius: 42rpx;
        font-size: 24rpx;
      }
    }
  }
}
.uni-easyinput {
  height: 100%;
  margin-right: $uni-margin-frame;
  .uni-easyinput__content {
    height: 100%;
    background: #f2f2f2 !important;
    border-radius: 64rpx;
    .weiz-btn.weiz-btn-search {
      margin-right: 10rpx;
    }
  }
}
</style>
