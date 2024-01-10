<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCardListIndexAPI } from '@/api/card'
import type { GoodsItem, RankItem } from '@/types/api'

// 分类
const cardList = ref<GoodsItem<RankItem>[]>([])
const getCardList = async () => {
  const res = await getCardListIndexAPI({
    pageNum: 1,
    pageSize: 10,
  })
  cardList.value = res.result
  initList(cardList.value)
}

// 左侧商品列表
let goodsLeftList = ref<GoodsItem<RankItem>[]>([])
// 右侧商品列表
let goodsRightList = ref<GoodsItem<RankItem>[]>([])

const initList = (list: GoodsItem<RankItem>[]) => {
  let goodsLeftH = 0
  let goodsRightH = 1
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    // 右边高下一个商品插入左边
    console.log(index, goodsLeftH, goodsRightH)

    if (goodsLeftH <= goodsRightH) {
      goodsLeftList.value.push(element)
      goodsLeftH += addH(element)
    } else {
      goodsRightList.value.push(element)
      goodsRightH += addH(element)
    }
  }
}
// 计算单个卡片高度
const addH = (data: GoodsItem<RankItem>) => {
  // 基础高度 图片+名称+价格+评论+间距
  const { screenWidth } = uni.getWindowInfo()
  // screenWidth 单位px，其他rpx，但是不影响，因为都是共有高度
  const imgH = screenWidth / 2 - 30
  let h = imgH + 46 + 57 + 32
  // 低价高度
  if (data.priceTag) h += 37
  // 排行高度
  if (data.rank) h += 62
  return h
}

onMounted(() => {
  getCardList()
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
</template>

<style lang="scss">
.card-list {
  width: calc(100% - $uni-margin-frame * 2);
  margin: $uni-margin-frame $uni-margin-frame 0;
  display: flex;
  justify-content: center;
  .card-list-wrapper {
    width: calc(50% - $uni-margin-frame/2);
  }
  .card-list-left {
    margin-right: $uni-margin-frame;
  }
  .card-list-item {
    margin-bottom: $uni-margin-frame;
  }
}
</style>
