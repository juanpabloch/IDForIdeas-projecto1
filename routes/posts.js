const express = require('express');

const router = express.Router();
const controllers = require('../controllers/posts');
const auth = require('../middlewares/auth');

router.get('/', auth.isAuth, controllers.getAll);
router.get('/:id', auth.isAdmin, controllers.getById);
router.post('/', auth.isAdmin, controllers.create);
router.patch('/:id', auth.isAdmin, controllers.update);
router.delete('/:id', auth.isAdmin, controllers.remove);

// ver como conectar
router.patch('/:id/like', controllers.addLike);
router.patch('/:id/dislike', controllers.removeLike);

module.exports = router;
