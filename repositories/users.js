const models = require('../models');

const getAll = async () => {
  const response = await models.Users.findAll({
    attributes: ['id', 'email', 'roleId']
  });
  return response;
};

const getById = async (id) => {
  const response = await models.Users.findOne({
    where: { id }
  });
  return response;
};

const getByEmail = async (email) => {
  const response = await models.Users.findOne({
    where: { email }
  });
  return response;
};

const create = async (body) => {
  const response = await models.Users.create(body);
  return response;
};

const update = async (id, body) => {
  const response = await models.Users.update(body, {
    where: { id }
  });
  return response;
};

const remove = async (id) => {
  const response = await models.Users.destroy({
    where: { id }
  });
  return response;
};

module.exports = {
  getAll,
  getById,
  getByEmail,
  remove,
  create,
  update
};
