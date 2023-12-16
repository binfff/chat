import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/js/appback.js'
import { Button } from 'ant-design-vue';
import Mui from 'vue-awesome-mui';
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Mui)
Vue.prototype.$Eventbus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
