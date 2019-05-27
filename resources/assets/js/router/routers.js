import Main from '../../view/main'

// {
//     path: '/login',
//         name: 'login',
//     meta: {
//     title: 'Login - 登录',
//         hideInMenu: true
// },
//
//     component: r => require.ensure([], () => r(require('../../view/login/login.vue')), 'login')
// },
export default [
     {
        path: '/',
        name: 'main',
        redirect: '/index',
        component: Main,
        meta: {
            hideInMenu: true,
        },
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
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: r => require.ensure([], () => r(require('../../view/error-page/401.vue')), 'error_401')
    }, {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: r => require.ensure([], () => r(require('../../view/error-page/500.vue')), 'error_500')
    }, {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: r => require.ensure([], () => r(require('../../view/error-page/404.vue')), 'error_404')
    }
]
