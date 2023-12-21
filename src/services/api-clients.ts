import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4b83683d4a524981a5cf64fdc51724d0'
    }
});