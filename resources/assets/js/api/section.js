import axios from '@/libs/api.request'

export const getInfo = ({id}) => {
    return axios.request({
        url: 'api/comic_info?section_id=' + id,
        method: 'get'
    });
};
