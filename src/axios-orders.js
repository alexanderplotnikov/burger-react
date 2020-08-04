import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerudemy.firebaseio.com/',
});

export default instance;
