import axios from '@/libs/api.request'

export const getChapters = ({id, sort}) => {
    return axios.request({
        url: 'api/chapters?comic_id=' + id + '&sort_type=' + sort,
        method: 'get'
    });
};
