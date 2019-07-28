import { login, logout, getUserInfo } from '@/api/user'
import { setToken, getToken } from '@/libs/util'
import {Message} from 'element-ui';

export default {
  state: {
    userId: 0,
    email: '',
    avatorImgPath: '',
    accessRole: '',
    vip: false,
    access_token: getToken()
  },
  mutations: {
    setUserId (state, id) {
      state.userId = id
    },
    setEmail (state, email) {
      state.email = email
    },
    setAvator (state, avatorPath) {
      state.avatorImgPath = avatorPath
    },
    setAccessRole (state, role) {
      state.accessRole = role
    },
    setVip(state, vip){
        state.vip = vip
    },
    setAccessToken (state, data) {
      let token = ''
      if (data.token) {
        state.access_token_type = data.token.token_type
        token = data.token.token_type + ' ' + data.token.access_token
      }
      state.access_token = token
      setToken(token)
    }
  },
  actions: {
    // 登录
    handleLogin ({ commit }, {phone, password}) {
        phone = phone.trim()
      return new Promise((resolve, reject) => {
        login({
            phone,
          password
        }).then(res => {
            console.log(res);
          if(res.status == 'success'){
              console.log(res.data);
              commit('setAccessToken', res.data);
              commit('setEmail', res.data.user.email);
              commit('setAvator', res.data.user.head_image.url);
              commit('setUserId', res.data.user.id);
              commit('setVip', res.data.user.vip);
              resolve(res)
          }else {
              Message({showClose: true, message: res.message, type: 'error'});
          }

        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('setAccessToken', '')
          resolve()
        }).catch(err => {
          reject(err)
        })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.access_token).then(res => {
          const data = res.data;
          commit('setEmail', data.email);
          commit('setAvator', data.head_image.url);
          commit('setUserId', data.id);
          // commit('setAccessRole', data.roles);
          commit('setVip', data.vip);
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
