import axios from 'axios';

'https://foodies-app-api.herokuapp.com/'

const baseUrl = process.env.NODE_ENV === 'production' 
    ?  'https://foodies-app-api.herokuapp.com/'
    : 'http://localhost:3000' 

const api = axios.create({
    baseURL: baseUrl
})

export default api;