import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//公共样式
import 'assets/css/base.css'
//normalize初始化样式
import 'normalize.css'

//elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
