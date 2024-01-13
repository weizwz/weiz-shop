import { http } from '@/utils/http'
import type { CategoryItem, HotCategory, HotPanelItem, HotPictureItem, ParamPage } from '@/types/api'

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
