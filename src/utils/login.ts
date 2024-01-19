import type { LoginResult } from '@/types/global'

export const goLogin = (user: LoginResult | undefined) => {
  if (!user || !user?.id) {
    uni.redirectTo({
      url: '/pages/login/index',
    })
    return false
  }
  return true
}
