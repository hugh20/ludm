import Main from '../../view/main'


export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录'
        },
        component: r => require.ensure([], () => r(require('../../view/login/login.vue')), 'login')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: '注册'
        },
        component: r => require.ensure([], () => r(require('../../view/register/register.vue')), 'register')
    },
     {
        path: '/',
        name: 'main',
        redirect: '/index',
        component: Main,
        children: [
            {
                path: '/index',
                name: 'index',
                meta: {
                    hideInMenu: true,
                    title: '首页',
                },
                component: r => require.ensure([], () => r(require('../../view/single-page/index')), 'index')
            }
        ]
    },
    {
        path: '/category',
        name: 'category',
        component: Main,
        children: [
            {
                path: '/category-list',
                name: 'category-list',
                component: r => require.ensure([], () => r(require('../../view/category/index')), 'category-list')
            }
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        component: r => require.ensure([], () => r(require('../../view/error-page/401.vue')), 'error_401')
    }, {
        path: '/500',
        name: 'error_500',
        component: r => require.ensure([], () => r(require('../../view/error-page/500.vue')), 'error_500')
    }, {
        path: '*',
        name: 'error_404',
        component: r => require.ensure([], () => r(require('../../view/error-page/404.vue')), 'error_404')
    }
]
