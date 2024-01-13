/**
 * 搜索跳转方法
 * @param searchKey 搜索关键词
 * @param search 是否执行搜索事件
 */
export const SearchTo = (searchKey: string, search: boolean = false) => {
  uni.navigateTo({
    url: `/pages/search/index?search=${search ? '1' : '0'}&searchKey=${searchKey}`,
    animationType: 'pop-in',
    animationDuration: 200,
  })
}
