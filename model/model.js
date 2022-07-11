const sequelize = require('sequelize');
const database = require('../database/db');

const ExpenseModel = database.define('expensesTables', {
  text: {
    type: sequelize.STRING,
  },
  price: {
    type: sequelize.FLOAT,
  },
});

module.exports = ExpenseModel;
