var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')
/* GET users listing. */
router.post('/register', usersController.create);
router.post('/login', usersController.login);
router.get('/', usersController.getAll);
module.exports = router;
