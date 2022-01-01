const express = require('express');

const router = express.Router();
const usersRoutes = require('./users');

router.get('/', (req, res) => {
  res.json({ msg: 'welcome' });
});

router.use('/users', usersRoutes);

module.exports = router;
