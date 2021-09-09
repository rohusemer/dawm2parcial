var express = require('express');
var router = express.Router();

const clienteCtrl = require('../controllers/cliente.controllers.js')


router.get('/', clienteCtrl.readCliente);
router.post('/', clienteCtrl.createCliente);
router.post('/login', clienteCtrl.loginCliente);
router.get('/:id', clienteCtrl.getCliente);
router.put('/:id', clienteCtrl.editCliente);
router.delete('/:id', clienteCtrl.deleteCliente);
module.exports = router;
