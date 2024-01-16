import type { CommonObj } from './global'

// 分页类型
export type ParamPage = {
  // 页码
  pageNum: number
  // 每页条数
  pageSize: number
}

// banner类型
export type BannerItem = {
  // 跳转链接
  url: string
  // id
  id: string
  // 图片链接
  imgUrl: string
}

// 分类类型
export type CategoryItem = {
  // id
  id: string
  // 分类名称
  title: string
  // 图标
  icon: string
}

/**
 * 热门推荐
 */
export type HotPanelItem<T> = {
  // id
  id: string
  // 卡片类型
  type: string
  // 类型
  category: string
  // 标题
  title: string
  // 子标题
  desc: string
  // 图片集合
  picture: T[]
}
// picture
export type HotPictureItem = {
  // 图片路径
  src: string
  // 价格
  price?: string
  // 销量
  sales?: number
  // 品牌
  brand?: string
  // 上架日期
  date?: string
}
// 热门分类
export type HotCategory = {
  // id
  id: string
  // 标题
  title: string
  // banner图片
  banner: string
  /** 子类选项 */
  subTypes: HotCategoryItem[]
}
// 热门分类子选项
export type HotCategoryItem = {
  // id
  id: string
  // 子标题
  title: string
  // 总页
  pages: number
  // 商品信息
  goods: GoodsItem[]
}

/**
 * 单个商品
 */
export type GoodsItem<T> = {
  // id
  id: string
  // 类型 video,normal,swiper
  type: string
  // 商品名称
  name?: string
  // 价格
  price?: number
  // 评论数量
  comment?: string
  // 图片路径
  image_url: string | string[]
  // 视频标题
  videoName?: string
  // 视频源
  video_url?: string
  // 图片宽高比
  image_ratio: number
  // 名称标签： 自营/百亿补贴/隔日送
  nameTag?: string
  // 旧价格
  oldPrice?: string
  // 好评率
  commentRate?: string
  // 价格标签 x天最低价 h=37
  priceTag?: string
  // 付款标签 先享后付
  payTag?: boolean
  // 排行榜 h=62
  rank?: T
}
// 商品排行数据
export type RankItem = {
  // 排名
  rank: number
  // 排名分类
  type: string
  // 排名链接
  link: string
}
// 商品属性
export type GoodsProp = {
  // id
  id: string
  // 名称
  name: string
  // 值
  value?: string
  // 级别
  level: number
}
// 商品规格
export type GoodsSpec = {
  // id
  id: string
  // 名称
  name: string
  // 价格
  price: string
  // 图片
  image_url: string
}

/**
 * 热搜排行榜
 */
export type SearchHot = {
  // id
  id: string
  // name
  name: string
  // 描述
  desc: string
  // 排名
  rank: number
  // 热度
  hot: string
  // 图片
  img: string
}

/**
 * 一级分类
 */
export type CategoryTop<T> = {
  // id
  id: string
  // 名称
  name: string
  // banner图片
  bannerImg: T[]
}
// 二级分类
export type CategoryTwo<CategoryThree> = {
  // id
  id: string
  // 名称
  name: string
  // 子类
  children: CategoryThree[]
}
// 三级分类
export type CategoryThree = {
  // id
  id: string
  // 名称
  name: string
  // 子类
  image_url: string
}
