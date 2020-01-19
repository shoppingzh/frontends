import './style/index.css'
import './style/iconfont.css'
import coffee from './assets/images/coffee.jpg'

import config from './assets/config.json'

function showHello() {
  const ele = document.createElement('div')
  ele.innerHTML = 'Hello'
  ele.classList.add('hello')

  const img = document.createElement('img')
  img.src = coffee

  const i = document.createElement('i')
  i.classList.add('icon')
  i.classList.add('icon-fabu')
  i.style.fontSize = '20px'
  i.style.fontWeight = 'bold'

  document.body.appendChild(ele)
  document.body.appendChild(img)
  document.body.appendChild(i)
}

showHello()

console.log('========== APP 信息 =========')
console.log(config)
