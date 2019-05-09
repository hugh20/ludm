import axios from '@/libs/api.request'

// =============== news-system/articles/list.vue =========================
export const getTableData = (article_id, to_page, per_page, searchData) => {
  return axios.request({
    url: '/api/admin/articles/' + article_id + '/sections',
    params: {
      page: to_page,
      per_page: per_page,
      search_data: JSON.stringify(searchData)
    },
    method: 'get'
  })
}


export const destroy = (article_id, id) => {
  return axios.request({
    url: '/api/admin/articles/' + article_id + '/sections/' + id,
    method: 'delete'
  })
}

export const add = (article_id, formData) => {
  return axios.request({url: '/api/admin/articles/' + id + '/sections', data: formData, method: 'post'})
}

export const edit = (article_id, id, formData) => {
  return axios.request({
    url: '/api/admin/articles/' + article_id +  '/sections'+ id,
    data: formData,
    method: 'patch'
  })
}

export const getInfoById = (article_id, id) => {
  return axios.request({
    url: 'api/admin/articles/' + article_id + '/sections/' + id,
    method: 'get'
  })
}
