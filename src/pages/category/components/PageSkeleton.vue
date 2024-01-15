<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search-top search-top">
        <view is="components/WeizSearch/index">
          <view
            class="search WeizSearch-index--search white WeizSearch-index--white"
            style="height: 36px; line-height: 36px"
          >
            <label
              class="iconfont WeizSearch-index--iconfont icon-sousuo WeizSearch-index--icon-sousuo sk-pseudo sk-pseudo-circle"
            ></label>
            <view class="search-txt-wrapper WeizSearch-index--search-txt-wrapper" style="height: 36px">
              <swiper
                :autoplay="false"
                :circular="true"
                class="search-txt-content WeizSearch-index--search-txt-content"
                :duration="1000"
                :interval="3000"
                :vertical="true"
                :current="0"
              >
                <swiper-item
                  class="search-txt-item WeizSearch-index--search-txt-item"
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0px, 1000%) translateZ(0px);
                  "
                >
                  <view
                    class="search-txt WeizSearch-index--search-txt sk-transparent sk-text-30-5556-697 sk-text"
                    style="height: 36px; line-height: 36px"
                    >坚果大礼包</view
                  >
                </swiper-item>
              </swiper>
            </view>
            <button
              class="weiz-btn WeizSearch-index--weiz-btn weiz-btn-search WeizSearch-index--weiz-btn-search sk-transparent sk-button sk-pseudo sk-pseudo-circle"
              size="mini"
              style="height: 30px; line-height: 30px; border-radius: 30px"
            >
              搜索
            </button>
          </view>
        </view>
      </view>
      <view class="categories categories">
        <scroll-view :scroll-y="true" class="primary primary">
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-534 sk-text">坚果</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-467 sk-text">点心</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-217 sk-text">饼干</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-795 sk-text">糖果</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-962 sk-text">低卡</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-711 sk-text">卤味</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-189 sk-text">宵夜</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-19 sk-text">养生</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-224 sk-text">传统</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-158 sk-text">充饥</text>
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary secondary">
          <view is="components/WeizCarousel/index" class="categories-banner categories-banner">
            <view class="carousel index--carousel small index--small">
              <swiper :autoplay="false" :circular="true" class="swiper index--swiper" :interval="3000" :current="0">
                <swiper-item
                  style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px)"
                >
                  <navigator class="navigator index--navigator" hover-class="none">
                    <image class="image index--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator index--indicator" style="bottom: 6px">
                <text class="dot index--dot"></text>
                <text class="dot index--dot"></text>
                <text class="dot index--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-6667-29 sk-text">松子</text>
            </view>
            <view class="section section">
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-1 sk-text" style="background-position-x: 50%"
                  >东北红松</view
                >
              </view>
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-895 sk-text"
                  style="background-position-x: 50%"
                  >刚果红松</view
                >
              </view>
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-206 sk-text"
                  style="background-position-x: 50%"
                  >进口开口松</view
                >
              </view>
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-125 sk-text"
                  style="background-position-x: 50%"
                  >油炸松子</view
                >
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-6667-183 sk-text">开心果</text>
            </view>
            <view class="section section">
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-482 sk-text"
                  style="background-position-x: 50%"
                  >原味</view
                >
              </view>
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-349 sk-text"
                  style="background-position-x: 50%"
                  >罐装</view
                >
              </view>
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-318 sk-text"
                  style="background-position-x: 50%"
                  >袋装</view
                >
              </view>
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
              </view>
              <view class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
//#ifdef  APP-PLUS || H5
// 搜索组件
.search {
  width: 100%;
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
  &.white {
    color: inherit;
    background: #f6f6f6;
  }
}
.search-txt-content {
  height: 100%;
}
.search-txt-item {
  height: auto !important;
}
//分类页
.search-top {
  padding: 0 $uni-margin-frame;
  margin: $uni-margin-frame 0;
}
/* 分类 */
.categories {
  flex: 1;
  min-height: 400rpx;
  display: flex;
}
.categories-banner {
  height: 200rpx;
}
/* 一级分类 */
.primary {
  overflow: hidden;
  width: 180rpx;
  flex: none;
  background-color: #f6f6f6;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96rpx;
    font-size: 26rpx;
    color: #595c63;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 42rpx;
      bottom: 0;
      width: 96rpx;
      border-top: 1rpx solid #e3e4e7;
    }
  }
  .active {
    background-color: #fff;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8rpx;
      height: 100%;
      background-color: $uni-color-main;
    }
  }
}
.primary .item:last-child::after,
.primary .active::after {
  display: none;
}
/* 二级分类 */
.secondary {
  background-color: #fff;
  .panel {
    margin: $uni-margin-frame $uni-margin-frame 0;
  }
  .title {
    height: 60rpx;
    line-height: 60rpx;
    color: $uni-text-color;
    font-size: 28rpx;
    border-bottom: 1rpx solid $uni-line-color;
  }
  .section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0 0;
    .goods {
      width: 163.33rpx;
      margin: 0rpx $uni-margin-frame $uni-margin-frame 0;
      &:nth-child(3n) {
        margin-right: 0;
      }
      image {
        width: 163.33rpx;
        height: 163.33rpx;
        border-radius: 10rpx;
      }
      .name {
        font-size: 22rpx;
        color: $uni-text-color;
        text-align: center;
      }
    }
  }
}
// 轮播
.carousel {
  height: 200rpx;
  margin: 0 $uni-margin-frame;
  border-radius: $uni-margin-frame;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
}
//#endif
.sk-transparent {
  color: transparent !important;
}
.sk-text-30-5556-697 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-30-5556-100 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-30-5556-698 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-30-5556-586 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-30-5556-846 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-30-5556-332 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-30-5556-219 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-30-5556-949 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-30-5556-540 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-30-5556-329 {
  background-image: linear-gradient(transparent 30.5556%, #eeeeee 0%, #eeeeee 69.4444%, transparent 0%) !important;
  background-size: 100% 72rpx;
  position: relative !important;
}
.sk-text-14-2857-534 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-467 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-217 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-795 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-962 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-711 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-189 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-19 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-224 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-158 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-26-6667-29 {
  background-image: linear-gradient(transparent 26.6667%, #eeeeee 0%, #eeeeee 73.3333%, transparent 0%) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-14-2857-1 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-895 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-206 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-125 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-26-6667-183 {
  background-image: linear-gradient(transparent 26.6667%, #eeeeee 0%, #eeeeee 73.3333%, transparent 0%) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-14-2857-482 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-349 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-318 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
