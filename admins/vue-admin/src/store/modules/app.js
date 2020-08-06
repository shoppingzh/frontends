
const state = () => ({
  collapse: false
})

const mutations = {
  TOGGLE_COLLAPSE(state) {
    state.collapse = !state.collapse
  }
}

const actions = {
  toggleCollapse({ commit }) {
    console.log(commit)
    commit('TOGGLE_COLLAPSE')
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}