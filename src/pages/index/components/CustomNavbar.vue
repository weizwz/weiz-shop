<script setup lang="ts">
import { getSearchTxtAPI } from '@/api/search'
import { onMounted, ref } from 'vue'
import { navData } from '@/utils/navData'
import { SearchTo } from '@/utils/search'

const navBarData = navData()
const currentSearchKey = ref<string>('')

const changeSearchKey: UniHelper.SwiperOnChange = (event) => {
  const currentIdx: number = event.detail.current
  currentSearchKey.value = searchTxt.value[currentIdx]
}
const toSearch = (searchKey: string) => {
  SearchTo(searchKey, false)
}
const toSearchAndSearch = () => {
  SearchTo(currentSearchKey.value, true)
}

onMounted(() => {
  getSearchTxt()
})

// 默认一次返回10组文字
const searchTxt = ref<string[]>([])
const getSearchTxt = async () => {
  const res = await getSearchTxtAPI()
  searchTxt.value = res.result
  currentSearchKey.value = searchTxt.value[0]
}
</script>

<template>
  <view class="navbar" :style="{ paddingTop: navBarData.top + 'px', height: navBarData.height + 'px' }">
    <!-- logo文字 -->
    <view class="logo" :style="{ height: navBarData.height + 'px' }">
      <image mode="aspectFit" class="logo-img" src="@/static/logo.png" alt="味值商城"></image>
    </view>
    <!-- 搜索条 -->
    <view class="search" :style="{ height: navBarData.height + 'px', lineHeight: navBarData.height + 'px' }">
      <span class="iconfont icon-sousuo"></span>
      <view class="search-txt-wrapper" :style="{ height: navBarData.height + 'px' }">
        <swiper
          class="search-txt-content"
          :vertical="true"
          :circular="true"
          :autoplay="true"
          :interval="3000"
          :duration="1000"
          @change="changeSearchKey"
        >
          <swiper-item class="search-txt-item" v-for="(item, index) in searchTxt" :key="index" @click="toSearch(item)">
            <view
              class="search-txt"
              :style="{ height: navBarData.height + 'px', lineHeight: navBarData.height + 'px' }"
              >{{ item }}</view
            >
          </swiper-item>
        </swiper>
      </view>

      <button
        @tap="toSearchAndSearch"
        size="mini"
        type="default"
        class="weiz-btn weiz-btn-search"
        :style="{ height: navBarData.height - 8 + 'px', lineHeight: navBarData.height - 8 + 'px' }"
      >
        搜索
      </button>
    </view>
    <view class="navbar-space" :style="{ width: navBarData.width + navBarData.marginRight + 'px' }"></view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  padding: 20px 0 10px;
  position: relative;
  height: 64rpx;
  display: flex;
  align-items: center;
  z-index: 1;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64rpx;
    padding: 0 20rpx;
    width: 120rpx;
    .logo-img {
      height: 100%;
      width: inherit;
    }
  }
  .search {
    flex: 1;
    height: 64rpx;
    line-height: 64rpx;
    box-sizing: border-box;
    border-radius: 100rpx;
    display: flex;
    align-items: center;
    padding: 0 20rpx;
    margin-right: 20rpx;
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
    .search-txt-wrapper {
      flex: 1;
      margin-left: 10rpx;
      height: 100%;
      overflow: hidden;
      .search-txt-content {
        .search-txt {
          width: 100%;
          height: 64rpx;
          line-height: 64rpx;
          font-size: 28rpx;
          font-weight: 400;
        }
      }
    }
  }
  .navbar-space {
    width: 0;
  }
}
.search-txt-content {
  height: 100%;
}
.search-txt-item {
  height: auto !important;
}
</style>
@/utils/search
