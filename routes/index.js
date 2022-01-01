const express = require('express');

const router = express.Router();
const usersRoutes = require('./users');
const postsRoutes = require('./posts');

router.get('/', (req, res) => {
  res.json({ msg: 'welcome' });
});

router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
