import axios from 'axios';

export const client = axios.create({
  baseURL: window.location.origin + '/api/',
})

import apiKota from './kota';
import apiMakanan from './makanan'

export default {
  apiKota,
  apiMakanan
}

