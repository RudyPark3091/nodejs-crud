const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  'imagini',
  'root',
  'root',
  {
    'host': 'localhost',
    'dialect': 'mysql'
  }
);

module.exports = { sequelize };
