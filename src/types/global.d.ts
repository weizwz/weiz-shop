/**
 * 处理动态变量
 * const obj: stringKey = { img_index_1, img_index_2, img_index_3 }
 * const a = obj['img_index_' + 1]
 */
export type stringKey = Record<string, string>

// 布尔类型字符串
export type stringBoolean = '1' | '0'
