const clienteCtrl = {}
//invocar bcryptjs
const bcryptjs = require('bcrypt');
const { promisify } = require('util');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

clienteCtrl.readCliente = function (req, res, next) {
  models.clientes.findAll({ 
     attributes: { exclude: ["updatedAt"] }
   })
   .then(clientes => {
      res.send(clientes)
   })
   .catch(error => res.status(400).send(error))
}

clienteCtrl.createCliente = function (req, res, next) {
  //res.send('respond with a resource');
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let correo = req.body.correo;
  let fechanacimiento = req.body.fechanacimiento;
  let cedula = req.body.cedula;
  let user = req.body.user;
  let pass = req.body.pass;
  let salt = bcryptjs.genSaltSync(8);
  let passhash = bcryptjs.hashSync(pass, salt);
  console.log(passhash)
    models.clientes.create({
      nombre: nombre,
      apellidos: apellido,
      correo: correo,
      fechaNacimiento: fechanacimiento,
      cedula: cedula,
      usuario: user,
      passwd: passhash
        
    })
    .then(clientes => {
        res.redirect('http://localhost:4200/'); //modificar el url a mostrar
      //res.send(clientes)
    })
    .catch(error => res.status(400).send(error))
}

clienteCtrl.getCliente = function (req, res, next) {
  let id = req.params.id;
  models.clientes.findAll({
     where: {
      id: id
    }
  })
   .then(clientes => {
      res.send(clientes)
   })
   .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

clienteCtrl.editCliente = function (req, res, next) {
  let id = req.params.id;
  let nombre = req.body.nombre; //poner los nombres de los imput
  let apellido = req.body.apellido;
  let correo = req.body.correo;
  let fechanacimiento = req.body.fechanacimiento;
  let cedula = req.body.cedula;
  let user = req.body.user;
  let pass = req.body.pass;

    models.clientes.update({
      nombre: nombre,
      apellidos: apellido,
      correo: correo,
      fechaNacimiento: fechanacimiento,
      cedula: cedula,
      usuario: user,
      passwd: pass
        
    }, {
       where: {
        id: id
    }
    })
    .then(clientes => {
        res.redirect('http://localhost:4200/'); //modificar el url a mostrar
      //res.send(clientes)
    })
    .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

clienteCtrl.deleteCliente = function (req, res, next) {
  let id = req.params.id;
  models.clientes.destroy({
     where: {
      id: id
    }
  })
   .then(clientes => {
      res.send(clientes)
   })
   .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

module.exports = clienteCtrl;