<script setup lang="ts">
import { ref } from 'vue'
// 生命周期 https://uniapp.dcloud.net.cn/tutorial/page.html#onload
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getBannerAPI } from '@/api/banner'
import { getCategoryIndexAPI, getHotIndexAPI } from '@/api/category'
import type { BannerItem, CategoryItem, HotPanelItem } from '@/types/api'
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
}
// 或者 ref([] as BannerItem[])
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
const hotList = ref<HotPanelItem[]>([])
const getHotList = async () => {
  const res = await getHotIndexAPI()
  const { result } = res
  result.map((item) => {
    hotList.value.push({
      id: item.id,
      title: item.title,
      desc: item.desc,
      picture: [imgs['img_hot_' + item.picture[0]], imgs['img_hot_' + item.picture[1]]],
    })
    console.log(hotList)
  })
}

onLoad(() => {
  getBannerList()
  getCategoryList()
  getHotList()
})
</script>

<template>
  <CustomNavbar />
  <WeizCarousel :list="bannerList" :dotBottom="64" />
  <view class="content">
    <WeizCategory :list="categoryList" />
    <WeizHotPanel :list="hotList" />
  </view>
</template>

<style lang="scss">
page {
  background: #f7f7f7;
}
.content {
  position: relative;
  z-index: 2;
  min-height: 800rpx;
  border-radius: 48rpx 48rpx 0 0;
  background: #f7f7f7;
  margin-top: -48rpx;
}
</style>
