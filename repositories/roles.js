const models = require('../models');

const getAll = async () => {
  const response = await models.Roles.findAll();
  return response;
};

const getByName = async (name) => {
  const response = await models.Roles.findOne({
    where: {
      name
    }
  });
  return response;
};

module.exports = {
  getAll,
  getByName
};
