var express = require('express');
var router = express.Router();

const registroCtrl = require('../controllers/registro.controllers.js')


router.get('/', registroCtrl.readRegistro);
router.post('/', registroCtrl.createRegistro);
router.get('/:id', registroCtrl.getRegistro);
router.put('/:id', registroCtrl.editRegistro);
router.delete('/:id', registroCtrl.deleteRegistro);
module.exports = router;
