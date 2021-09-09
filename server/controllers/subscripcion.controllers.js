const subsCtrl = {}

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

subsCtrl.readSubs = function (req, res, next) {
  models.subscripcions.findAll({ 
     attributes: { exclude: ["updatedAt"] }
   })
   .then(subscripcions => {
      res.send(subscripcions)
   })
   .catch(error => res.status(400).send(error))
}

subsCtrl.createSubs = function (req, res, next) {
  //res.send('respond with a resource');
  let nombresApellidos = req.body.nombres;
  let fecha = req.body.fecha;
  let provincia = req.body.provincia;
  let email = req.body.email;
  let detalle = req.body.message;

    models.subscripcions.create({
      nombresApellidos: nombresApellidos,
      fecha: fecha,
      provincia: provincia,
      email:email,
      detalle: detalle,
        
    })
    .then(subscripcions => {
      res.redirect('http://localhost:4200/contactanos'); //modificar el url a mostrar
      //res.send(subscripcions)
    })
    .catch(error => res.status(400).send(error))
}

subsCtrl.getSubs = function (req, res, next) {
  let id = req.params.id;
  models.subscripcions.findAll({
     where: {
      id: id
    }
  })
   .then(subscripcions => {
      res.send(subscripcions)
   })
   .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

subsCtrl.editSubs = function (req, res, next) {
  let id = req.params.id;
  let nombresApellidos = req.body.nombresApellidos;
  let fecha = req.body.fecha;
  let provincia = req.body.provincia;
  let email = req.body.email;
  let detalle = req.body.detalle;

    models.subscripcions.update({
      nombresApellidos: nombresApellidos,
      fecha: fecha,
      provincia: provincia,
      email: email,
      detalle: detalle
        
    }, {
       where: {
        id: id
    }
    })
    .then(subscripcions => {
        //res.redirect('http://localhost:4200/'); //modificar el url a mostrar
      res.send(subscripcions)
    })
    .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

subsCtrl.deleteSubs = function (req, res, next) {
  let id = req.params.id;
  models.subscripcions.destroy({
     where: {
      id: id
    }
  })
   .then(subscripcions => {
      res.send(subscripcions)
   })
   .catch(error => res.status(400).send(error))
  //res.send('respond with a resource');
}

module.exports = subsCtrl;