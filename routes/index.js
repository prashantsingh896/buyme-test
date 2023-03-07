const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controller');

router.get('/',function(req,res){
    return res.end('Homepage');
})

router.post('/update', controllers.update);

module.exports = router;