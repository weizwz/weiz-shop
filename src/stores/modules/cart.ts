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
      // 有就加数量，否则新增
      for (let i = 0; i < carts.value.length; i++) {
        let item = carts.value[i]
        if (item.id === val.id) {
          item = {
            ...val,
            number: item.number + val.number,
          }
          carts.value[i] = item
          return
        }
      }

      carts.value.push(val)
    }

    // 删除商品
    const delCarts = (id: string) => {
      carts.value = carts.value.filter((item: CartItem) => {
        return id !== item.id
      })
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
