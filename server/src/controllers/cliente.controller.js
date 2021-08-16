const clienteCtrl = {}
const sequelize = require('../models/cliente.js').sequelize;
const initModels = require("../models/init-models");
const models = initModels(sequelize);


clienteCtrl.getCliente = (req, res) => {
   models.cliente.findAll({ 
     attributes: { exclude: ["updatedAt"] }
   })
   .then(clientes => {
      res.send(clientes)
   })
   .catch(error => res.status(400).send(error))
}

clienteCtrl.createCliente = (req, res) => {
    res.send('crear Clientes')
}
clienteCtrl.readCliente = (req, res) => {
    res.send('obteniendo un Clientes')
}
clienteCtrl.editCliente = (req, res) => { }
clienteCtrl.deleteCliente = (req, res) => { }

module.exports = clienteCtrl;