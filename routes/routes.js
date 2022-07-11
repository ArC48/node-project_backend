const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');

router.get('/expenses', controller.getExpenses);

module.exports = router;
