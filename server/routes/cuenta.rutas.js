var express = require('express');
var router = express.Router();

const cuentaCtrl = require('../controllers/cuenta.controllers.js')


router.get('/', cuentaCtrl.readCuenta);
router.post('/', cuentaCtrl.createCuenta);
router.get('/:id', cuentaCtrl.getCuenta);
router.put('/:id', cuentaCtrl.editCuenta);
router.delete('/:id', cuentaCtrl.deleteCuenta);
module.exports = router;
