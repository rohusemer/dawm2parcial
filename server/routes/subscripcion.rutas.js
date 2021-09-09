var express = require('express');
var router = express.Router();

const subsCtrl = require('../controllers/subscripcion.controllers.js')


router.get('/', subsCtrl.readSubs);
router.post('/', subsCtrl.createSubs);
router.get('/:id', subsCtrl.getSubs);
router.put('/:id', subsCtrl.editSubs);
router.delete('/:id', subsCtrl.deleteSubs);
module.exports = router;
