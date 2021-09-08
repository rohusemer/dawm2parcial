const authCtrl = {}
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { promisify } = require('util');
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

authCtrl.login = function (req, res, next) {
    try {
        let correo = req.body.correo;
        let user = req.body.user;
        let pass = req.body.pass;
        let passhash = bcryptjs.hash(pass, 8);

        if (!user || !pass) {
            res.redirect('http://localhost:4200/postclientes'); //modificar el url a mostrar
        } else {
            models.clientes.findAll({
                where: {
                    usuario: user,
                    passwd: pass
                }
            })
            .then(clientes => {
                res.redirect('http://localhost:4200/')
            })
            .catch(error => res.status(400).send(error))
            //res.send('respond with a resource');
        }
    } catch (error) {
        
    }
    
}