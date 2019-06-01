import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = {
  managerPsd: {
    username: '',
    passoword: ''
  },
  userid: '',
  allowBack: true,
  about: {
    tel: '',
    email: '',
    address: ''
  },
  LoginTitle: ''
}
let getters = {
  updateLoginTitle: state => state.LoginTitle,
  allowBack: state => state.allowBack
}
let mutations = {
  updateUsernamePassowrd (state, data) {
    state.managerPsd.username = data.username
    state.managerPsd.password = data.password
  },
  updateabout (state, data) {
    state.about.tel = data.tel
    state.about.email = data.email
    state.about.address = data.address
  },
  updateLoginTitle (state, data) {
    state.LoginTitle = data
  },
  updateUserid (state, data) {
    state.userid = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
