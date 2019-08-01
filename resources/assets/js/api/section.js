import axios from '@/libs/api.request'

export const getInfo = ({id, comic_id}) => {
    return axios.request({
        url: 'api/comic_info?section_id=' + id + '&comic_id=' + comic_id,
        method: 'get'
    });
};

export const nextComic = ({weight, comic_id}) => {
    return axios.request({
        url: 'api/next_section?comic_id=' + comic_id + '&weight=' + weight,
        method: 'get'
    });
};

export const prevComic = ({weight, comic_id}) => {
    return axios.request({
        url: 'api/prev_section?comic_id=' + comic_id + '&weight=' + weight,
        method: 'get'
    });
};