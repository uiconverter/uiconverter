import axios from 'axios';

const API_BASEURL = '';
const axiosInstance = axios.create({
  baseURL: API_BASEURL,
});
