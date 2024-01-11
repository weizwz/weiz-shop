<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCardListIndexAPI } from '@/api/card'
import type { GoodsItem, RankItem } from '@/types/api'

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

const initList = (list: GoodsItem<RankItem>[]) => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    // 右边高下一个商品插入左边
    if (goodsLeftH <= goodsRightH) {
      goodsLeftList.value.push(element)
      goodsLeftH += addH(element)
    } else {
      goodsRightList.value.push(element)
      goodsRightH += addH(element)
    }
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
    h = imgH + 46 + 57 + 32
    // 低价高度
    if (data.priceTag) h += 37
    // 排行高度
    if (data.rank) h += 62
  }
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
    <view class="goodsRightList card-list-wrapper">
      <view class="card-list-item" v-for="(item, index) in goodsRightList" :key="index">
        <WeizGoods :goods="item" />
      </view>
    </view>
  </view>
  <view v-if="loading" class="loading-text">'正在加载...'</view>
</template>

<style lang="scss">
.card-list {
  width: calc(100% - $uni-margin-frame * 2);
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
