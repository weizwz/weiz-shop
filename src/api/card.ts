import { http } from '@/utils/http'
import type { GoodsItem, ParamPage, RankItem } from '@/types/api'

export const getCardListIndexAPI = (data: ParamPage) => {
  return http<GoodsItem<RankItem>[]>({
    url: '/card/index',
    method: 'POST',
    data,
  })
}
