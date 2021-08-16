const { Router } = require('express')
const router = Router()

const clienteCtrl = require('../controllers/cliente.controller.js')

router.get('/', clienteCtrl.getCliente)
router.post('/', clienteCtrl.createCliente)
router.get('/:id', clienteCtrl.readCliente)
router.put('/:id', clienteCtrl.editCliente)
router.delete('/:id', clienteCtrl.deleteCliente)
module.exports = router