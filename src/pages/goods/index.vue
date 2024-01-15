// src/pages/goods/goods.vue
<script setup lang="ts">
import { rpxToPx } from '@/utils/platform'
import { nextTick, ref, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 快捷滚动
const shortcutIdx = ref<number>(0)
const scrollTop = ref<number>(0)
const scrollOldTop = ref<number>(0)
const shortcutFixed = ref<boolean>(false) // 是否固定住快捷跳转
const scrollHandle = (e: UniHelper.ScrollViewOnScrollEvent) => {
  scrollOldTop.value = e.detail.scrollTop
  if (scrollOldTop.value >= rpxToPx(750)) shortcutFixed.value = true
  else shortcutFixed.value = false
}
const shortcutActive = (idx: number) => {
  shortcutIdx.value = idx
  scrollTop.value = scrollOldTop.value
  // 快捷方式自身高度
  const dH = rpxToPx(108)
  nextTick(() => {
    if (idx === 0) {
      scrollTop.value = 0
    } else if (idx === 1) {
      const query = uni.createSelectorQuery().in(instance)
      query
        .select('.detail')
        .boundingClientRect((data) => {
          const nodeInfo: UniApp.NodeInfo = data as UniApp.NodeInfo
          scrollTop.value += nodeInfo && nodeInfo.top ? nodeInfo.top - dH : 0
        })
        .exec()
    } else {
      const query = uni.createSelectorQuery().in(instance)
      query
        .select('.similar')
        .boundingClientRect((data) => {
          const nodeInfo: UniApp.NodeInfo = data as UniApp.NodeInfo
          scrollTop.value += nodeInfo && nodeInfo.top ? nodeInfo.top - dH : 0
        })
        .exec()
    }
  })
}
// 购物车配置
const cartOptions = ref<UniHelper.UniGoodsNavOption[]>([
  {
    icon: 'star',
    text: '收藏',
  },
  {
    icon: 'chat',
    text: '客服',
    info: 3,
    infoBackgroundColor: '#4ADA68',
  },
  {
    icon: 'cart',
    text: '购物车',
    info: 2,
    infoBackgroundColor: '#18c7ff',
  },
])
const cartGroup = ref([
  {
    text: '加入购物车',
    backgroundColor: 'linear-gradient(90deg, #05ffd1, #4cd964)',
    color: '#fff',
  },
  {
    text: '立即购买',
    backgroundColor: 'linear-gradient(90deg, #18c7ff, #409eff)',
    color: '#fff',
  },
])

const addCartHandle = () => {}
const buyHandle = () => {}
</script>

<template>
  <scroll-view
    :scroll-y="true"
    :scroll-with-animation="true"
    :scroll-top="scrollTop"
    @scroll="scrollHandle"
    class="viewport"
  >
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview">
        <swiper circular class="preview-swiper">
          <swiper-item v-for="idx in 5" :key="idx">
            <image mode="aspectFill" :src="`/static/images/card/index/${idx}.png`" />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current">1</text>
          <text class="split">/</text>
          <text class="total">5</text>
        </view>
      </view>
      <!-- 快捷跳转 -->
      <view :class="{ shortcut: true, fixed: shortcutFixed }">
        <view class="content">
          <view :class="{ active: shortcutIdx === 0, 'shortcut-item': true }" @tap="shortcutActive(0)">图集</view>
          <view :class="{ active: shortcutIdx === 1, 'shortcut-item': true }" @tap="shortcutActive(1)">详情</view>
          <view :class="{ active: shortcutIdx === 2, 'shortcut-item': true }" @tap="shortcutActive(2)">推荐</view>
        </view>
      </view>
      <!-- 商品简介 -->
      <view class="meta">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">29</text>
          <text class="suffix">.00</text>
        </view>
        <view class="info">
          <view class="name"> 夏威夷进口爆米花 香甜可口脆味十足 家庭影院必备 500g </view>
          <view class="desc-content">
            <view class="desc" v-for="(item, index) in ['原生态', '健康', '新鲜玉米']" :key="index">{{ item }}</view>
          </view>
          <view class="white tag-content">
            <view class="tag" v-for="(item, index) in ['30天价保', '免费上门取退']" :key="index">{{ item }}</view>
          </view>
        </view>
      </view>

      <!-- 操作面板 -->
      <view class="action">
        <view class="item arrow">
          <text class="label">选择</text>
          <text class="text ellipsis"> 请选择商品规格 <uni-icons type="right" size="14"></uni-icons></text>
        </view>
        <view class="item arrow">
          <text class="label">配送</text>
          <text class="text ellipsis"> 请选择收获地址 <uni-icons type="right" size="14"></uni-icons> </text>
        </view>
        <view class="item arrow">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>
    </view>

    <!-- 商品详情 -->
    <view class="detail">
      <WeizTitle title="详情" />
      <view class="content">
        <uni-section title="商品规格" type="line" color="#18c7ff"></uni-section>
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item">
            <text class="label">商品编号</text>
            <text class="value">2324928493859856</text>
          </view>
          <view class="item">
            <text class="label">净含量</text>
            <text class="value">500g</text>
          </view>
          <view class="item">
            <text class="label">保质期</text>
            <text class="value">3个月</text>
          </view>
        </view>
        <uni-section title="商品介绍" type="line" color="#18c7ff"></uni-section>
        <!-- 详情 -->
        <image mode="widthFix" src="/static/images/card/index/1.png"></image>
        <image mode="widthFix" src="https://yanxuan-item.nosdn.127.net/a8d266886d31f6eb0d7333c815769305.jpg"></image>
        <image mode="widthFix" src="https://yanxuan-item.nosdn.127.net/a9bee1cb53d72e6cdcda210071cbd46a.jpg"></image>
      </view>
    </view>

    <!-- 同类推荐 -->
    <view class="similar">
      <WeizTitle title="推荐" />
      <view class="content"> </view>
    </view>
  </scroll-view>

  <!-- 用户操作 -->
  <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <uni-goods-nav
      :options="cartOptions"
      :fill="true"
      :button-group="cartGroup"
      @click="addCartHandle"
      @buttonClick="buyHandle"
    />
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.viewport {
  background: $uni-bg-color-grey;
  overflow: hidden;
}

.shortcut {
  width: 100%;
  padding: $uni-margin-frame 0;
  position: static;
  &.fixed {
    position: fixed;
    top: 0;
    background: rgba(255, 255, 255, 0.95);
    z-index: 1;
  }
  .content {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e8e8e8;
    width: fit-content;
    padding: 5rpx;
    border-radius: 56rpx;
    .shortcut-item {
      padding: 0 40rpx;
      height: 56rpx;
      line-height: 56rpx;
      font-size: 28rpx;
      border-radius: 56rpx;
      &.active {
        background: #fff;
        font-weight: 600;
      }
    }
  }
}

/* 商品信息 */
.goods {
  .preview {
    height: 750rpx;
    position: relative;
    .preview-swiper {
      width: 100%;
      height: 100%;
    }
    image {
      width: 750rpx;
      height: 750rpx;
    }
    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;
      .current {
        font-size: 26rpx;
      }
      .split {
        font-size: 24rpx;
        margin: 0 1rpx 0 2rpx;
      }
      .total {
        font-size: 24rpx;
      }
    }
  }
  .meta {
    margin: 0 $uni-margin-frame $uni-margin-frame;
    overflow: hidden;
    border-radius: $uni-margin-frame;
    background: #fff;
    .info {
      margin-top: -20rpx;
      padding-bottom: 10rpx;
      border-radius: $uni-margin-frame;
      background: #fff;
      overflow: hidden;
    }
    .price {
      height: 130rpx;
      padding: 20rpx 20rpx 50rpx;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      border-radius: $uni-margin-frame;
      background: linear-gradient(45deg, $uni-color-main, $uni-color-auxiliary);
    }
    .number {
      font-size: 56rpx;
    }
    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      font-weight: 600;
    }
    .desc-content {
      display: flex;
      align-items: center;
    }
    .desc {
      line-height: 1;
      padding: 0 20rpx 20rpx;
      font-size: 24rpx;
      color: $uni-text-color-grey;
      position: relative;
      &::after {
        content: '·';
        display: inline-block;
        position: absolute;
        line-height: 1;
        right: -5rpx;
      }
      &:last-child::after {
        display: none;
      }
    }
    .tag-content {
      width: fit-content;
      display: flex;
      background: $uni-color-success;
      margin: 0 20rpx 10rpx;
      border-radius: 10rpx;
      font-size: 24rpx;
      .tag {
        padding: 4rpx 12rpx;
        position: relative;
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          width: 1px;
          height: 40%;
          right: 0;
          background: #fff;
          top: 30%;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
  }
  .action {
    margin: 0 $uni-margin-frame $uni-margin-frame;
    overflow: hidden;
    border-radius: $uni-margin-frame;
    background: #fff;
    padding: 10rpx;
    .item {
      height: 90rpx;
      padding-right: 60rpx;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: 0 none;
      }
    }
    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }
    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}

/* 商品详情 */
.detail {
  > .content {
    border-radius: $uni-margin-frame;
    overflow: hidden;
    background: #fff;
    margin-top: 20rpx;
    display: flex;
    flex-direction: column;
    > image {
      width: 100%;
      margin-bottom: 10rpx;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;
    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }
    .label {
      width: 200rpx;
    }
    .value {
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  .content {
    padding: 0 20rpx 200rpx;
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
  }
}

/* 底部工具栏 */
.toolbar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  /* #ifdef H5 */
  left: var(--window-left);
  right: var(--window-right);
  /* #endif */
  bottom: 0;
}
</style>
