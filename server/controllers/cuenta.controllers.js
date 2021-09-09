const cuentaCtrl = {}

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

cuentaCtrl.readCuenta = function (req, res, next) {
  models.cuenta.findAll({ 
     attributes: { exclude: ["updatedAt"] }
   })
   .then(cuentas => {
      res.send(cuentas)
   })
   .catch(error => res.status(400).send(error))
}

cuentaCtrl.createCuenta = function (req, res, next) {
  //res.send('respond with a resource');
  let clienteid = req.body.clienteid;
  let tipo = req.body.tipo;
  let monto = req.body.monto;
  let fecha = req.body.fecha;

    models.cuenta.create({
      clienteId: clienteid,
      tipo: tipo,
      monto: monto,
      fecha: fecha,
        
    })
    .then(cuentas => {
      res.redirect('http://localhost:4200/estadisticas'); //modificar el url a mostrar
      //res.send(cuentas)
    })
    .catch(error => res.status(400).send(error))
}

cuentaCtrl.getCuenta = function (req, res, next) {
  let id = req.params.id;
  models.cuenta.findAll({
     where: {
      id: id
    }
  })
   .then(cuentas => {
      res.send(cuentas)
   })
   .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

cuentaCtrl.editCuenta = function (req, res, next) {
  let id = req.params.id;
  let clienteId = req.body.clienteid;
  let tipo = req.body.tipo;
  let monto = req.body.monto;
  let fecha = req.body.fecha;

    models.cuenta.update({
      clienteId: clienteId,
      tipo: tipo,
      monto: monto,
      fecha: fecha,
        
    }, {
       where: {
        id: id
    }
    })
    .then(cuentas => {
      res.redirect('http://localhost:4200/registros'); //modificar el url a mostrar
      res.send(cuentas)
    })
    .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

cuentaCtrl.deleteCuenta = function (req, res, next) {
  let id = req.params.id;
  models.cuenta.destroy({
     where: {
      id: id
    }
  })
   .then(cuentas => {
      res.send(cuentas)
   })
   .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

module.exports = cuentaCtrl;