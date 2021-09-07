const clienteCtrl = {}

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
  let apellidos = req.body.apellido;
  let correro = req.body.correro;
  let f_nacimiento = req.body.f_nacimiento;
  let cedula = req.body.cedula;
  let user = req.body.user;
  let pass = req.body.pass;

    models.clientes.create({
      nombre: nombre,
      apellidos: apellidos,
      correro: correro,
      f_nacimiento: f_nacimiento,
      cedula: cedula,
      usuario: user,
      password: pass
        
    })
    .then(clientes => {
        //res.redirect('http://localhost:4200/'); //modificar el url a mostrar
      res.send(clientes)
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
  let apellidos = req.body.apellido;
  let correro = req.body.correro;
  let f_nacimiento = req.body.f_nacimiento;
  let cedula = req.body.cedula;
  let user = req.body.user;
  let pass = req.body.pass;

    models.clientes.update({
      nombre: nombre,
      apellidos: apellidos,
      correro: correro,
      f_nacimiento: f_nacimiento,
      cedula: cedula,
      usuario: user,
      password: pass
        
    }, {
       where: {
        id: id
    }
    })
    .then(clientes => {
        //res.redirect('http://localhost:4200/'); //modificar el url a mostrar
      res.send(clientes)
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