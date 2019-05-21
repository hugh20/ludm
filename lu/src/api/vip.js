import axios from '@/libs/api.request'

// =============== privileges/users/list.vue =========================

export const getTableData = (to_page, per_page, searchData) => {
  return axios.request({
    url: '/api/admin/vips',
    params: {
      page: to_page,
      per_page: per_page,
      search_data: JSON.stringify(searchData)
    },
    method: 'get'
  })
}


export const destroy = (id) => {
  return axios.request({
    url: '/api/admin/vips/' + id,
    method: 'delete'
  })
}

// =============== privileges/users/components/add-user.vue =========================

export const add = (formData) => {
  return axios.request({url: '/api/admin/vips/', data: formData, method: 'post'})
}

export const edit = (id, formData) => {
  return axios.request({
    url: '/api/admin/vips/' + id,
    data: formData,
    method: 'patch'
  })
}

export const getInfoById = (id) => {
  return axios.request({
    url: 'api/admin/vips/' + id,
    method: 'get'
  })
}
