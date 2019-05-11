import axios from '@/libs/api.request'

// =============== news-system/articles/list.vue =========================
export const getTableData = (to_page, per_page, searchData, article_id) => {
    return axios.request({
        url: '/api/admin/sections',
        params: {
            page: to_page,
            per_page: per_page,
            search_data: JSON.stringify(searchData),
            article_id: article_id
        },
        method: 'get'
    })
}


export const destroy = (id) => {
    return axios.request({
        url: '/api/admin/sections/' + id,
        method: 'delete'
    })
}

export const add = (article_id, formData) => {
    return axios.request({url: '/api/admin/sections', data: formData, method: 'post'})
}

export const edit = (id, formData) => {
    return axios.request({
        url: '/api/admin/sections/' + id,
        data: formData,
        method: 'patch'
    })
}

export const getInfoById = (id) => {
    return axios.request({
        url: 'api/admin/sections/' + id,
        method: 'get'
    })
}
