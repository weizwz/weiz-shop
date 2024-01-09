<script setup lang="ts">
import { ref } from 'vue'
// 生命周期 https://uniapp.dcloud.net.cn/tutorial/page.html#onload
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getBannerAPI } from '@/api/banner'
import { getCategoryIndexAPI } from '@/api/category'
import type { BannerItem, CategoryItem } from '@/types/api'
import type { stringKey } from '@/types/global'

import img_index_1 from '@/static/images/banner/index/1.png'
import img_index_2 from '@/static/images/banner/index/2.png'
import img_index_3 from '@/static/images/banner/index/3.png'

const imgs: stringKey = {
  img_index_1,
  img_index_2,
  img_index_3,
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

const categoryList = ref<CategoryItem[]>([])
const getCategoryList = async () => {
  const res = await getCategoryIndexAPI()
  categoryList.value = res.result
}

onLoad(() => {
  getBannerList()
  getCategoryList()
})
</script>

<template>
  <CustomNavbar />
  <WeizCarousel :list="bannerList" :dotBottom="64" />
  <view class="content">
    <WeizCategory :list="categoryList" />
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
