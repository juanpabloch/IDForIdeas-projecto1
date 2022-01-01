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
    res.json({ mgs: 'posts removed successfully' });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create
};
