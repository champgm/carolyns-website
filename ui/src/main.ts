import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('b-container', bContainer);
Vue.component('b-row', bRow);
Vue.component('b-col', bCol);

const vue = new Vue({
  router,
  store,
  render: h => h(App)
});




vue.$mount('#app');
