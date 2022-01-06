const usersServices = require('../services/users');

const getAll = async (req, res, next) => {
  try {
    const response = await usersServices.getAll();
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await usersServices.getById(id);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const response = await usersServices.create(req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await usersServices.update(id, req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await usersServices.remove(id);
    res.json({ mgs: 'User deleted successfully' });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const response = await usersServices.login(req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const addPost = async (req, res, next) => {
  try {
    const { userId, postId } = req.params;
    const { option } = req.query;
    const response = await usersServices.addPost(userId, postId, option);
    res.json(response);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create,
  login,
  addPost
};
