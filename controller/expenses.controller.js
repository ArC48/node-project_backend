const expenseModel = require('../model/expenses.model');

module.exports.getExpenses = async (req, res) => {
  try {
    const allExpenses = await expenseModel.findAll();
    res.send(allExpenses);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};
