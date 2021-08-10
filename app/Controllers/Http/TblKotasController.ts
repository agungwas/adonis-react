import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TblKotasController {
  public static async index ({ response }: HttpContextContract) {
    response.send('agung setya')
  }

  public static async create ({}: HttpContextContract) {
  }

  public static async store ({}: HttpContextContract) {
  }

  public static async show ({}: HttpContextContract) {
  }

  public static async edit ({}: HttpContextContract) {
  }

  public static async update ({}: HttpContextContract) {
  }

  public static async destroy ({}: HttpContextContract) {
  }
}
