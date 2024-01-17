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
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}
