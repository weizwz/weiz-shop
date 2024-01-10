<script setup lang="ts">
import { ref } from 'vue'
import type { GoodsItem, RankItem } from '@/types/api'
import img_hot_1 from '@/static/images/card/index/1.png'
import img_hot_2 from '@/static/images/card/index/2.png'
import img_hot_3 from '@/static/images/card/index/3.png'
import img_hot_4 from '@/static/images/card/index/4.png'

const goodsList: GoodsItem<RankItem>[] = [
  {
    id: '111',
    name: '香甜爆米花好吃不腻',
    nameTag: '自营',
    price: '9.90',
    comment: '10万+',
    commentRate: '98%',
    image_url: img_hot_1,
    rank: {
      rank: 1,
      type: '香甜零食榜',
      link: '4569',
    },
  },
  {
    id: '112',
    name: '美味坚果大礼包',
    nameTag: '百亿补贴',
    price: '129.00',
    priceTag: '28天最低价',
    comment: '1万+',
    commentRate: '97%',
    image_url: img_hot_2,
  },
  {
    id: '113',
    name: '香脆面就是一个脆',
    price: '12.23',
    oldPrice: '15.00',
    comment: '200+',
    payTag: true,
    image_url: img_hot_3,
  },
  {
    id: '114',
    name: '猪肉脯越吃越想吃',
    price: '36.00',
    priceTag: '30天最低价',
    comment: '1万+',
    commentRate: '96%',
    image_url: img_hot_4,
    rank: {
      rank: 10,
      type: '开袋即食肉类零食榜',
      link: '4568',
    },
  },
]
// 左侧商品列表
let goodsLeftList = ref<GoodsItem<RankItem>[]>([])
// 右侧商品列表
let goodsRightList = ref<GoodsItem<RankItem>[]>([])

const initList = (list: GoodsItem<RankItem>[]) => {
  let goodsLeftH = 0
  let goodsRightH = 1
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    if (index % 2 === 0) {
      goodsLeftList.value.push(element)
    } else {
      goodsRightList.value.push(element)
    }
  }
}

// const addH = (data: CardItem) => {}

initList(goodsList)
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
