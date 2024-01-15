import { http } from '@/utils/http'
import type {
  BannerItem,
  CategoryItem,
  CategoryThree,
  CategoryTwo,
  GoodsItem,
  HotCategory,
  HotPanelItem,
  HotPictureItem,
  ParamPage,
  RankItem,
} from '@/types/api'
import type { CategoryTop } from '@/types/api'

export const getCategoryIndexAPI = () => {
  return http<CategoryItem[]>({
    url: '/category/index',
    method: 'GET',
  })
}

export const getHotIndexAPI = () => {
  return http<HotPanelItem<HotPictureItem>[]>({
    url: '/category/hot',
    method: 'GET',
  })
}

type HotParams = ParamPage & { subType?: string }
export const getCategoryHotAPI = (url: string, data: HotParams) => {
  return http<HotCategory>({
    url: '/category/hot/' + url,
    method: 'POST',
    data,
  })
}

// 一级分类
export const getCategoryTopAPI = () => {
  return http<CategoryTop<BannerItem>[]>({
    url: '/category/top',
    method: 'GET',
  })
}
// 二级分类
export const getCategoryTwoAPI = (id: string) => {
  return http<CategoryTwo<CategoryThree>[]>({
    url: `/category/two?id=${id}`,
    method: 'GET',
  })
}

// 同类推荐-商品详情页
export const getCategorySuggestAPI = (id: string) => {
  return http<GoodsItem<RankItem>[]>({
    url: `/category/suggest?id=${id}`,
    method: 'GET',
  })
}
