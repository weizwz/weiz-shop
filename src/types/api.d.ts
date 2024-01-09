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
  // 标题
  title: string
  // 子标题
  desc: string
  // 图片集合
  picture: T[]
}
// picture
export type HotPcitureItem = {
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
