'use strict';
module.exports = function(app) {
  const DataTypes = app.Sequelize;
  const User = app.model.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(50),
    },
    nickname: {
      type: DataTypes.STRING(50),
    },
    password: {
      type: DataTypes.STRING(50),
    },
    img: {
      type: DataTypes.STRING(50),
    },
    desc: {
      type: DataTypes.STRING(300),
    },
    class: {
      type: DataTypes.STRING(50),
    },
    money: {
      type: DataTypes.INTEGER(11),
    },
    state: {
      type: DataTypes.INTEGER(11),
    },
    record: {
      type: DataTypes.INTEGER(11),
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },

  }, {
    tableName: 'user',
  });
  User.prototype.associate = function() {
    // app.model.User.hasMany(app.model.Room, { as: 'Room' });
  };

  return User;
};
