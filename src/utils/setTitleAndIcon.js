/**
 * 读取路由配置设置title和icon
 * @param context
 */
export function setTitleAndIcon(route) {
  document.title = route.name
  const iconUrl = route.meta.iconUrl
  const iconNode = document.createElement('link')
  iconNode.rel = 'shortcut icon'
  iconNode.href = iconUrl
  document.getElementsByTagName('head')[0].appendChild(iconNode)
}
