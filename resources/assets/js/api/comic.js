import axios from '@/libs/api.request'

export const getComic = ({id}) => {
    return axios.request({
        url: 'api/comic?comic_id=' + id,
        method: 'get'
    });
};
