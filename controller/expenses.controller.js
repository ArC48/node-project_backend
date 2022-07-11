const expenseModel = require('../model/expenses.model');

exports.getExpenses = async (req, res) => {
  try {
    const allExpenses = await expenseModel.findAll();
    res.send(allExpenses);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

exports.addExpense = async (req, res) => {
  const { text, price } = req.body;
  const errorsStorage = [];

  if (!text || !price) {
    errorsStorage.push('Both Fields are required');
  }
  if (!text.trim() || !price) {
    errorsStorage.push('fields can\'t be empty');
  }
  if (price && typeof price !== 'number') {
    errorsStorage.push('Price must be a number');
  }
  if (price < 0) {
    errorsStorage.push('Price can\'t be a negative number');
  }
  if (errorsStorage.length) {
    res.status(422).send({ error: errorsStorage });
  }

  try {
    const newExpenseItem = await expenseModel.create({
      text,
      price,
    });
    return newExpenseItem && (await this.getExpenses(req, res));
  } catch (err) {
    return res.status(422).send({ error: err });
  }
};
