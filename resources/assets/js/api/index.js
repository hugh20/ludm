import axios from '@/libs/api.request'

export const getAdverts = () => {
    return axios.request({
        url: 'api/adverts',
        method: 'get'
    });
};

export const getIndexComic = () => {
    return axios.request({
        url: 'api/index/comic',
        method: 'get'
    });
};