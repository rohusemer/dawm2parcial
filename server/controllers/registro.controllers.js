const registroCtrl = {}

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

registroCtrl.readRegistro = function (req, res, next) {
  models.registros.findAll({ 
     attributes: { exclude: ["updatedAt"] }
   })
   .then(registros => {
      res.send(registros)
   })
   .catch(error => res.status(400).send(error))
}

registroCtrl.createRegistro = function (req, res, next) {
  //res.send('respond with a resource');
  let clienteid = req.body.clienteid;
  let cuentaid = req.body.cuentaid;
  let tipo = req.body.tipo;
  let monto = req.body.monto;
  let fecha = req.body.fecha;
  let categoria = req.body.categoria;
  let descripcion = req.body.descripcion;

    models.registros.create({
      clienteid: clienteid,
      cuentaid: cuentaid,
      tipo: tipo,
      monto: monto,
      fecha: fecha,
      categoria: categoria,
      descripcion: descripcion
        
    })
    .then(registros => {
        //res.redirect('http://localhost:4200/'); //modificar el url a mostrar
      res.send(registros)
    })
    .catch(error => res.status(400).send(error))
}

registroCtrl.getRegistro = function (req, res, next) {
  let id = req.params.id;
  models.registros.findAll({
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