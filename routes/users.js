const express = require('express');

const router = express.Router();
const controllers = require('../controllers/users');
const auth = require('../middlewares/auth');

router.get('/', auth.isAdmin, controllers.getAll);
router.get('/:id', auth.isAdmin, controllers.getById);
router.delete('/:id', auth.isOwnUser, controllers.remove);

module.exports = router;
