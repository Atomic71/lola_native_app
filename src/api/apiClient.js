import axios from 'axios';
import apiConstants from './apiConstants';

const client = axios.create({
  baseURL: apiConstants.BASE_URL,
});

export default client;
