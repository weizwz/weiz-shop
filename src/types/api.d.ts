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

// 热门推荐
export type HotPanelItem = {
  // id
  id: string
  // 标题
  title: string
  // 子标题
  desc: string
  // 图片集合
  picture: string[]
}
