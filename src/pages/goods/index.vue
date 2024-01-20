// src/pages/goods/goods.vue
<script setup lang="ts">
import { nextTick, ref, getCurrentInstance } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { rpxToPx } from '@/utils/platform'
import { getCategorySuggestAPI } from '@/api/category'
import SpecificationPanel from './components/SpecificationPanel.vue'
import AddressPanel from './components/AddressPanel.vue'
import { useCartsStore } from '@/stores'
import type { Address, GoodsItem, GoodsProp, GoodsSpec, RankItem } from '@/types/api'
import type { SpecificationPanelInstance } from '@/types/components'
import type { CartItem } from '@/types/global'

const instance = getCurrentInstance()
const specificationPanel = ref<SpecificationPanelInstance>()
const useCarts = useCartsStore()
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 图集索引
const imgIdx = ref<number>(1)
const changeImgSwiper = (ev: UniHelper.SwiperOnChangeEvent) => {
  imgIdx.value = ev.detail.current + 1
}

/**
 * 快捷滚动
 */
const shortcutIdx = ref<number>(0)
const scrollTop = ref<number>(0)
const scrollOldTop = ref<number>(0)
const shortcutFixed = ref<boolean>(false) // 是否固定住快捷跳转
const scrollHandle = (e: UniHelper.ScrollViewOnScrollEvent) => {
  scrollOldTop.value = e.detail.scrollTop
  // 优化固定定位的展示速度
  shortcutFixed.value = scrollOldTop.value >= rpxToPx(750)
  const query = uni.createSelectorQuery().in(instance)
  query
    .select('.similar')
    .boundingClientRect((data) => {
      const nodeInfo: UniApp.NodeInfo = data as UniApp.NodeInfo
      if (nodeInfo && nodeInfo.top && nodeInfo.top <= Math.ceil(rpxToPx(112))) {
        shortcutIdx.value = 2
      } else if (scrollOldTop.value >= rpxToPx(750)) {
        shortcutIdx.value = 1
      } else {
        shortcutIdx.value = 0
      }
    })
    .exec()
}
const shortcutActive = (idx: number) => {
  scrollTop.value = scrollOldTop.value
  shortcutIdx.value = idx
  // 快捷方式自身高度
  const dH = rpxToPx(112)
  nextTick(() => {
    if (idx === 0) {
      scrollTop.value = 0
    } else if (idx === 1) {
      const query = uni.createSelectorQuery().in(instance)
      query
        .select('.detail')
        .boundingClientRect((data) => {
          const nodeInfo: UniApp.NodeInfo = data as UniApp.NodeInfo
          if (nodeInfo.top && Math.ceil(nodeInfo.top) === Math.ceil(dH)) return
          // Math.ceil(nodeInfo.top) 是为了消除误差，宁可多滚动一点，避免因为小数点导致滚动不到位
          scrollTop.value += nodeInfo && nodeInfo.top ? Math.ceil(nodeInfo.top) - dH : 0
        })
        .exec()
    } else {
      const query = uni.createSelectorQuery().in(instance)
      query
        .select('.similar')
        .boundingClientRect((data) => {
          const nodeInfo: UniApp.NodeInfo = data as UniApp.NodeInfo
          if (nodeInfo.top && Math.ceil(nodeInfo.top) === Math.ceil(dH)) return
          scrollTop.value += nodeInfo && nodeInfo.top ? Math.ceil(nodeInfo.top) - dH : 0
        })
        .exec()
    }
  })
}

const currentGoods = ref<GoodsItem<RankItem>>()
const getGoodsDetails = (id: string) => {
  // 此处应调接口
  currentGoods.value = {
    id: id,
    type: 'normal',
    name: '夏威夷进口爆米花 香甜可口脆味十足 家庭影院必备 500g',
    price: 29.9,
    comment: '100w',
    image_url: [
      '/static/images/card/index/1.png',
      '/static/images/card/index/2.png',
      '/static/images/card/index/3.png',
      '/static/images/card/index/4.png',
      '/static/images/card/index/5.png',
    ],
    image_ratio: 1,
    nameTag: '百亿补贴',
  }
}

/**
 * 商品属性
 */
const goodsProp = ref<GoodsProp[]>([
  { id: '101', name: '品牌', value: '味值', level: 2 },
  { id: '102', name: '商品编号', value: '1000265256', level: 2 },
  { id: '20', name: '主体', level: 1 },
  { id: '201', name: '保质期', value: '180天', level: 2 },
  { id: '202', name: '净含量', value: '500g', level: 2 },
  { id: '30', name: '参数', level: 1 },
  { id: '301', name: '是否有机', value: '非有机', level: 2 },
  { id: '302', name: '包装形式', value: '袋装', level: 2 },
])

/**
 * 同类推荐
 */
const categoryList = ref<GoodsItem<RankItem>[]>([])
const getCategorySuggestData = async (id: string) => {
  const res = await getCategorySuggestAPI(id)
  categoryList.value = res.result
}

/**
 * 购物车配置
 */
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

/**
 * uni.navigateTo的传参在onload里接收 https://uniapp.dcloud.net.cn/api/router.html#navigateto
 */
onLoad((option) => {
  // 获取商品详情
  getGoodsDetails(option?.id)
  // 相关推荐
  getCategorySuggestData(option?.id)
})

/**
 * 弹出层
 */
// uni-ui 弹出层组件 ref
const popup = ref<{
  open: (type?: UniHelper.UniPopupType) => void
  close: () => void
}>()
const popupName = ref<'specification' | 'address'>()
const openPopup = (name: typeof popupName.value) => {
  popupName.value = name
  popup.value?.open()
}
const closePopup = () => {
  popup.value?.close()
}
// 商品规格 默认取第一个
const currentSpec = ref<GoodsSpec>({
  id: '001',
  name: '经典味 500g 1袋装',
  price: '29.90',
  image_url: '/static/images/card/index/1.png',
})
const changeSpec = (data: GoodsSpec) => {
  currentSpec.value = data
}
// 地址 默认取第一个，无的话提示新建
const currentAddress = ref<Address>()
const changeAddress = (data: Address) => {
  currentAddress.value = data
}

/**
 * 购物车
 */
// 获取子组件数量
const clickHandle = (content: UniHelper.UniGoodsNavOnClickEvent) => {
  // 收藏
  if (content.index === 0) {
    uni.showToast({ icon: 'success', title: '收藏成功' })
  } else if (content.index === 1) {
    uni.showToast({ icon: 'none', title: '客服真忙，请稍后再试' })
  } else {
    uni.switchTab({ url: '/pages/cart/index' })
  }
}
const buttonHandle = (content: UniHelper.UniGoodsNavOnButtonClickEvent) => {
  // 加入购物车
  if (content.index === 0) {
    const numObj = specificationPanel.value?.getCurrentNum()
    const specObj = specificationPanel.value?.getCurrentSpec()
    if (!specObj?.id) {
      // 未选规格前打开规格弹窗
      openPopup('specification')
      return
    }
    const cartItem: CartItem = {
      ...currentGoods.value,
      number: numObj?.number,
      minNum: numObj?.minNum,
      maxNum: numObj?.maxNum,
      checked: true,
      specification: {
        ...specObj,
      },
    }
    useCarts.addCart(cartItem)
    uni.showToast({ icon: 'success', title: '已加入购物车' })
  } else {
    //
  }
}
</script>

<template>
  <view class="viewport">
    <scroll-view
      :scroll-y="true"
      :scroll-with-animation="true"
      :scroll-top="scrollTop"
      @scroll="scrollHandle"
      class="scroll-view"
    >
      <!-- 基本信息 -->
      <view class="goods">
        <!-- 商品主图 -->
        <view class="preview">
          <swiper circular class="preview-swiper" @change="changeImgSwiper">
            <swiper-item v-for="(item, idx) in currentGoods?.image_url" :key="idx">
              <image mode="aspectFill" :src="item" />
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current">{{ imgIdx }}</text>
            <text class="split">/</text>
            <text class="total">5</text>
          </view>
        </view>
        <!-- 快捷跳转 -->
        <view v-show="shortcutFixed" class="seat"> <!--占位--> </view>
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
            <text class="number">
              {{ currentGoods && currentGoods.price ? String(currentGoods.price).split('.')[0] : '' }}
            </text>
            <text class="suffix">
              .{{ currentGoods && currentGoods.price ? String(currentGoods.price).split('.')[1] : '' }}
            </text>
          </view>
          <view class="info">
            <view class="name"> {{ currentGoods?.name }} </view>
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
            <view class="label">已选</view>
            <view class="text specification" @tap="openPopup('specification')">
              <view class=""> {{ currentSpec ? currentSpec.name : '请选择商品规格' }} </view>
              <uni-icons type="right" size="14"></uni-icons>
            </view>
          </view>
          <view class="item arrow">
            <text class="label">配送</text>
            <view class="text specification" @tap="openPopup('address')">
              <view class=""> {{ currentAddress ? currentAddress.address : '请选择收货地址' }} </view>
              <uni-icons type="right" size="14"></uni-icons>
            </view>
          </view>
          <view class="item arrow">
            <text class="label">服务</text>
            <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
          </view>
        </view>
      </view>

      <!-- 商品详情 -->
      <view class="detail mb20">
        <WeizTitle title="详情" />
        <view class="content">
          <uni-section class="goods-section" title="规格参数" type="line" color="#18c7ff"></uni-section>
          <view class="properties">
            <view class="item" v-for="item in goodsProp" :key="item.id">
              <text :class="{ label: true, top: item.level === 1 }">{{ item.name }}</text>
              <text v-if="item.value" class="value">{{ item.value }}</text>
            </view>
          </view>
          <uni-section class="goods-section" title="商品介绍" type="line" color="#18c7ff"></uni-section>
          <!-- 详情 -->
          <view class="images">
            <image mode="widthFix" src="/static/images/card/index/1.png"></image>
            <image mode="widthFix" src="/static/images/details/1.jpg"></image>
            <image mode="widthFix" src="/static/images/details/2.jpg"></image>
          </view>
        </view>
      </view>

      <!-- 同类推荐 -->
      <view class="similar">
        <WeizTitle title="推荐" />
        <view class="content mt20">
          <view class="mr20 mb20 goods-item" v-for="temp in categoryList" :key="temp.id">
            <WeizGoods :goods="temp" />
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- 用户操作 -->
    <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      <uni-goods-nav
        :options="cartOptions"
        :fill="true"
        :button-group="cartGroup"
        @click="clickHandle"
        @buttonClick="buttonHandle"
      />
    </view>
    <!-- uni-ui 弹出层 https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html-->
    <uni-popup ref="popup" type="bottom" background-color="#fff">
      <SpecificationPanel
        id="SpecificationPanel"
        ref="specificationPanel"
        v-if="popupName === 'specification'"
        @close="closePopup"
        @changeSpec="changeSpec"
      />
      <AddressPanel
        v-if="popupName === 'address'"
        ref="addressPanel"
        @close="closePopup"
        @changeAddress="changeAddress"
      />
    </uni-popup>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background: $uni-bg-color-grey;
}
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.scroll-view {
  flex: 1;
  overflow: hidden;
}
.seat {
  height: 112rpx;
}
.shortcut {
  width: 100%;
  padding: $uni-margin-frame 0;
  position: static;
  &.fixed {
    position: fixed;
    //#ifdef  H5
    top: calc(44px + env(safe-area-inset-top));
    //#endif
    //#ifndef  H5
    top: 0;
    //#endif
    background: rgba(255, 255, 255, 0.95);
    z-index: 1;
  }
  > .content {
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
      font-size: 24rpx;
      .split {
        margin: 0 2rpx;
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
    padding: 20rpx;
    .item {
      height: 90rpx;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: 0 none;
      }
      .text {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90rpx;
        flex: 1;
        -webkit-line-clamp: 1;
      }
    }
    .label {
      width: 60rpx;
      color: $uni-text-color-grey;
      margin-right: 10rpx;
    }
  }
}

/* 商品详情 */
.detail {
  .goods-section {
    font-weight: 600 !important;
  }
  > .content {
    border-radius: $uni-margin-frame;
    overflow: hidden;
    background: #fff;
    margin-top: 20rpx;
    display: flex;
    flex-direction: column;
    .images {
      padding: 10rpx;
      > image {
        width: 100%;
        margin-bottom: 10rpx;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .properties {
    margin: 0 20rpx;
    margin-bottom: 30rpx;
    border: 1px solid $uni-border-color;
    .item {
      display: flex;
      line-height: 2;
      font-size: 24rpx;
      color: $uni-text-color-grey;
      border-bottom: 1px solid $uni-border-color;
      &:last-child {
        border-bottom: none;
      }
    }
    .label {
      width: 200rpx;
      padding: 10rpx 20rpx;
      border-right: 1px solid $uni-border-color;
      &.top {
        color: #333;
        font-weight: bold;
        border-right: none;
      }
    }
    .value {
      padding: 10rpx 20rpx;
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  > .content {
    padding: 0 20rpx 200rpx;
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
    > .goods-item {
      width: 345rpx;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
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
  background: #fff;
  box-shadow: 0 -1rpx 5rpx rgba(200, 200, 200, 0.3);
}
</style>
