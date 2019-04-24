import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from '@/store/mutation-types'
Vue.use(Vuex)
let state = {
  managerPsd: {
    username: '',
    passoword: ''
  },
  allowBack: true,
  about: {
    tel: '',
    email: '',
    address: ''
  },
  LoginTitle: '登录/注册'
}
let getters = {
  updateLoginTitle: state => state.LoginTitle,
  allowBack: state => state.allowBack
}
// let actions = {
//   updateAppSetting ({commit}, {allowBack}) {
//     commit(types.UPDATE_APPSETTING, {allowBack})
//   }
// }
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
  // [types.UPDATE_APPSETTING] (state, { allowBack }) { // 真正改变allowBack的mutation
  //   state.allowBack = allowBack
  // }
}

export default new Vuex.Store({
  state,
  // actions,
  mutations,
  getters
})
