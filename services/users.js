const usersRepository = require('../repositories/users');

const getAll = async () => {
  const response = await usersRepository.getAll();
  return response;
};

const getById = async (id) => {
  const response = await usersRepository.getById(id);
  if (!response) {
    const error = new Error('user not exist');
    error.status = 404;
    throw error;
  }
  return response;
};

const create = async (body) => {
  const data = body;
  data.roleId = 2;
  const response = await usersRepository.create(data);
  return response;
};

const update = async (id, body) => {
  const { email } = body;
  const user = await usersRepository.getById(id);
  if (!user) {
    const error = new Error('user not exist');
    error.status = 404;
    throw error;
  }
  const data = body;
  data.email = email || user.email;
  const response = await usersRepository.update(id, data);
  return response;
};

const remove = async (id) => {
  const response = await usersRepository.remove(id);
  if (!response) {
    const error = new Error('user not exist');
    error.status = 404;
    throw error;
  }
  return response;
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create
};
