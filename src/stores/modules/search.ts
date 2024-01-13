import type { SearchInfo } from '@/types/store'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useSearchStore = defineStore(
  'search',
  () => {
    const state = ref<SearchInfo>({
      searchKey: [],
    })

    // 获取信息
    const getSearchInfo = () => {
      return state.value
    }

    // 保存搜索信息
    const setSearchInfo = (val: SearchInfo) => {
      state.value = { ...val }
    }

    // 获取搜索词
    const getSearchInfoKey = () => {
      return state.value.searchKey
    }
    // 保存搜索词
    const setSearchInfoKey = (val: string) => {
      let keys = state.value.searchKey
      // 去重，先删除
      keys = keys.filter((item) => {
        return val !== item
      })
      // 后加入
      keys.unshift(val)
      if (keys.length > 20) {
        keys = keys.slice(0, 20)
      }

      state.value.searchKey = keys
    }
    // 清理搜索词
    const clearSearchInfoKey = () => {
      state.value.searchKey = []
    }

    // 清理搜索信息
    const clearSearchInfo = () => {
      state.value = {
        searchKey: [],
      }
    }

    return {
      state,
      getSearchInfo,
      setSearchInfo,
      getSearchInfoKey,
      setSearchInfoKey,
      clearSearchInfoKey,
      clearSearchInfo,
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
