const express = require('express');

const router = express.Router();
const controllers = require('../controllers/posts');

router.get('/', controllers.getAll);
router.get('/:id', controllers.getById);
router.post('/', controllers.create);
router.patch('/:id', controllers.update);
router.delete('/:id', controllers.remove);
router.patch('/:id/like', controllers.addLike);
router.patch('/:id/dislike', controllers.removeLike);

module.exports = router;
