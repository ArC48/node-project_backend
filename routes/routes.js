const express = require('express');

const router = express.Router();
const expenseController = require('../controller/expenses.controller');

router.route('/expenses')
  .get(expenseController.getExpenses)
  .post(expenseController.addExpense);

router.route('/expenses/:id')
  .patch(expenseController.editExpense)
  .delete(expenseController.deleteExpense);

module.exports = router;
