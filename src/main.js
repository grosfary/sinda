// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
<<<<<<< HEAD
import Distpicker from 'v-distpicker'
import qs from 'qs'
import store from 'store'
Vue.component('v-distpicker', Distpicker);
Vue.prototype.qs = qs;
=======
import qs from 'qs'

>>>>>>> ffb1d98a6f81fc616931e7684c0a254c1ce7640a
Vue.prototype.ajax = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false
Vue.config.devtools = false //关闭vue提示
    /* eslint-disable no-new */
new Vue({
<<<<<<< HEAD
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
=======
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
>>>>>>> ffb1d98a6f81fc616931e7684c0a254c1ce7640a
})


// setTimeout(function() {
//   console.log(5);
// }, 100);
// var promise = new Promise(function(resolve,reject){
//   console.log(1);
//   resolve();
//   console.log(2);
// });
// promise.then(function(){
//   console.log(3);
// });
// console.log(4);

// setTimeout(function() {
//   console.log(1);
// }, 100);
// console.log(2);