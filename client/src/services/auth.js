import api from './apiConfig';

export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', { authentication: loginData });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.toekn}`;
    return resp.data.user;
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.get('/auth/verify');
        return resp.data
    }
    return null
}