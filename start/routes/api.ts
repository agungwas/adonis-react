import Route from '@ioc:Adonis/Core/Route';
import TblFoodsController from 'App/Controllers/Http/TblFoodsController';
import TblKotasController from 'App/Controllers/Http/TblKotasController';

Route.group(() => {
  Route.group(() => {
    Route.get('/', async ctx => TblKotasController.index(ctx))
    Route.post('/', async ctx => TblKotasController.create(ctx))
    Route.patch('/:id', async ctx => TblKotasController.update(ctx))
    Route.delete('/:id', async ctx => TblKotasController.destroy(ctx))
  }).prefix('city')

  Route.group(() => {
    Route.get('/', async ctx => TblFoodsController.index(ctx))
    Route.post('/', async ctx => TblFoodsController.create(ctx))
    Route.patch('/:id', async ctx => TblFoodsController.update(ctx))
    Route.delete('/:id', async ctx => TblFoodsController.destroy(ctx))
  }).prefix('food')
}).prefix('api')