<template name="skeleton">
  <view is="components/WeizCarousel/index">
    <view class="carousel WeizCarousel-index--carousel">
      <swiper
        :autoplay="false"
        :circular="true"
        class="swiper WeizCarousel-index--swiper"
        :interval="3000"
        :current="0"
      ></swiper>
      <view class="indicator WeizCarousel-index--indicator" style="bottom: 6px">
        <text class="dot WeizCarousel-index--dot"></text>
        <text class="dot WeizCarousel-index--dot"></text>
        <text class="dot WeizCarousel-index--dot"></text>
      </view>
    </view>
  </view>
  <view is="components/WeizCategory/index">
    <view class="category WeizCategory-index--category">
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-yinshi WeizCategory-index--icon-yinshi sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-510 sk-text">严选</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-dianxin WeizCategory-index--icon-dianxin sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-490 sk-text">点心</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-yanmai WeizCategory-index--icon-yanmai sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-396 sk-text">燕麦</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-huo WeizCategory-index--icon-huo sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-338 sk-text">烧烤</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-yangshenghu WeizCategory-index--icon-yangshenghu sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-577 sk-text">咖啡</text>
      </navigator>
    </view>
  </view>
  <view is="components/WeizHotPanel/index">
    <view class="panel WeizHotPanel-index--panel hot WeizHotPanel-index--hot">
      <view class="item WeizHotPanel-index--item">
        <view class="title WeizHotPanel-index--title">
          <text class="title-text WeizHotPanel-index--title-text sk-transparent sk-text-14-2857-455 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc WeizHotPanel-index--title-desc sk-transparent sk-text-14-2857-756 sk-text"
            >年度最低</text
          >
        </view>
        <navigator class="cards WeizHotPanel-index--cards" hover-class="none">
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper">
                  <view class="mark ImgPanel--mark price ImgPanel--price sk-transparent sk-text-15-6250-28 sk-text"
                    >¥ 32.9</view
                  >
                </view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales">
                  <view
                    class="mark ImgPanel--mark sales ImgPanel--sales sk-transparent sk-text-15-6250-283 sk-text"
                    style="background-position-x: 50%"
                    >月销10w+件</view
                  >
                </view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand"
                ></view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date"></view>
              </view>
            </view>
          </view>
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper">
                  <view class="mark ImgPanel--mark price ImgPanel--price sk-transparent sk-text-15-6250-600 sk-text"
                    >¥ 8.8</view
                  >
                </view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales">
                  <view
                    class="mark ImgPanel--mark sales ImgPanel--sales sk-transparent sk-text-15-6250-585 sk-text"
                    style="background-position-x: 50%"
                    >月销9w+件</view
                  >
                </view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand"
                ></view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date"></view>
              </view>
            </view>
          </view>
        </navigator>
      </view>
      <view class="item WeizHotPanel-index--item">
        <view class="title WeizHotPanel-index--title">
          <text class="title-text WeizHotPanel-index--title-text sk-transparent sk-text-14-2857-855 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc WeizHotPanel-index--title-desc sk-transparent sk-text-14-2857-795 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards WeizHotPanel-index--cards" hover-class="none">
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper">
                  <view class="mark ImgPanel--mark price ImgPanel--price sk-transparent sk-text-15-6250-28 sk-text"
                    >¥ 32.9</view
                  >
                </view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales">
                  <view
                    class="mark ImgPanel--mark sales ImgPanel--sales sk-transparent sk-text-15-6250-283 sk-text"
                    style="background-position-x: 50%"
                    >月销10w+件</view
                  >
                </view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand"
                ></view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date"></view>
              </view>
            </view>
          </view>
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper">
                  <view class="mark ImgPanel--mark price ImgPanel--price sk-transparent sk-text-15-6250-600 sk-text"
                    >¥ 8.8</view
                  >
                </view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales">
                  <view
                    class="mark ImgPanel--mark sales ImgPanel--sales sk-transparent sk-text-15-6250-585 sk-text"
                    style="background-position-x: 50%"
                    >月销9w+件</view
                  >
                </view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand"
                ></view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date"></view>
              </view>
            </view>
          </view>
        </navigator>
      </view>
      <view class="item WeizHotPanel-index--item">
        <view class="title WeizHotPanel-index--title">
          <text class="title-text WeizHotPanel-index--title-text sk-transparent sk-text-14-2857-129 sk-text"
            >畅销全球</text
          >
          <text class="title-desc WeizHotPanel-index--title-desc sk-transparent sk-text-14-2857-521 sk-text"
            >大牌保证</text
          >
        </view>
        <navigator class="cards WeizHotPanel-index--cards" hover-class="none">
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper"></view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales"
                ></view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand">
                  <view class="mark ImgPanel--mark brand ImgPanel--brand sk-transparent sk-text-15-6250-566 sk-text"
                    >良品PU</view
                  >
                </view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date"></view>
              </view>
            </view>
          </view>
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper"></view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales"
                ></view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand">
                  <view class="mark ImgPanel--mark brand ImgPanel--brand sk-transparent sk-text-15-6250-520 sk-text"
                    >FOODS</view
                  >
                </view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date"></view>
              </view>
            </view>
          </view>
        </navigator>
      </view>
      <view class="item WeizHotPanel-index--item">
        <view class="title WeizHotPanel-index--title">
          <text class="title-text WeizHotPanel-index--title-text sk-transparent sk-text-14-2857-329 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc WeizHotPanel-index--title-desc sk-transparent sk-text-14-2857-214 sk-text"
            >近期上新</text
          >
        </view>
        <navigator class="cards WeizHotPanel-index--cards" hover-class="none">
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper"></view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales"
                ></view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand"
                ></view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date">
                  <view class="mark ImgPanel--mark date ImgPanel--date sk-transparent sk-text-15-6250-589 sk-text"
                    >今日上架</view
                  >
                </view>
              </view>
            </view>
          </view>
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper"></view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales"
                ></view>
                <view
                  class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand"
                ></view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date">
                  <view class="mark ImgPanel--mark date ImgPanel--date sk-transparent sk-text-15-6250-739 sk-text"
                    >3天前上架</view
                  >
                </view>
              </view>
            </view>
          </view>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/WeizCardList/index" class="r r">
    <view class="card-list WeizCardList-index--card-list">
      <view
        class="goodsRightList WeizCardList-index--goodsRightList card-list-wrapper WeizCardList-index--card-list-wrapper"
      >
        <view class="card-list-item WeizCardList-index--card-list-item">
          <view is="components/WeizGoods/index">
            <navigator class="goods index--goods" hover-class="none">
              <view class="goods-normal index--goods-normal">
                <image mode="widthFix" style="height: 191.141px" class="sk-image"></image>
              </view>
            </navigator>
          </view>
        </view>
      </view>
      <view
        class="goodsRightList WeizCardList-index--goodsRightList card-list-wrapper WeizCardList-index--card-list-wrapper"
      >
        <view class="card-list-item WeizCardList-index--card-list-item">
          <view is="components/WeizGoods/index">
            <navigator class="goods index--goods" hover-class="none">
              <view class="goods-normal index--goods-normal">
                <image mode="widthFix" style="height: 191.141px" class="sk-image"></image>
              </view>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-31-2500-631 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-31-2500-770 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-31-2500-253 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-31-2500-423 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-31-2500-497 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-31-2500-686 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-31-2500-716 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-31-2500-440 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-31-2500-902 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 57.971rpx;
  position: relative !important;
}
.sk-text-14-2857-510 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-490 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-396 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-338 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-577 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-455 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-756 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-855 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-795 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-15-6250-28 {
  background-image: linear-gradient(transparent 15.625%, #eeeeee 0%, #eeeeee 84.375%, transparent 0%) !important;
  background-size: 100% 28.9855rpx;
  position: relative !important;
}
.sk-text-15-6250-283 {
  background-image: linear-gradient(transparent 15.625%, #eeeeee 0%, #eeeeee 84.375%, transparent 0%) !important;
  background-size: 100% 28.9855rpx;
  position: relative !important;
}
.sk-text-15-6250-600 {
  background-image: linear-gradient(transparent 15.625%, #eeeeee 0%, #eeeeee 84.375%, transparent 0%) !important;
  background-size: 100% 28.9855rpx;
  position: relative !important;
}
.sk-text-15-6250-585 {
  background-image: linear-gradient(transparent 15.625%, #eeeeee 0%, #eeeeee 84.375%, transparent 0%) !important;
  background-size: 100% 28.9855rpx;
  position: relative !important;
}
.sk-text-14-2857-129 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-521 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-15-6250-566 {
  background-image: linear-gradient(transparent 15.625%, #eeeeee 0%, #eeeeee 84.375%, transparent 0%) !important;
  background-size: 100% 28.9855rpx;
  position: relative !important;
}
.sk-text-15-6250-520 {
  background-image: linear-gradient(transparent 15.625%, #eeeeee 0%, #eeeeee 84.375%, transparent 0%) !important;
  background-size: 100% 28.9855rpx;
  position: relative !important;
}
.sk-text-14-2857-329 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-214 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-15-6250-589 {
  background-image: linear-gradient(transparent 15.625%, #eeeeee 0%, #eeeeee 84.375%, transparent 0%) !important;
  background-size: 100% 28.9855rpx;
  position: relative !important;
}
.sk-text-15-6250-739 {
  background-image: linear-gradient(transparent 15.625%, #eeeeee 0%, #eeeeee 84.375%, transparent 0%) !important;
  background-size: 100% 28.9855rpx;
  position: relative !important;
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
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
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
