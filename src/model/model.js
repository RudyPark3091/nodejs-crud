const Sequelize = require("sequelize");
const mysql = require("mysql2");
const { db } = require("../config/db.js");

const connection = mysql.createConnection({
  host: db.config.host,
  user: db.username,
  password: db.password,
  database: db.database
});

connection.query(`CREATE DATABASE IF NOT EXISTS ${db.database}`, (err, results) => {
  if (err) console.error(err);
});

connection.end();

const sequelize = new Sequelize(
  `${db.database}`,
  db.username,
  db.password,
  {
    'host': db.config.host,
    'dialect': db.config.dialect
  }
);

module.exports = { sequelize };
