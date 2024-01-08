<script setup lang="ts">
import { ref } from 'vue'
// 生命周期 https://uniapp.dcloud.net.cn/tutorial/page.html#onload
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getBannerAPI } from '@/api/banner'
import type { BannerItem } from '@/types/home'
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
const list = ref<BannerItem[]>([])

const getBannerList = async () => {
  const res = await getBannerAPI('index')
  const { result } = res

  result.map((item) => {
    list.value.push({
      id: item.id,
      url: item.url,
      imgUrl: imgs['img_' + item.imgUrl],
    })
  })
}

onLoad(() => {
  getBannerList()
})
</script>

<template>
  <CustomNavbar />
  <WeizCarousel :list="list" />
  <view class="">index</view>
</template>

<style lang="scss"></style>
