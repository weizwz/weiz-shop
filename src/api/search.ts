import { http } from '@/utils/http'

export const getSearchTxtAPI = () => {
  return http<string[]>({
    url: '/search/txt',
    method: 'GET',
  })
}
