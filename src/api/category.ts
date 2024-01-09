import { http } from '@/utils/http'
import type { CategoryItem, HotPanelItem, HotPcitureItem } from '@/types/api'

export const getCategoryIndexAPI = () => {
  return http<CategoryItem[]>({
    url: '/category/index',
    method: 'GET',
  })
}

export const getHotIndexAPI = () => {
  return http<HotPanelItem<HotPcitureItem>[]>({
    url: '/category/hot',
    method: 'GET',
  })
}
