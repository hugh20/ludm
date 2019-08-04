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
                    hideLogo: false,
                    title: '首页',
                    showTop: true
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
                meta: {
                    hideLogo: true,
                    showTop: false
                },
                component: r => require.ensure([], () => r(require('../../view/category/index')), 'category-list')
            }
        ]
    },
    {
        path: '/tagComic',
        name: 'tagComic',
        component: Main,
        children: [
            {
                path: '/tag-comic-list/:id',
                name: 'tag-comic-list',
                meta: {
                    hideLogo: true,
                    showTop: true
                },
                component: r => require.ensure([], () => r(require('../../view/tag-comic/index')), 'tag-comic-list'),
                props: true
            }
        ]
    },
    {
        path: '/categoryComic',
        name: 'categoryComic',
        component: Main,
        children: [
            {
                path: '/category-comic-list/:id',
                name: 'category-comic-list',
                meta: {
                    hideLogo: true,
                    showTop: true
                },
                component: r => require.ensure([], () => r(require('../../view/category-comic/index')), 'category-comic-list'),
                props: true
            }
        ]
    },
    {
        path: '/comic',
        name: 'comic',
        component: Main,
        children: [
            {
                path: '/comic-desc/:id',
                name: 'comic-desc',
                meta: {
                    hideLogo: true,
                    showTop: false
                },
                component: r => require.ensure([], () => r(require('../../view/comic/index')), 'comic-desc'),
                props: true
            }
        ]
    },
    {
        path: '/chapter',
        name: 'chapter',
        component: Main,
        children: [
            {
                path: '/chapter-list/:id',
                name: 'chapter-list',
                meta: {
                    hideLogo: true,
                    showTop: false
                },
                component: r => require.ensure([], () => r(require('../../view/chapter/index')), 'chapter-list'),
                props: true
            }
        ]
    },
    {
        path: '/art/:id',
        name: 'art-desc',
        meta: {
            hideLogo: true,
            showTop: false
        },
        component: r => require.ensure([], () => r(require('../../view/art/index')), 'art-desc'),
        props: true
    },
    {
        path: '/error401',
        name: 'error401',
        component: Main,
        children: [
            {
                path: '/401',
                name: 'error_401',
                meta: {
                    hideLogo: true,
                    showTop: false
                },
                component: r => require.ensure([], () => r(require('../../view/error-page/401/index')), 'error-401')
            }
        ]
    },
    {
        path: '/error500',
        name: 'error500',
        component: Main,
        children: [
            {
                path: '/500',
                name: 'error_500',
                meta: {
                    hideLogo: true,
                    showTop: false
                },
                component: r => require.ensure([], () => r(require('../../view/error-page/500/index')), 'error-500')
            }
        ]
    },
    {
        path: '/vipindex',
        name: 'vindex',
        component: Main,
        children: [
            {
                path: '/vip',
                name: 'vip',
                meta: {
                    hideLogo: true,
                    showTop: false
                },
                component: r => require.ensure([], () => r(require('../../view/vip/index')), 'vip')
            }
        ]
    },
    {
        path: '*',
        name: 'error',
        component: Main,
        children: [
            {
                path: '*',
                name: 'error-404',
                meta: {
                    hideLogo: true,
                    showTop: false
                },
                component: r => require.ensure([], () => r(require('../../view/error-page/404/index')), 'error-404')
            }
        ]
    }
]
