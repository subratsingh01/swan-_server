const express = require('express');
const app = express();
const  router  = require('./routes.js');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use('/', router);


app.listen(PORT, console.log(`Listening on port ${PORT}`));