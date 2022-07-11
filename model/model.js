const sequelize = require('sequelize');
const database = require('../database/db');

const ExpenseModel = database.define('expenses', {
  text: {
    type: sequelize.STRING,
  },
  cost: {
    type: sequelize.FLOAT,
  },
});

module.exports = ExpenseModel;
