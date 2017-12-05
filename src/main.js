// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Distpicker from 'v-distpicker'
import qs from 'qs'
import store from 'store'
Vue.component('v-distpicker', Distpicker);
Vue.prototype.qs = qs;
Vue.prototype.ajax = axios;
Vue.config.productionTip = false
Vue.config.devtools = false //关闭vue提示
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
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