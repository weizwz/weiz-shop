<script setup lang="ts">
import type { HotPanelItem, HotPictureItem } from '@/types/api'
import ImgPanel from './ImgPanel.vue'
import { toRaw, watch, ref } from 'vue'

// 定义 props 接收数据
const props = defineProps<{
  list: HotPanelItem<HotPictureItem>[]
}>()

const regroup = (data: HotPictureItem[]) => {
  let swiperArr: Array<Array<HotPictureItem>> = []
  const num = Math.ceil(data.length / 2)
  for (let i = 0; i < num; i++) {
    swiperArr.push(data.splice(0, 2))
  }
  return swiperArr
}

let swiperArr = ref<Array<Array<HotPictureItem>>>([])
if (toRaw(props.list).length > 0) swiperArr.value = regroup(toRaw(props.list)[0].picture)

watch(
  () => props.list,
  (newVal) => {
    if (toRaw(newVal).length > 0) swiperArr.value = regroup(toRaw(newVal)[0].picture)
  },
)
</script>

<template>
  <!-- 热门推荐 -->
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.desc }}</text>
      </view>
      <navigator hover-class="none" :url="`/pages/hotCategory/index?category=${item.category}`" class="cards">
        <view v-if="item.type === 'swiper'" class="img-swiper">
          <swiper
            class="img-swiper-content"
            :vertical="true"
            :circular="true"
            :autoplay="true"
            :interval="3000"
            :duration="600"
          >
            <swiper-item class="img-swiper-item" v-for="(imgArr, index) in swiperArr" :key="index">
              <ImgPanel class="img-swiper-item-panel" v-for="(img, idx) in imgArr" :key="idx" :img="img" />
            </swiper-item>
          </swiper>
        </view>
        <view v-else class="img-wrapper" v-for="(img, index) in item.picture" :key="index">
          <ImgPanel :img="img" />
        </view>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
.hot {
  display: flex;
  flex-wrap: wrap;
  margin: $uni-margin-frame $uni-margin-frame 0;
  min-height: 400rpx;
  border-radius: $uni-margin-frame;
  background-color: #fff;

  .title {
    display: flex;
    align-items: center;
    padding: $uni-margin-frame 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    position: relative;
    .title-desc {
      font-size: 24rpx;
      color: #7f7f7f;
      margin-left: 18rpx;
    }
  }
  .img-swiper-content {
    height: 150rpx;
    .img-swiper-item {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      .img-swiper-item-panel {
        width: 150rpx;
        height: 150rpx;
      }
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    border-right: 1rpx solid #f7f7f7;
    border-top: 1rpx solid #f7f7f7;
    box-sizing: border-box;
    .title {
      justify-content: start;
    }
    &:nth-child(2n) {
      border-right: 0 none;
    }
    &:nth-child(-n + 2) {
      border-top: 0 none;
    }
    .img-swiper {
      width: 100%;
      height: 150rpx;
      overflow: hidden;
    }
  }
  .cards {
    flex: 1;
    padding: 15rpx 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
