const express = require('express');
var cors = require('cors')
const morgan = require('morgan');


const app = express();

app.use(cors())
app.use(morgan('dev'));

app.use("/api/cliente", require('./routes/cliente.routes'))

module.exports = app;