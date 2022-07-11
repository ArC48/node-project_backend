const expenseModel = require('../model/model');

module.exports.getExpenses = async (req, res) => {
  try {
    const allExpenses = await expenseModel.findAll();
    res.send(allExpenses);
  } catch (err) {
    res.send(err);
  }
};
