import { http } from '@/utils/http'

export const getSearchTxtAPI = () => {
  return http<string[]>({
    url: '/search/txt',
    method: 'GET',
  })
}

export const getWantSearchAPI = () => {
  return http<string[]>({
    url: '/search/want',
    method: 'GET',
  })
}

export const getHotSearchAPI = () => {
  return http<string[]>({
    url: '/search/hot',
    method: 'GET',
  })
}
