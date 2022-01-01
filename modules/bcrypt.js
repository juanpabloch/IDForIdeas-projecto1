const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);
const hash = (password) => bcrypt.hashSync(password, salt);
const unHash = (password, hashPassword) => bcrypt.compareSync(password, hashPassword);

module.exports = {
  hash,
  unHash
};
