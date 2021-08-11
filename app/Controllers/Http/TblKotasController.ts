import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TblKota from 'App/Models/TblKota'

export default class TblKotasController {
  public static async index({ response }: HttpContextContract) {
    const data = await TblKota.query()
    response.status(200).json(data)
  }

  public static async create({ request, response }: HttpContextContract) {
    const { name } = request.only(['name'])
    if (!name) return response.status(400).send('Please enter valid name')

    const result = await TblKota.updateOrCreate({ name }, { name })
    return response.status(201).send(result)
  }

  public static async update({ request, response }: HttpContextContract) {
    const { name } = request.only(['name'])
    const { id } = request.params()
    if (!name || !id) return response.status(400).send('Please enter valid ' + (name ? 'city' : 'name'))

    const data = await TblKota.find(id)
    if (!data) return response.status(409).send('Record not exist')

    data.name = name
    await data.save()
    return response.status(201).json(data)
  }

  public static async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()
    if (!id) return response.status(400).send('Please enter valid name')

    const data = await TblKota.query().preload('foods').where({ id }).first()
    if (!data) return response.status(400).send('Record not exist')
    if (data.foods.length) return response.status(400).send('Data is used by food')

    await data?.delete()
    return response.status(200).send('Delete successfully')
  }
}
