const express = require('express');

const router = express.Router();
const controllers = require('../controllers/users');

router.post('/register', controllers.create);
router.post('/login', controllers.login);

module.exports = router;
