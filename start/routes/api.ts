import Route from '@ioc:Adonis/Core/Route';
import TblFoodsController from 'App/Controllers/Http/TblFoodsController';
import TblKotasController from 'App/Controllers/Http/TblKotasController';

Route.group(() => {
  Route.group(() => {
    Route.get('/', async ctx => TblKotasController.index(ctx))
  }).prefix('kota')

  Route.group(() => {
    Route.get('/', async ctx => TblFoodsController.index(ctx))
  })
}).prefix('api')