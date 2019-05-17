'use strict';
module.exports = function(app) {
  const DataTypes = app.Sequelize;
  const Room = app.model.define('room', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: DataTypes.INTEGER(11),
    },
    name: {
      type: DataTypes.STRING(50),
    },
    desc: {
      type: DataTypes.STRING(50),
    },
    class: {
      type: DataTypes.INTEGER(11),
    },
    users: {
      type: DataTypes.INTEGER(11),
    },
    state: {
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
    tableName: 'room',
  });
  Room.associate = function() {
    app.model.Room.belongsTo(app.model.User, { as: 'User', foreignKey: 'uid' });
  };
  return Room;
};
