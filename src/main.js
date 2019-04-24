// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'
import echarts from 'echarts'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueQuillEditor from 'vue-quill-editor'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
Vue.use(VueQuillEditor)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  router,
  store,
  // render: (h) => h(App),
  components: { App },
  template: '<App/>'
}).$mount('#app')
