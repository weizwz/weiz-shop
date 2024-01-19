import type { GoodsItem, GoodsSpec } from './api'

/**
 * 处理动态变量
 * const obj: stringKey = { img_index_1, img_index_2, img_index_3 }
 * const a = obj['img_index_' + 1]
 */
export type stringKey = Record<string, string>

// 布尔类型字符串
export type stringBoolean = '1' | '0'

/**
 * 通用类型
 */
export type CommonObj<T> = {
  // id
  id: string
  // 名称
  name: string
  // 描述
  desc?: string
  // 链接
  link?: string
  // img
  image_url?: string
  // 子集
  children?: T[]
}

/** 小程序登录 登录用户信息 */
export type LoginResult = {
  // 用户ID
  id: number
  // 头像
  avatar: string
  // 账户名
  account: string
  // 昵称
  nickname?: string
  // 手机号
  mobile: string
  // 登录凭证
  token: string
  // 性别
  gender?: Gender
  // 生日
  birthday?: string
  // 城市
  city?: string
}
/** 普通登录 */
export type LoginParams = {
  // 账号
  account: string
  // 密码
  password: string
}
/** 性别 */
export type Gender = {
  // id
  value: string
  // 名称
  text: string
}

/** 购物车 */
export type CartItem = GoodsItem & {
  // 数量
  number: number
  // min
  minMun?: number | 1
  /// max
  maxNum?: number | 100
  // 选中状态
  checked: boolean
  // 库存
  stock?: number
  // 规格
  specification: GoodsSpec
}
