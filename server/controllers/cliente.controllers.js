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
  res.send('respond with a resource');
}

clienteCtrl.getCliente = function (req, res, next) {
  res.send('respond with a resource');
}

clienteCtrl.editCliente = function (req, res, next) {
  res.send('respond with a resource');
}

clienteCtrl.deleteCliente = function (req, res, next) {
  res.send('respond with a resource');
}

module.exports = clienteCtrl;