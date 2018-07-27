export function setTitleAndIcon(context) {
  document.title = context.$route.name
  const iconUrl = context.$route.meta.iconUrl
  const iconNode = document.createElement('link')
  iconNode.rel = 'shortcut icon'
  iconNode.href = iconUrl
  document.getElementsByTagName('head')[0].appendChild(iconNode)
}
