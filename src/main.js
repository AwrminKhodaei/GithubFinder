import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';
Vue.use(VueLoaders);
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
