'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.index);
  router.post('/test', controller.home.index);
  router.put('/test', controller.home.index);
  router.del('/test', controller.home.index);
};
