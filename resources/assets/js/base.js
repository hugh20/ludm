import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
window.baseURL = 'http://dm.lc/';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});