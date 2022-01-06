const models = require('../models');

const getOne = async (userId, postId) => {
  const response = await models.PostUsers.findAll({
    where: {
      UserId: userId,
      PostId: postId
    }
  });
  return response;
};

const insert = async (body) => {
  const response = await models.PostUsers.create(body);
  return response;
};

const update = async (userId, postId, option) => {
  const response = await models.PostUsers.update(option, {
    where: {
      UserId: userId,
      PostId: postId
    }
  });
  console.log(response);
  return response;
};

module.exports = {
  getOne,
  insert,
  update
};
