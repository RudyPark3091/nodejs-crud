const Sequelize = require("sequelize");
const { sequelize } = require("./model.js");

const Users = sequelize.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  alias: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize.sync();

module.exports = Users;
