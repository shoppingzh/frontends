import Vue from 'vue'
import LayoutDefault from './default/index'
import LayoutHorizontal from './horizontal/index'

Vue.component(LayoutDefault.name, LayoutDefault)
Vue.component(LayoutHorizontal.name, LayoutHorizontal)

export default [
  LayoutDefault,
  LayoutHorizontal
]

