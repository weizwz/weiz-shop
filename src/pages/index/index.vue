<script setup lang="ts">
import { ref } from 'vue'
// 生命周期 https://uniapp.dcloud.net.cn/tutorial/page.html#onload
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { navData } from '@/utils/navData'
import { getBannerAPI } from '@/api/banner'
import { getCategoryIndexAPI, getHotIndexAPI } from '@/api/category'
import type { BannerItem, CategoryItem, HotPanelItem, HotPcitureItem } from '@/types/api'
import type { stringKey } from '@/types/global'

import img_index_1 from '@/static/images/banner/index/1.png'
import img_index_2 from '@/static/images/banner/index/2.png'
import img_index_3 from '@/static/images/banner/index/3.png'

import img_hot_1 from '@/static/images/card/category/1.png'
import img_hot_2 from '@/static/images/card/category/2.png'
import img_hot_3 from '@/static/images/card/category/3.png'
import img_hot_4 from '@/static/images/card/category/4.png'
import img_hot_5 from '@/static/images/card/category/5.png'
import img_hot_6 from '@/static/images/card/category/6.png'
import img_hot_7 from '@/static/images/card/category/7.png'
import img_hot_8 from '@/static/images/card/category/8.png'
import img_hot_9 from '@/static/images/card/category/9.png'
import img_hot_10 from '@/static/images/card/category/10.png'

const imgs: stringKey = {
  img_index_1,
  img_index_2,
  img_index_3,
  img_hot_1,
  img_hot_2,
  img_hot_3,
  img_hot_4,
  img_hot_5,
  img_hot_6,
  img_hot_7,
  img_hot_8,
  img_hot_9,
  img_hot_10,
}
// 导航
const navBarData = navData()

// 轮播图 或者 ref([] as BannerItem[])
const bannerList = ref<BannerItem[]>([])
const getBannerList = async () => {
  const res = await getBannerAPI('index')
  const { result } = res

  result.map((item) => {
    bannerList.value.push({
      id: item.id,
      url: item.url,
      imgUrl: imgs['img_' + item.imgUrl],
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
  const newHotList: HotPanelItem<HotPcitureItem>[] = []
  const { result } = res
  result.map((item) => {
    const pictureData: HotPcitureItem[] = item.picture
    let picture: HotPcitureItem[] = []
    pictureData.map((temp) => {
      picture.push({
        ...temp,
        src: imgs['img_hot_' + temp.src],
      })
    })
    newHotList.push({
      id: item.id,
      type: item.type,
      title: item.title,
      desc: item.desc,
      picture: picture,
    })
  })
  hotList.value = newHotList
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
      <WeizCarousel :list="bannerList" :dotBottom="64" />
      <WeizCategory :list="categoryList" />
      <WeizHotPanel :list="hotList" />
      <WeizCardList />
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
