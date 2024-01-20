import type { CartItem } from '@/types/global'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useCartsStore = defineStore(
  'carts',
  () => {
    // 购物车信息
    const carts = ref<CartItem[]>([])

    // 新增商品
    const addCart = (val: CartItem) => {
      // 遍历去重
      let hasVal = false
      for (let item of carts.value) {
        if (item.id === val.id) {
          item = {
            ...val,
          }
          hasVal = true
        }
      }
      if (!hasVal) carts.value.push(val)
    }

    // 删除商品
    const delCarts = (id: string) => {
      carts.value = carts.value.filter((item) => {
        return id !== item.id
      })
      console.log(carts.value)
    }

    // 批量删除
    const delBatchCarts = (ids: string[]) => {
      for (const item of ids) {
        delCarts(item)
      }
    }

    return {
      carts,
      addCart,
      delCarts,
      delBatchCarts,
    }
  },
  // TODO: 持久化
  {
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      },
    },
  },
)
