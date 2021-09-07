var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./src/configMensaje.js')

var indexRouter = require('./routes/index');
var clienteRouter = require('./routes/cliente.rutas');
var registroRouter = require('./routes/registro.rutas');

var app = express();
app.use(bodyParser.json());
app.use(cors());



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/cliente', clienteRouter);
app.use('/api/registro', registroRouter);

app.post('/contactanos', (req, res) => {
	configMensaje(req.body)
})

app.listen(3000, () => {
console.log('Servidor corriendo')
});

module.exports = app;
