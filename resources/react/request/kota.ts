import { client } from './index';
// import axios from 'axios'
const url = 'kota/'
const result = { status: false, data: {} }

export default {
  getAll: async () => {
    await client.get(url)
      .then(({ data }) => {
        result.data = data
        result.status = true
      })
      .catch(({ response }) => {
        result.data = response.data
      })
    return Promise.resolve(result)
  }
}