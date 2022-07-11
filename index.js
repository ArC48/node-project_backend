const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 4000;

const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('listening to the server');
});
