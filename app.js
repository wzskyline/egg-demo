'use strict';
const Controller = require('egg').Controller;
module.exports = app => {
    app.BaseController = class BaseController extends Controller {
        index() {
            app.index += 1;
            return app.index;
        }
        success(data) {
            this.ctx.body = data;
        }
        fail(data) {
            const ret = data || { status: false, message: '参数错误' };
            this.ctx.body = ret;
            this.ctx.status = 500;
        }
        res(data) {
            console.log('第'+app.index+'次响应');
            if (data.status) {
                this.success(data);
            } else {
                this.fail(data);
            }
        }

    };
    app.beforeStart(async () => {
        console.log('启动好啦');
        app.index = 1;
    });

};
