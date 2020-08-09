const COLLAPSE_KEY = 'app_collapse'

const state = () => ({
  collapse: localStorage.getItem(COLLAPSE_KEY) === 'true',
  theme: 'default'
})

const mutations = {
  TOGGLE_COLLAPSE(state) {
    state.collapse = !state.collapse
    localStorage.setItem(COLLAPSE_KEY, state.collapse)
  },
  SET_THEME(state, theme) {
    state.theme = theme
  }
}

const actions = {
  toggleCollapse({ commit }) {
    commit('TOGGLE_COLLAPSE')
  },
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme)
  }
}

const getters = {
  collapse: state => {
    return state.collapse
  },
  theme: state => {
    return state.theme
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}