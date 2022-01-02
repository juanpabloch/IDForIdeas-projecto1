const { reject } = require('bcrypt/promises');
const { check, validationResult } = require('express-validator');

const email = check('email')
  .notEmpty()
  .withMessage('email require')
  .isEmail()
  .withMessage('invalid email')
  .custom((value) => {
    const whiteSpaces = /[$%&|<># ]/g.test(value);
    if (whiteSpaces) {
      return reject('no spaces or symbols allowed');
    }
    return true;
  });

const password = check('password')
  .notEmpty()
  .withMessage('password require')
  .isLength({ min: 6 })
  .withMessage('Password must have more than 5 characters')
  .custom((value) => {
    const whiteSpaces = /[$%&|<># ]/g.test(value);
    if (whiteSpaces) {
      return reject('no spaces or symbols allowed');
    }
    return true;
  });

const userRegister = [
  email, password,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    next();
  }
];

const userLogin = [
  email, password,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    next();
  }
];

module.exports = {
  userRegister,
  userLogin
};
