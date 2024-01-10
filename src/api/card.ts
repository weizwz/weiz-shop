import { http } from '@/utils/http'
import type { GoodsItem, RankItem } from '@/types/api'

export const getCardListIndexAPI = (data: any) => {
  return http<GoodsItem<RankItem>[]>({
    url: '/card/index',
    method: 'POST',
    data,
  })
}
