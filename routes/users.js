const express = require('express');

const router = express.Router();
const controllers = require('../controllers/users');

router.get('/', controllers.getAll);
router.get('/:id', controllers.getById);
router.delete('/:id', controllers.remove);

module.exports = router;
