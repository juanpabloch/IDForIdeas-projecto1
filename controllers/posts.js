const postsServices = require('../services/posts');

const getAll = async (req, res, next) => {
  try {
    const response = await postsServices.getAll();
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await postsServices.getById(id);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const response = await postsServices.create(req.files.image, req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await postsServices.create(id, req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await postsServices.remove(id);
    res.json({ mgs: 'posts removed successfully' });
  } catch (e) {
    next(e);
  }
};

const addLike = async (req, res, next) => {
  try {
    const { id } = req.params;
    await postsServices.addLike(id);
    res.json({ msg: 'like' });
  } catch (e) {
    next(e);
  }
};

const removeLike = async (req, res, next) => {
  try {
    const { id } = req.params;
    await postsServices.removeLike(id);
    res.json({ msg: 'dislike' });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  addLike,
  removeLike
};
