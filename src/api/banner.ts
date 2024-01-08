import { http } from '@/utils/http'
import type { BannerItem } from '@/types/home'

export const getBannerAPI = (data: String) => {
  return http<BannerItem[]>({
    url: '/banner?type=' + data,
    method: 'GET',
  })
}
