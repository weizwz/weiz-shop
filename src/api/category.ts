import { http } from '@/utils/http'
import type { CategoryItem } from '@/types/api'

export const getCategoryIndexAPI = () => {
  return http<CategoryItem[]>({
    url: '/category/index',
    method: 'GET',
  })
}
