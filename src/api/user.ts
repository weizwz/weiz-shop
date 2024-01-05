import { http } from '@/utils/http'

export const getUserInfoAPI = (data: any) => {
  return http({
    url: '/user/info',
    method: 'POST',
    data,
  })
}
