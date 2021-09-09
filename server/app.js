var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');

const configMensaje = require('./src/configMensaje.js')

var indexRouter = require('./routes/index');
var clienteRouter = require('./routes/cliente.rutas');
var cuentaRouter = require('./routes/cuenta.rutas');
var registroRouter = require('./routes/registro.rutas');
var validaToken = require('./middleware/valida-token')

var adminRouter = require("./routes/admin");

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
app.use('/api/cuenta', cuentaRouter);
app.use("/api/admin", validaToken, adminRouter);

// invocacion a dontenv
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });



// var de sesion
const sesion = require('express-session');
app.use(sesion(
	{
		secret: 'secret',
		resave: true,
		saveUnitialized: true
	}
));

app.post('/contactanos', (req, res) => {
	configMensaje(req.body)
})

app.listen(3000, () => {
console.log('Servidor corriendo')
});

module.exports = app;
