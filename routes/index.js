var express = require('express');
var router = express.Router();
const {login, register, homepage} = require('../controllers/index.controller')

/* GET home page. */
router
    .post('/login', login)
    .post('/register', register)
    .get('/', homepage)

module.exports = router;
