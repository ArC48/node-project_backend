const express = require('express');

const router = express.Router();
const expenseController = require('../controller/expenses.controller');

router.get('/expenses', expenseController.getExpenses);

module.exports = router;
