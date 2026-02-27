import { createStore } from 'vuex'

export interface User {
  id: number
  username: string
  phone: string
  token: string
  avatar?: string
  role: string
}

export interface State {
  user: User | null
  darkMode: boolean
}

const store = createStore<State>({
  state: {
    user: null,
    darkMode: false,
  },
  mutations: {
    SET_USER(state, user: User) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    SET_DARK_MODE(state, darkMode: boolean) {
      state.darkMode = darkMode
      localStorage.setItem('dark-mode', String(darkMode))
    },
    LOGOUT(state) {
      state.user = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('menus')
    },
  },
  actions: {
    login({ commit }, user: User) {
      commit('SET_USER', user)
      commit('SET_DARK_MODE', false)
      localStorage.setItem('token', user.token)
    },
    logout({ commit }) {
      commit('LOGOUT')
    },
  },
  getters: {
    isAuthenticated: (state) => state.user !== null,
    user: (state) => state.user,
    darkMode: (state) => state.darkMode,
  },
})

export default store