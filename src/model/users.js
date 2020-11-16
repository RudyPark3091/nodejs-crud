const Sequelize = require("sequelize");
const { sequelize } = require("./model.js");

const Users = sequelize.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
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
