import axios from '@/libs/api.request'

export const getCategorys = () => {
    return axios.request({
        url: 'api/categorys',
        method: 'get'
    });
};


export const getCategoryComic = ({category_id, page, per_page}) => {
    // const data = {
    //     category_id,
    //     per_page,
    //     page
    // };
    return axios.request({
        url: 'api/category_comic?category_id=' + category_id + '&page=' + page + '&per_page=' + per_page,
        method: 'get',
        // data
    });
};