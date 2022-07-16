import axios from 'axios';

const KEY = 'AIzaSyA-8grA96b5fTBnUqHKX-e5YrWwX2YwVN8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});