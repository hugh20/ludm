import Vue from 'vue'
import Router from 'vue-router';
import {Loading, Message} from 'element-ui';
import routes from './routers'
import store from '@/store'
import {getToken, canTurnTo} from '@/libs/util'

Vue.use(Router);
const router = new Router({
    routes
    // mode: 'history'
});
let loadinginstace;

router.beforeEach((to, from, next) => {
    const token = getToken();
    if(to.name == 'login' && token) {
        Message({showClose: true, message: '您已登录', type: 'warning'});
        return next({ path: '/' });
    }
    loadinginstace = Loading.service({fullscreen: true});
    if (to.matched.some(res => res.meta.requireAuth)) {
        //是否需要登录
        if (token) {
            //是否已经登录
            next()
        } else {
            next({
                path: '/login',
                //query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }
});

router.afterEach(to => {
    loadinginstace.close();
    // window.scrollTo(0, 0)
});

export default router
