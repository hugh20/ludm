import axios from '@/libs/api.request'


export const getTagComic = ({tag_id, page, per_page}) => {
    return axios.request({
        url: 'api/tag_comic?tag_id=' + tag_id + '&page=' + page + '&per_page=' + per_page,
        method: 'get',
    });
};