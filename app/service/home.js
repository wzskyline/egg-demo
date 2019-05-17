'use strict';

const Service = require('egg').Service;

module.exports = function(app) {
  const { Room, User } = app.model;
  class HomeService extends Service {
    async test() {
      console.log('test------------------');
      const list = await Room.findAll({
        raw: true,
        where: {
          id: 1,
        },
        include: [{
          model: User, as: 'User',
        }],
      });

      console.log(list);
      return list;
    }
  }

  return HomeService;
};

