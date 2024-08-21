<script setup lang="ts">
import { getCategoryHotAPI } from '@/api/category'
import type { HotCategoryItem } from '@/types/api'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
// 热门推荐页 标题和url
const hotMap = [
  { category: '1', title: '特惠推荐', url: 'preference' },
  { category: '2', title: '爆款推荐', url: 'hot' },
  { category: '3', title: '畅销全球', url: 'global' },
  { category: '4', title: '新鲜好物', url: 'new' },
]
// uniapp 获取页面参数
const query = defineProps<{
  category: string
}>()
// 获取当前推荐信息
const currHot = hotMap.find((v) => v.category === query.category)
// 动态设置标题
uni.setNavigationBarTitle({ title: currHot!.title })

// 推荐封面图
const bannerPicture = ref('')
// 推荐选项
const subTypes = ref<(HotCategoryItem & { finish?: boolean })[]>([])
// 高亮的下标
const activeIndex = ref(0)
let pageNum = ref(1)
// 获取热门推荐数据
const getHotRecommendData = async () => {
  const res = await getCategoryHotAPI(currHot!.url, {
    pageNum: pageNum.value,
    pageSize: 10,
  })
  const { result } = res
  bannerPicture.value = result.banner
  subTypes.value = result.subTypes
}

// 页面加载
onLoad(() => {
  getHotRecommendData()
})

// 滚动触底
const onScrolltolower = async () => {
  // 获取当前选项
  const currsubTypes = subTypes.value[activeIndex.value]
  // 分页条件
  if (pageNum.value < currsubTypes.pages) {
    // 当前页码累加
    pageNum.value++
  } else {
    // 标记已结束
    currsubTypes.finish = true
    // 退出并轻提示
    return uni.showToast({ icon: 'none', title: '没有更多数据了~' })
  }

  // 调用API传参
  const res = await getCategoryHotAPI(currHot!.url, {
    subType: currsubTypes.id,
    pageNum: pageNum.value,
    pageSize: 10,
  })
  // 新的列表选项
  const newsubTypes = res.result.subTypes[activeIndex.value]
  // 数组追加
  currsubTypes.goods.push(...newsubTypes.goods)
}
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image class="image" mode="widthFix" :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="ml20 mr20 tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      enable-back-to-top
      v-for="(item, index) in subTypes"
      :key="item.id"
      v-show="activeIndex === index"
      scroll-y
      class="scroll-view"
      @scrolltolower="onScrolltolower"
    >
      <view class="flex-wrap ml20 mr20 mt20 goods">
        <view class="mr20 mb20 goods-item" v-for="temp in item.goods" :key="temp.id">
          <WeizGoods :goods="temp" />
        </view>
      </view>
      <view class="loading-text">
        {{ item.finish ? '没有更多数据了~' : '正在加载...' }}
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
  box-sizing: border-box;
}
.cover {
  width: 100%;
  height: 240rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  .image {
    width: 100%;
  }
}
.scroll-view {
  flex: 1;
  overflow: hidden;
}
.tabs {
  width: 710rpx;
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: $uni-color-main;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  .goods-item {
    width: 345rpx;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
