const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/db');
const cors = require('cors');

const port = 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors);

app.listen(port, () => {
  console.log('listening to the server');
});

database.authenticate()
  .then(() => console.log('database connected'))
  .catch((err) => console.log('error:', err));
