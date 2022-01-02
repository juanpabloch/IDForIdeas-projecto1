const { reject } = require('bcrypt/promises');
const { check, validationResult } = require('express-validator');
const path = require('path');

const title = check('title')
  .notEmpty()
  .withMessage('title require')
  .custom((value) => {
    const whiteSpaces = /[$%&|<>#'"]/g.test(value);
    if (whiteSpaces) {
      return reject('no symbols allowed');
    }
    return true;
  });

const image = check('image')
  .notEmpty()
  .withMessage('title require')
  .custom((value) => {
    const whiteSpaces = /[$%&|<># '"]/g.test(value);
    if (whiteSpaces) {
      return reject('no spaces or symbols allowed');
    }
    return true;
  })
  .custom((value) => {
    const ext = (path.extname(value).toLowerCase());
    const validsExt = [
      '.jpg',
      '.jpeg',
      '.png',
    ];
    if (!validsExt.includes(ext)) {
      return reject('Invalid image extension');
    }
    return true;
  });

const createValidation = [
  title, image,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    next();
  }
];

module.exports = {
  createValidation
};
