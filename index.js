const cors = require('cors');
const express = require('express');
// const bodyParser = require('body-parser');
const route = require('./routes/routes');

const port = 4000;

const app = express();

app.use(express.json());
app.use(route);

app.use(cors());

app.listen(port, () => {
  console.log('listening to the server');
});
