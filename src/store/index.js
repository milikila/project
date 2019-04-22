import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = {
  managerPsd: {
    username: '',
    passoword: ''
  },
  about: {
    tel: '',
    email: '',
    address: ''
  },
  LoginTitle: '登录/注册'
}
let getters = {
  updateLoginTitle: state => state.LoginTitle
}
let mutations = {
  updateUsernamePassowrd (state, data) {
    state.managerPsd.username = data.username
    state.managerPsd.password = data.password
    console.log(state.managerPsd.username)
    console.log(state.managerPsd.password)
  },
  updateabout (state, data) {
    state.about.tel = data.tel
    state.about.email = data.email
    state.about.address = data.address
    console.log('1', state.about)
  },
  updateLoginTitle (state, data) {
    state.LoginTitle = data
    console.log('3', state.LoginTitle)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
