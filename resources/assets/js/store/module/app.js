import {
    getBreadCrumbList,
    setTagNavListInLocalstorage,
    getMenuByRouter,
    getTagNavListFromLocalstorage,
    getHomeRoute
} from '@/libs/util'
import routers from '@/router/routers'

export default {
    state: {
        breadCrumbList: [],
        tagNavList: [],
        homeRoute: getHomeRoute(routers),
        local: '',
        title: '',
        noTitle: false,
        description: '',
        metaTitle: '',
        keywords: '',
    },
    getters: {
        menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.accessRole)
    },
    mutations: {
        setBreadCrumb(state, routeMetched) {
            state.breadCrumbList = getBreadCrumbList(routeMetched, state.homeRoute)
        },
        setTagNavList(state, list) {
            if (list) {
                state.tagNavList = [...list]
                setTagNavListInLocalstorage([...list])
            } else state.tagNavList = getTagNavListFromLocalstorage()
        },
        addTag(state, item, type = 'unshift') {
            if (state.tagNavList.findIndex(tag => tag.name === item.name) < 0) {
                if (type === 'push') state.tagNavList.push(item)
                else state.tagNavList.unshift(item)
                setTagNavListInLocalstorage([...state.tagNavList])
            }
        },
        setLocal(state, lang) {
            state.local = lang
        },
        setNoTitle(state, noTitle){
            state.noTitle = noTitle;
        },
        setTitle(state, title){
            state.title = title;
        },
        setMetaTitle(state, title){
            state.metaTitle = title;
            document.title = title || '动漫、漫画'
        },
        setDescription(state, description){
            state.description = description;
            document.querySelector('meta[name="description"]').setAttribute('content', description || '动漫、漫画')

        },
        setKeywords(state, keywords){
            state.keywords = keywords;
            document.querySelector('meta[name="keywords"]').setAttribute('content', keywords || '动漫、漫画')
        }
    }
}

