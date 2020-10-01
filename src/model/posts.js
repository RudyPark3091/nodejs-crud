const Sequelize = require("sequelize");
const { sequelize } = require("./model.js");

const Posts = sequelize.define('Posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Posts.create({
  title: "hello",
  content: "world"
});

sequelize.sync({force: true});

module.exports = { Posts };
