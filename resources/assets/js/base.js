import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import Cookies from 'js-cookie'

window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
window.baseURL = 'http://dm.lc/';

Vue.use(ElementUI);

/*Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);*/
// Cookies.remove('access_token');
console.log(123);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});