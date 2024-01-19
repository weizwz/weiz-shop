import { useUserStore } from '@/stores'
import { goLogin } from '@/utils/login'
import { watch } from 'vue'

export const watchLoginStatus = () => {
  const userStore = useUserStore()
  const userInfo = userStore.userInfo
  const status = goLogin(userInfo)

  watch(
    () => userStore.userInfo,
    (val) => {
      goLogin(val)
    },
  )

  return status
}
