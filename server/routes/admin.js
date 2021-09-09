var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json({
        error: null,
        data: {
            title: 'mi ruta protegida',
            user: req.user
        }
    })
});

module.exports = router