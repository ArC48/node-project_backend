const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< Updated upstream
=======
const database = require('./database/db');
const route = require('./routes/routes');
>>>>>>> Stashed changes

const port = 4000;

const app = express();
app.use(route);

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('listening to the server');
});
