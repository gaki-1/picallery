import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://picallery.firebaseio.com/'
});

export default instance;