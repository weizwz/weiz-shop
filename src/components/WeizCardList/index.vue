<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCardListIndexAPI } from '@/api/card'
import type { GoodsItem, RankItem } from '@/types/api'
// import { rpxToPx } from '@/utils/platform'

// 加载状态
let loading = ref(false)
// 获取数据
const cardList = ref<GoodsItem<RankItem>[]>([])
// 左侧商品列表
let goodsLeftList = ref<GoodsItem<RankItem>[]>([])
// 右侧商品列表
let goodsRightList = ref<GoodsItem<RankItem>[]>([])
// 高度计算
let goodsLeftH = 0
let goodsRightH = 0
// 参数
let pageSize = 10
let pageNum = 1
const getCardList = async () => {
  loading.value = true
  const res = await getCardListIndexAPI({
    pageNum,
    pageSize,
  })
  pageNum++
  loading.value = false
  cardList.value = res.result
  initList(cardList.value)
}

// 分配瀑布列表
const initList = (list: GoodsItem<RankItem>[]) => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    const currentH = addH(element)
    // 右边高下一个商品插入左边
    if (goodsLeftH <= goodsRightH) {
      goodsLeftList.value.push(element)
      goodsLeftH += currentH
    } else {
      goodsRightList.value.push(element)
      goodsRightH += currentH
    }
    // 高度校验，微信小程序或H5页面查看元素高度
    // console.log(
    //   `序列：${index + 1}，名称：${element.name}，当前卡片高度：${rpxToPx(currentH - 20)}，图片高度：${rpxToPx(
    //     (750 / 2 - 30) * element.image_ratio,
    //   )}`,
    // )
  }
}
// 计算单个卡片高度  图片高度计算 750rpx = screenWidth  imgH = screenWidth/2 - $uni-margin-frame * 3 / 2
const addH = (data: GoodsItem<RankItem>) => {
  const imgW = 750 / 2 - 30
  const imgH = data.image_ratio * imgW
  let h = 0
  if (data.type === 'swiper') {
    h = imgH
  } else if (data.type === 'video') {
    // 视频模式 信息框高
    h = imgH + 140
  } else {
    // 普通模式 名称+价格+评论
    h = imgH + 60 + 56 + 46
    // 低价高度
    if (data.priceTag) h += 46
    // 排行高度
    if (data.rank) h += 60
    // 容器padding-bottom
    h += 10
  }
  // 容器margin-bottom
  h += 20
  return h
}

onMounted(() => {
  getCardList()
})

const resetData = () => {
  pageSize = 10
  pageNum = 1
  cardList.value = []
  goodsLeftList.value = []
  goodsRightList.value = []
  goodsLeftH = 0
  goodsRightH = 0
}
// 暴露方法
defineExpose({
  resetData,
  loadData: getCardList,
})
</script>

<template>
  <view class="card-list">
    <view class="card-list-left card-list-wrapper">
      <view class="card-list-item" v-for="(item, index) in goodsLeftList" :key="index">
        <WeizGoods :goods="item" />
      </view>
    </view>
    <view class="card-list-right card-list-wrapper">
      <view class="card-list-item" v-for="(item, index) in goodsRightList" :key="index">
        <WeizGoods :goods="item" />
      </view>
    </view>
  </view>
  <view v-if="loading" class="loading-text">正在加载...</view>
</template>

<style lang="scss">
.card-list {
  width: calc(100% - $uni-margin-frame * 2);
  min-height: 400rpx;
  margin: $uni-margin-frame $uni-margin-frame 0;
  display: flex;
  justify-content: space-between;
  .card-list-wrapper {
    width: calc(50% - $uni-margin-frame/2);
    display: flex;
    flex-direction: column;
  }
  .card-list-item {
    margin-bottom: $uni-margin-frame;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
