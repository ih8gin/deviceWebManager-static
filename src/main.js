import Vue from 'vue'
import App from './App.vue'

import './css/common.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ElementLocale from 'element-ui/lib/locale'
Vue.use(ElementUI);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./i18n/zh'),
    'en': require('./i18n/en')
  },
})
ElementLocale.i18n((key, value) => i18n.t(key, value))

import VueRouter from 'vue-router'
import router from './router/index.js'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
  router: router
}).$mount('#app')
