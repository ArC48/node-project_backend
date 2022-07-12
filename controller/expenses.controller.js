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

  // Validations

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

  // expense item create & returning all the expenses

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

exports.editExpense = async (req, res) => {
  const { text, price } = req.body;
  const { id } = req.params;
  const errorsStorage = [];

  // Validations

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

  // Existing expense edit logic

  try {
    const [change] = await expenseModel.update(req.body, { where: { id } });
    if (change) return await this.getExpenses(req, res);
    return res.status(402).send({ error: 'wrong id' });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};
