import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false;
/*
    todo: 只能命名为store
*/
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
