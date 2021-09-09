const cunetaCtrl = {}

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
  let clienteId = req.body.clienteid;
  let tipo = req.body.tipo;
  let monto = req.body.monto;
  let fecha = req.body.fecha;

    models.cuenta.create({
      clienteiId: clienteId,
      tipo: tipo,
      monto: monto,
      fecha: fecha
        
    })
    .then(registros => {
        //res.redirect('http://localhost:4200/'); //modificar el url a mostrar
      res.send(registros)
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

registroCtrl.editRegistro = function (req, res, next) {
  let id = req.params.id;
  let clienteid = req.body.clienteid;
  let cuentaid = req.body.cuentaid;
  let tipo = req.body.tipo;
  let monto = req.body.monto;
  let fecha = req.body.fecha;
  let categoria = req.body.categoria;
  let descripcion = req.body.descripcion;

    models.registros.update({
      clienteid: clienteid,
      cuentaid: cuentaid,
      tipo: tipo,
      monto: monto,
      fecha: fecha,
      categoria: categoria,
      descripcion: descripcion
        
    }, {
       where: {
        id: id
    }
    })
    .then(registros => {
        //res.redirect('http://localhost:4200/'); //modificar el url a mostrar
      res.send(registros)
    })
    .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

registroCtrl.deleteRegistro = function (req, res, next) {
  let id = req.params.id;
  models.registros.destroy({
     where: {
      id: id
    }
  })
   .then(registros => {
      res.send(registros)
   })
   .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

module.exports = registroCtrl;