const COLLAPSE_KEY = 'app_collapse'

const state = () => ({
  collapse: localStorage.getItem(COLLAPSE_KEY) === 'true',
  theme: 'default',
  layout: null
})

const mutations = {
  TOGGLE_COLLAPSE(state) {
    state.collapse = !state.collapse
    localStorage.setItem(COLLAPSE_KEY, state.collapse)
  },
  SET_THEME(state, theme) {
    state.theme = theme
  },
  SET_LAYOUT(state, layout) {
    state.layout = layout
  }
}

const actions = {
  toggleCollapse({ commit }) {
    commit('TOGGLE_COLLAPSE')
  },
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme)
  },
  setLayout({ commit }, layout) {
    commit('SET_LAYOUT', layout)
  }
}

const getters = {
  collapse: state => {
    return state.collapse
  },
  theme: state => {
    return state.theme
  },
  layout: state => {
    return state.layout
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}