const state = () => ({
  token: window.sessionStorage.getItem('xp_login_token')
})

const mutations = {
  SET_TOKEN(state, token) {
    window.sessionStorage.setItem('xp_login_token', token)
    state.token = token
  }
}

const actions = {
  login({ commit }, loginInfo) {
    return new Promise((resolve, reject) => {
      const { username, password } = loginInfo
      console.log(`登录：${username} = ${password}`)
      if (username !== 'admin') {
        return reject(new Error('用户名或密码错误'))
      }
      commit('SET_TOKEN', 'LOGIN_TOKEN')
      resolve(loginInfo)
    })
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}