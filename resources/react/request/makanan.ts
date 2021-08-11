import { client } from './index';
const url = 'food/'
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
  addFood: async (params: { tblKotaId: number, name: string }) => {
    await client.post(url, params)
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
  editFood: async (params: { id: number, name: string, tblKotaId: number }) => {
    await client.patch(url + params.id, { name: params.name, tblKotaId: params.tblKotaId })
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
  deleteFood: async (params = 0) => {
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