const COLLAPSE_KEY = 'app_collapse'

const state = () => ({
  collapse: localStorage.getItem(COLLAPSE_KEY) === 'true'
})

const mutations = {
  TOGGLE_COLLAPSE(state) {
    state.collapse = !state.collapse
    localStorage.setItem(COLLAPSE_KEY, state.collapse)
  }
}

const actions = {
  toggleCollapse({ commit }) {
    commit('TOGGLE_COLLAPSE')
  }
}

const getters = {
  collapse: state => {
    return state.collapse
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}