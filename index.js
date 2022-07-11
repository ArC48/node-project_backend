const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/db');
const route = require('./routes/routes');

const port = 4000;

const app = express();
app.use(route);

app.use(bodyParser.json());
app.use(cors);

app.listen(port, () => {
  console.log('listening to the server');
});