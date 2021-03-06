import { client } from './index';
// import axios from 'axios'
const url = 'city/'
const result: { status: boolean, data: any } = { status: false, data: {} }

export default {
  getAll: async () => {
    await client.get(url)
      .then(({ data }) => {
        result.data = data
        result.status = true
      })
      .catch(({ response }) => {
        result.status = false
        result.data = response.data
      })
    return Promise.resolve(result)
  },
  addCity: async (params: string) => {
    await client.post(url, { name: params })
      .then(({ data }) => {
        result.data = data,
        result.status = true
      })
      .catch(({ response }) => {
        result.status = false
        result.data = response.data
      })
    return Promise.resolve(result)
  },
  editCity: async (params = { id: 0, name: '' }) => {
    await client.patch(url + params.id, { name: params.name })
      .then(({ data }) => {
        result.data = data
        result.status = true
      })
      .catch(({ response}) => {
        result.data = response.data
        result.status = false
      })
    return Promise.resolve(result)
  },
  deleteCity: async (params = 0) => {
    await client.delete(url + params)
      .then(({ data }) => {
        result.data = data
        result.status = true
      })
      .catch(({ response}) => {
        result.data = response.data
        result.status = false
      })
    return Promise.resolve(result)
  }
}