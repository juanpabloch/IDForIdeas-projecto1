const express = require('express');

const router = express.Router();
const controllers = require('../controllers/users');

router.get('/', controllers.getAll);

router.get('/:id', controllers.getById);

// esta ruta va con el registro de usuarios
router.post('/', controllers.create);

router.delete('/:id', controllers.remove);

module.exports = router;
