import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, HotCategory, HotPanelItem, HotPictureItem, ParamPage } from '@/types/api'
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
