import Vue from 'vue'
import App from './App.vue'
import SweetAlertIcons from 'vue-sweetalert-icons';
import NotFoundPage from './pages/404.vue'
import HomePage from './pages/HomePage.vue'
import PoliticsPage from './pages/Politics.vue'

Vue.use(SweetAlertIcons);
Vue.config.productionTip = false

const routes = {
  '/': App,
  '/politics': PoliticsPage
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFoundPage
    }
  },
  render (h) { return h(this.ViewComponent) }
})