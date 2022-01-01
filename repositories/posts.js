const models = require('../models');

const getAll = async () => {
  const response = await models.Posts.findAll();
  return response;
};

const getById = async (id) => {
  const response = await models.Posts.findOne({
    where: { id }
  });
  return response;
};

const create = async (body) => {
  const response = await models.Posts.create(body);
  return response;
};

const update = async (id, body) => {
  const response = await models.Posts.update(body, {
    where: { id }
  });
  return response;
};

const remove = async (id) => {
  const response = await models.Posts.destroy({
    where: { id }
  });
  return response;
};

const addLike = async (id, body) => {
  const response = await models.Posts.update(body, {
    where: { id }
  });
  return response;
};

const removeLike = async (id, body) => {
  const response = await models.Posts.update(body, {
    where: { id }
  });
  return response;
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
