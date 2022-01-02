const express = require('express');

const router = express.Router();
const controllers = require('../controllers/users');
const validations = require('../middlewares/users');

router.post('/register', validations.userRegister, controllers.create);
router.post('/login', validations.userLogin, controllers.login);

module.exports = router;
