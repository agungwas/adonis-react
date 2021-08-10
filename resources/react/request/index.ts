import axios from 'axios';

export const client = axios.create({
  baseURL: window.location.origin + '/api/',
})

import apiKota from './kota';

export default {
  apiKota
}

