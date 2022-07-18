const cors = require('cors');
const express = require('express');
const route = require('./routes/routes');

const port = 4000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log('listening to the server');
});
