<script setup lang="ts">
import { ref } from 'vue'
// 生命周期 https://uniapp.dcloud.net.cn/tutorial/page.html#onload
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getBannerAPI } from '@/api/banner'
import { getCategoryIndexAPI, getHotIndexAPI } from '@/api/category'
import type { BannerItem, CategoryItem, HotPanelItem, HotPcitureItem } from '@/types/api'
import type { CardListInstance } from '@/types/components'

// 轮播图 或者 ref([] as BannerItem[])
const bannerList = ref<BannerItem[]>([])
const getBannerList = async () => {
  const res = await getBannerAPI('index')
  bannerList.value = res.result
}
// 分类
const categoryList = ref<CategoryItem[]>([])
const getCategoryList = async () => {
  const res = await getCategoryIndexAPI()
  categoryList.value = res.result
}
// 热门推荐
const hotList = ref<HotPanelItem<HotPcitureItem>[]>([])
const getHotList = async () => {
  const res = await getHotIndexAPI()
  hotList.value = res.result
}

// 初始化数据
const init = () => {
  getBannerList()
  getCategoryList()
  getHotList()
}

onLoad(() => {
  init()
})

// 组件实例
const cardList = ref<CardListInstance>()

// 下拉刷新动画
const refreshering = ref(false)
// 下拉刷新
const onRefresherrefresh = async () => {
  // 开始动画
  refreshering.value = true
  cardList.value?.resetData()
  await Promise.all([getBannerList(), getCategoryList(), getHotList(), cardList.value?.loadData()])
  // 结束动画
  refreshering.value = false
}
// 滚动触底刷新
const onScrolltolower = () => {
  cardList.value?.loadData()
}
</script>

<template>
  <view class="index">
    <CustomNavbar />
    <scroll-view
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      @scrolltolower="onScrolltolower"
      :refresher-triggered="refreshering"
      class="scroll-view"
      :scroll-y="true"
    >
      <WeizCarousel :list="bannerList" :dotBottom="24" />
      <WeizCategory :list="categoryList" />
      <WeizHotPanel :list="hotList" />
      <WeizCardList ref="cardList" />
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background: #f7f7f7;
  height: 100%;
  overflow: hidden;
}
.index {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
