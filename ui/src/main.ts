import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
// import bCard from 'bootstrap-vue/es/components/card/card'
import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('b-container', bContainer);
Vue.component('b-row', bRow);
Vue.component('b-col', bCol);
// Vue.component('b-card', bCard);
Vue.component('b-jumbotron', bJumbotron);

const vue = new Vue({
  router,
  store,
  render: h => h(App)
});

vue.$mount('#app');
