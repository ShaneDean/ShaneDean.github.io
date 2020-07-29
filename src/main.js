import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, EmbedPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(EmbedPlugin)

import './css/custom.scss'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
