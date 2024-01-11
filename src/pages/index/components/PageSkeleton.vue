<template name="skeleton">
  <view is="components/WeizCarousel/index">
    <view class="carousel WeizCarousel-index--carousel">
      <swiper
        :autoplay="false"
        :circular="true"
        class="swiper WeizCarousel-index--swiper"
        :interval="3000"
        :current="0"
      >
        <swiper-item
          style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px)"
        >
          <navigator class="navigator WeizCarousel-index--navigator" hover-class="none">
            <image class="image WeizCarousel-index--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator WeizCarousel-index--indicator" style="bottom: 12px">
        <text class="dot WeizCarousel-index--dot active WeizCarousel-index--active"></text>
        <text class="dot WeizCarousel-index--dot"></text>
        <text class="dot WeizCarousel-index--dot"></text>
      </view>
    </view>
  </view>
  <view is="components/WeizCategory/index">
    <view class="category WeizCategory-index--category sk-image">
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-yinshi WeizCategory-index--icon-yinshi sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-815 sk-text">严选</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-dianxin WeizCategory-index--icon-dianxin sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-408 sk-text">点心</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-yanmai WeizCategory-index--icon-yanmai sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-853 sk-text">燕麦</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-huo WeizCategory-index--icon-huo sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-612 sk-text">烧烤</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-yangshenghu WeizCategory-index--icon-yangshenghu sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-152 sk-text">咖啡</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-baojian WeizCategory-index--icon-baojian sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-493 sk-text">牛奶</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-toukui WeizCategory-index--icon-toukui sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-496 sk-text">披萨</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-meirongyangyan WeizCategory-index--icon-meirongyangyan sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-880 sk-text">面膜</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-jianguo WeizCategory-index--icon-jianguo sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-text-14-2857-377 sk-text">坚果</text>
      </navigator>
      <navigator class="category-item WeizCategory-index--category-item" hover-class="none">
        <label
          class="iconfont WeizCategory-index--iconfont icon-chahu WeizCategory-index--icon-chahu sk-pseudo sk-pseudo-circle"
        ></label>
        <text class="text WeizCategory-index--text sk-transparent sk-opacity">茶</text>
      </navigator>
    </view>
  </view>
  <view is="components/WeizHotPanel/index">
    <view class="panel WeizHotPanel-index--panel hot WeizHotPanel-index--hot">
      <view class="item WeizHotPanel-index--item">
        <view class="title WeizHotPanel-index--title">
          <text class="title-text WeizHotPanel-index--title-text sk-transparent sk-text-14-2857-328 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc WeizHotPanel-index--title-desc sk-transparent sk-text-14-2857-446 sk-text"
            >年度最低</text
          >
        </view>
        <navigator class="cards WeizHotPanel-index--cards" hover-class="none">
          <view class="img-swiper WeizHotPanel-index--img-swiper">
            <swiper
              :autoplay="false"
              :circular="true"
              class="img-swiper-content WeizHotPanel-index--img-swiper-content"
              :duration="600"
              :interval="3000"
              :vertical="true"
              :current="0"
            >
              <swiper-item
                class="img-swiper-item WeizHotPanel-index--img-swiper-item"
                style="position: absolute; width: 100%; height: 100%; transform: translate(0px, 0%) translateZ(0px)"
              >
                <view
                  is="components/WeizHotPanel/ImgPanel"
                  class="img-swiper-item-panel WeizHotPanel-index--img-swiper-item-panel"
                >
                  <view class="img-content ImgPanel--img-content">
                    <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                    <view class="mark-wrapper ImgPanel--mark-wrapper">
                      <view class="mark ImgPanel--mark price ImgPanel--price sk-transparent sk-text-16-6667-902 sk-text"
                        >¥ 39.9</view
                      >
                    </view>
                    <view
                      class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales"
                    ></view>
                    <view
                      class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand"
                    ></view>
                    <view
                      class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date"
                    ></view>
                  </view>
                </view>
                <view
                  is="components/WeizHotPanel/ImgPanel"
                  class="img-swiper-item-panel WeizHotPanel-index--img-swiper-item-panel"
                >
                  <view class="img-content ImgPanel--img-content">
                    <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                    <view class="mark-wrapper ImgPanel--mark-wrapper">
                      <view class="mark ImgPanel--mark price ImgPanel--price sk-transparent sk-text-16-6667-498 sk-text"
                        >¥ 18.8</view
                      >
                    </view>
                    <view
                      class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales"
                    ></view>
                    <view
                      class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-brand ImgPanel--mark-wrapper-brand"
                    ></view>
                    <view
                      class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-date ImgPanel--mark-wrapper-date"
                    ></view>
                  </view>
                </view>
              </swiper-item>
            </swiper>
          </view>
        </navigator>
      </view>
      <view class="item WeizHotPanel-index--item">
        <view class="title WeizHotPanel-index--title">
          <text class="title-text WeizHotPanel-index--title-text sk-transparent sk-text-14-2857-281 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc WeizHotPanel-index--title-desc sk-transparent sk-text-14-2857-383 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards WeizHotPanel-index--cards" hover-class="none">
          <view class="img-wrapper WeizHotPanel-index--img-wrapper">
            <view is="components/WeizHotPanel/ImgPanel">
              <view class="img-content ImgPanel--img-content">
                <image class="image ImgPanel--image sk-image" mode="aspectFill"></image>
                <view class="mark-wrapper ImgPanel--mark-wrapper">
                  <view class="mark ImgPanel--mark price ImgPanel--price sk-transparent sk-text-16-6667-686 sk-text"
                    >¥ 32.9</view
                  >
                </view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales">
                  <view
                    class="mark ImgPanel--mark sales ImgPanel--sales sk-transparent sk-text-16-6667-142 sk-text"
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
                  <view class="mark ImgPanel--mark price ImgPanel--price sk-transparent sk-text-16-6667-611 sk-text"
                    >¥ 8.8</view
                  >
                </view>
                <view class="mark-wrapper ImgPanel--mark-wrapper mark-wrapper-sales ImgPanel--mark-wrapper-sales">
                  <view
                    class="mark ImgPanel--mark sales ImgPanel--sales sk-transparent sk-text-16-6667-971 sk-text"
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
          <text class="title-text WeizHotPanel-index--title-text sk-transparent sk-text-14-2857-477 sk-text"
            >畅销全球</text
          >
          <text class="title-desc WeizHotPanel-index--title-desc sk-transparent sk-text-14-2857-51 sk-text"
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
                  <view class="mark ImgPanel--mark brand ImgPanel--brand sk-transparent sk-text-16-6667-802 sk-text"
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
                  <view class="mark ImgPanel--mark brand ImgPanel--brand sk-transparent sk-text-16-6667-335 sk-text"
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
          <text class="title-text WeizHotPanel-index--title-text sk-transparent sk-text-14-2857-971 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc WeizHotPanel-index--title-desc sk-transparent sk-text-14-2857-890 sk-text"
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
                  <view class="mark ImgPanel--mark date ImgPanel--date sk-transparent sk-text-16-6667-882 sk-text"
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
                  <view class="mark ImgPanel--mark date ImgPanel--date sk-transparent sk-text-16-6667-646 sk-text"
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
        class="card-list-left WeizCardList-index--card-list-left card-list-wrapper WeizCardList-index--card-list-wrapper"
      >
        <view class="card-list-item WeizCardList-index--card-list-item">
          <view is="components/WeizGoods/index">
            <navigator class="goods index--goods" hover-class="none">
              <swiper
                :autoplay="false"
                :circular="true"
                class="goods-swiper index--goods-swiper"
                :duration="600"
                indicator-active-color="#fff"
                indicator-color="rgba(255, 255, 255, 0.6)"
                :indicator-dots="true"
                :interval="3000"
                style="height: calc(1.4285 * (50vw - 15px))"
                :current="0"
              >
                <swiper-item
                  class="goods-swiper-item index--goods-swiper-item"
                  style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px)"
                >
                  <image mode="widthFix" style="height: 246.719px" class="sk-image"></image>
                </swiper-item>
              </swiper>
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
                <image mode="widthFix" style="height: 172.703px" class="sk-image"></image>
              </view>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-31-2500-462 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-31-2500-417 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-31-2500-247 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-31-2500-208 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-31-2500-371 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-31-2500-319 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-31-2500-661 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-31-2500-463 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-31-2500-648 {
  background-image: linear-gradient(transparent 31.25%, #eeeeee 0%, #eeeeee 68.75%, transparent 0%) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-14-2857-815 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-408 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-853 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-612 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-152 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-493 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-496 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-880 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-377 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-328 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-446 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-16-6667-902 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-16-6667-498 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-14-2857-281 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-383 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-16-6667-686 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-16-6667-142 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-16-6667-611 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-16-6667-971 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-14-2857-477 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-51 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-16-6667-802 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-16-6667-335 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-14-2857-971 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-890 {
  background-image: linear-gradient(transparent 14.2857%, #eeeeee 0%, #eeeeee 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-16-6667-882 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-16-6667-646 {
  background-image: linear-gradient(transparent 16.6667%, #eeeeee 0%, #eeeeee 83.3333%, transparent 0%) !important;
  background-size: 100% 30rpx;
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
