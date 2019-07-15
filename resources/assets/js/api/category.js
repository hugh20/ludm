import axios from '@/libs/api.request'

export const getCategorys = () => {
    return axios.request({
        url: 'api/categorys',
        method: 'get'
    });
};
