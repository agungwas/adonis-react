import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TblFood from 'App/Models/TblFood'

export default class TblFoodsController {
  public static async index ({ response }: HttpContextContract) {
    const data = await TblFood.query().preload('kota')
    response.status(200).json(data)
  }

  public static async create ({ request, response }: HttpContextContract) {
    const { name, tblKotaId } = request.only(['name', 'tblKotaId'])
    if (!name || !tblKotaId) return response.status(400).send('Please enter valid ' + (name ? 'city' : 'name'))

    const result = await TblFood.updateOrCreate({ name }, { name, tblKotaId })

    return response.status(201).send(result)
  }

  public static async update ({ request, response }: HttpContextContract) {
    const { name, tblKotaId } = request.only(['name', 'tblKotaId'])
    const { id } = request.params()
    
    if (!name || !tblKotaId) return response.status(400).send('Please enter valid ' + (name ? 'city' : 'name'))

    const data = await TblFood.find(id)
    if (!data) return response.status(409).send('Record not exist')

    data.name = name
    data.tblKotaId = tblKotaId
    await data.save()
    
    return response.status(201).json(data)
  }

  public static async destroy ({ request, response }: HttpContextContract) {
    const { id } = request.params()
    if (!id) return response.status(400).send('Please enter valid name')

    const data = await TblFood.find(id)
    await data?.delete()

    return response.status(200).send('Delete successfully')
  }
}
