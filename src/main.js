import Vue from 'vue'
import app from './App.vue'
import router from './router'
import Mint from 'mint-ui';
import store from './store'
import 'mint-ui/lib/style.css';
import './mock/mockServer'
// import '../static/css/reset.css'
// import '../static/css/iconfont.css'
// import '../static/css/iconfont2.css'

Vue.use(Mint);

new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
