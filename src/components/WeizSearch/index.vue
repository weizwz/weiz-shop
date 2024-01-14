<script setup lang="ts">
import { getSearchTxtAPI } from '@/api/search'
import { onMounted, ref } from 'vue'
import { SearchTo } from '@/utils/search'

const currentSearchKey = ref<string>('')

const changeSearchKey: UniHelper.SwiperOnChange = (event) => {
  const currentIdx: number = event.detail.current
  currentSearchKey.value = searchTxt.value[currentIdx]
}
const toSearch = (searchKey: string) => {
  SearchTo(searchKey, false)
}
const toSearchAndSearch = () => {
  SearchTo(currentSearchKey.value, true)
}

onMounted(() => {
  getSearchTxt()
})

// 默认一次返回10组文字
const searchTxt = ref<string[]>([])
const getSearchTxt = async () => {
  const res = await getSearchTxtAPI()
  searchTxt.value = res.result
  currentSearchKey.value = searchTxt.value[0]
}

defineProps<{
  height: number
  theme?: string
}>()
</script>

<template>
  <view :class="['search', theme]" :style="{ height: height + 'px', lineHeight: height + 'px' }">
    <span class="iconfont icon-sousuo"></span>
    <view class="search-txt-wrapper" :style="{ height: height + 'px' }">
      <swiper
        class="search-txt-content"
        :vertical="true"
        :circular="true"
        :autoplay="true"
        :interval="3000"
        :duration="1000"
        @change="changeSearchKey"
      >
        <swiper-item class="search-txt-item" v-for="(item, index) in searchTxt" :key="index" @click="toSearch(item)">
          <view class="search-txt" :style="{ height: height + 'px', lineHeight: height + 'px' }">{{ item }}</view>
        </swiper-item>
      </swiper>
    </view>

    <button
      @tap="toSearchAndSearch"
      size="mini"
      type="default"
      class="weiz-btn weiz-btn-search"
      :style="{ height: height - 6 + 'px', lineHeight: height - 6 + 'px' }"
    >
      搜索
    </button>
  </view>
</template>

<style lang="scss">
.search {
  width: 100%;
  height: 64rpx;
  line-height: 64rpx;
  box-sizing: border-box;
  border-radius: 100rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  margin-right: 20rpx;
  color: #fff;
  background: rgba(255, 255, 255, 0.3);
  .search-txt-wrapper {
    flex: 1;
    margin-left: 10rpx;
    height: 100%;
    overflow: hidden;
    .search-txt-content {
      .search-txt {
        width: 100%;
        height: 64rpx;
        line-height: 64rpx;
        font-size: 28rpx;
        font-weight: 400;
      }
    }
  }
  &.white {
    color: inherit;
    background: #f6f6f6;
  }
}
.search-txt-content {
  height: 100%;
}
.search-txt-item {
  height: auto !important;
}
</style>
