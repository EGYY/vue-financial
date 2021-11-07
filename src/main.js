import Vue from 'vue'
import App from './App.vue'
import SweetAlertIcons from 'vue-sweetalert-icons';

Vue.use(SweetAlertIcons);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
