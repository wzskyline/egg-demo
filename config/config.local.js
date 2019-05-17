'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.sequelize = {
    dialect: 'sqlite',
    username: '',
    password: '',
    storage: './db/db.sqlite',
    database: 'database',
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    allowMethods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    credentials: true,
  };
  return config;
};
