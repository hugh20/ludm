import axios from '@/libs/api.request'

// =============== login/login.vue =========================
export const login = ({email, password}) => {
  const data = {
    email,
    password
  }
  return axios.request({url: 'api/login', data, method: 'post'})
}

export const getUserInfo = (token) => {
  return axios.request({url: 'api/users/current_user', method: 'get'})
}

export const logout = (token) => {
  return axios.request({url: 'api/logout', method: 'post'})
}