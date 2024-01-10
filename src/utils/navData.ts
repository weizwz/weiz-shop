/**
 * navbar 相关数据
 */
export const navData = () => {
  // 获取屏幕边界到安全区域距离 https://uniapp.dcloud.net.cn/api/system/getWindowInfo.html#getwindowinfo
  const { safeAreaInsets, screenWidth } = uni.getWindowInfo()
  // 获取胶囊信息 https://uniapp.dcloud.net.cn/api/ui/menuButton.html#getmenubuttonboundingclientrect
  let menuButtonInfo = { top: 0, left: 0, right: 0, bottom: 0, height: 32, width: 0 }
  //#ifdef MP-WEIXIN
  menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  //#endif

  const top = menuButtonInfo.top || safeAreaInsets?.top + 10
  const marginRight = menuButtonInfo.right ? screenWidth - menuButtonInfo.right : 0
  return {
    ...menuButtonInfo,
    top,
    marginRight,
    marginBottom: 10,
  }
}
