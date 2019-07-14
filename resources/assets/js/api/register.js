import axios from '@/libs/api.request'

// ===============  =========================
export const register = ({phone, password, checkPass}) => {
    const data = {
        phone,
        password,
        checkPass
    };
    return axios.request({url: 'api/register', data, method: 'post'})
};
