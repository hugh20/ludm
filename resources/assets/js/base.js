import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
window.baseURL = 'http://dm.lc/';


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});