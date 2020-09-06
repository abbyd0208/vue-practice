// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import axios from 'axios';  //ajax套件
import VueAxios from 'vue-axios';  //轉換成vue可以使用的套件
import router from './router';

 
Vue.use(VueAxios, axios)   //使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
