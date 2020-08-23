import http from './http'
import _ from 'lodash'

export const COLORS = {
  '#001529': '$--layout-aside-background-color',
  '#b8c7ce': '$--layout-aside-text-color'
}

document.styleSheets.forEach(styleSheet => {
  const url = styleSheet.href
  if (/^.*?\/app\..*$/gi.test(url)) {
    loadTheme(url)
  }
})

const changed = {
  '$--layout-aside-background-color': '#fff',
  '$--layout-aside-text-color': '#333'
}

function loadTheme(url) {

  http({
    url,
    method: 'get'
  }).then(res => {
    let text = res
    _.forOwn(COLORS, (value, key) => {
      // console.log(`${value} === ${key}`)
      text = text.replace(new RegExp(key, 'gi'), value).replace(value, changed[value])
    })
    text = text.replace(/#1890ff/gi, 'tomato')
    console.log(text)
    const style = document.createElement('style')
    style.innerText = text
    document.head.appendChild(style)
  })

}