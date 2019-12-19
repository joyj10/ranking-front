import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import LoadScript from 'vue-plugin-load-script';


Vue.use(BootstrapVue)
Vue.use(LoadScript);
Vue.loadScript("/assets/js/main.js")
Vue.loadScript("/assets/js/skel.min.js")
Vue.loadScript("/assets/js/jquery.min.js")
Vue.loadScript("/assets/js/util.js")
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
