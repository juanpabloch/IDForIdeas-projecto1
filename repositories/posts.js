const { Op } = require('sequelize');
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

const getByTitle = async (title) => {
  const response = await models.Posts.findOne({
    where: {
      title: { [Op.eq]: title }
    }
  });
  return response;
};

const create = async (newPost) => {
  const response = await models.Posts.create(newPost);
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

const updateLikeDislike = async (id, body) => {
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
  updateLikeDislike,
  getByTitle
};
