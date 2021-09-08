var express = require('express');
var router = express.Router();

const authCtrl = require('../controllers/auth.controllers.js')


router.post('/login', authCtrl.login);
module.exports = router;