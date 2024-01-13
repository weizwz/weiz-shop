import WeizCarousel from '@/components/WeizCarousel/index.vue'
import WeizCardList from '@/components/WeizCardList/index.vue'
import WeizCategory from '@/components/WeizCategory/index.vue'
import WeizGoods from '@/components/WeizGoods/index.vue'
import WeizHotPanel from '@/components/WeizHotPanel/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    WeizCarousel: typeof WeizCarousel
    WeizCardList: typeof WeizCardList
    WeizCategory: typeof WeizCategory
    WeizGoods: typeof WeizGoods
    WeizHotPanel: typeof WeizHotPanel
  }
}

// 组件实例类型
export type CardListInstance = InstanceType<typeof WeizCardList>

// 搜索url传参参数
export type SearchOption = {
  // 搜索字段
  searchKey: string
  // 是否执行搜索
  search: stringBoolean
}
