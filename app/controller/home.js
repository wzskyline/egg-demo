'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body  = await this.ctx.service.home.test();
  }
  

}

module.exports = HomeController;
