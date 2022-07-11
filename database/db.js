const Sequelize = require('sequelize');

const database = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = database;
