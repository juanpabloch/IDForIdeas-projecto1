const jwt = require('../modules/jwt');
const rolRepository = require('../repositories/roles');
const usersRepository = require('../repositories/users');

const isAdmin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      const error = new Error('unauthorize');
      error.status = 401;
      throw error;
    }
    const token = authorization.split(' ')[1];
    const decodeToken = jwt.decodeToken(token);
    const response = await rolRepository.getById(decodeToken.role);
    if (response.name !== 'Admin') {
      const error = new Error('unauthorize');
      error.status = 401;
      throw error;
    }
    next();
  } catch (e) {
    res.status(401).json({ Error: e.message });
  }
};

const isAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      const error = new Error('unauthorize');
      error.status = 401;
      throw error;
    }

    const token = authorization.split(' ')[1];
    jwt.decodeToken(token);
    next();
  } catch (e) {
    res.status(401).json({ Error: e.message });
  }
};

const isOwnUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { authorization } = req.headers;
    if (!authorization) {
      const error = new Error('unauthorize');
      error.status = 401;
      throw error;
    }
    const token = authorization.split(' ')[1];
    const decodeToken = jwt.decodeToken(token);
    const user = await usersRepository.getById(decodeToken.id);
    if (!user) {
      const error = new Error('user no exist');
      error.status = 401;
      throw error;
    }
    if (parseInt(user.id) !== parseInt(id)) {
      const error = new Error('unauthorize');
      error.status = 401;
      throw error;
    }
    next();
  } catch (e) {
    res.status(401).json({ Error: e.message });
  }
};

module.exports = {
  isAdmin,
  isAuth,
  isOwnUser
};
