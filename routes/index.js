const express = require('express');

const router = express.Router();
const usersRoutes = require('./users');
const postsRoutes = require('./posts');
const authRoutes = require('./auth');

router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);
router.use('/auth', authRoutes);

module.exports = router;
