export function setTitleAndIcon(context) {
  document.title = context.$route.name
  const iconurl = context.$route.meta.iconurl
  const iconNode = document.createElement('link')
  iconNode.rel = 'shortcut icon'
  iconNode.href = iconurl
  document.getElementsByTagName('head')[0].appendChild(iconNode)
}
