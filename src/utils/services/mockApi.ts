import axios from 'axios';

const base = 'https://jsonplaceholder.typicode.com'

const posts = async () => await axios.get(`${base}/posts`);

const photos = async ({ id }: { id: number }) => await axios.get(`${base}/photos${id ? `/${id}` : ''}`);

export {
    posts,
    photos
};