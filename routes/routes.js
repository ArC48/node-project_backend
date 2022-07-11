const express = require('express');

const router = express.Router();
const expenseController = require('../controller/expenses.controller');

router.get('/expenses', expenseController.getExpenses);

router.post('/expenses', expenseController.addExpense);

module.exports = router;
