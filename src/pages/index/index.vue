<script setup lang="ts">
import { ref } from 'vue'
// 生命周期 https://uniapp.dcloud.net.cn/tutorial/page.html#onload
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getBannerAPI } from '@/api/banner'
import { getCategoryIndexAPI, getHotIndexAPI } from '@/api/category'
import type { BannerItem, CategoryItem, HotPanelItem, HotPcitureItem } from '@/types/api'

// 轮播图 或者 ref([] as BannerItem[])
const bannerList = ref<BannerItem[]>([])
const getBannerList = async () => {
  const res = await getBannerAPI('index')
  const { result } = res
  // 处理后台数据
  result.map((item) => {
    bannerList.value.push({
      id: item.id,
      url: item.url,
      imgUrl: `@/static/images/banner/index/${item.imgUrl}.png`,
    })
  })
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

onLoad(() => {
  getBannerList()
  getCategoryList()
  getHotList()
})

// 下拉刷新
const onRefresherrefresh = () => {
  console.log('下拉刷新了')
}
// 滚动触底刷新
const onScrolltolower = () => {
  console.log('滚动到底了')
}
</script>

<template>
  <view class="index">
    <CustomNavbar />
    <scroll-view
      refresher-enabled
      @refresherrefresh="onRefresherrefresh"
      @scrolltolower="onScrolltolower"
      class="scroll-view"
      :scroll-y="true"
    >
      <WeizCarousel :list="bannerList" :dotBottom="24" />
      <WeizCategory :list="categoryList" />
      <WeizHotPanel :list="hotList" />
      <WeizCardList />·
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
