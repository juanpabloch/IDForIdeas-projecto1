const postsRepository = require('../repositories/posts');

const getAll = async () => {
  const response = await postsRepository.getAll();
  return response;
};

const getById = async (id) => {
  const response = await postsRepository.getById(id);
  if (!response) {
    const error = new Error('post no exist');
    error.status = 404;
    throw error;
  }
  return response;
};

const create = async (body) => {
  const title = await postsRepository.getByTitle(body.title);
  if (title) {
    const error = new Error('title already exists');
    error.status = 400;
    throw error;
  }
  const response = await postsRepository.create(body);
  return response;
};

const update = async (id, body) => {
  const post = await postsRepository.getById(id);
  if (!post) {
    const error = new Error('post no exist');
    error.status = 404;
    throw error;
  }
  const response = await postsRepository.update(id, body);
  return response;
};

const remove = async (id) => {
  const response = await postsRepository.remove(id);
  if (!response) {
    const error = new Error('post no exist');
    error.status = 404;
    throw error;
  }
};

const addLike = async (id) => {
  const post = await postsRepository.getById(id);
  if (!post) {
    const error = new Error('post no exist');
    error.status = 404;
    throw error;
  }
  post.likes += 1;
  post.save();
  const response = await postsRepository.addLike(id, post);
  return response;
};

const removeLike = async (id) => {
  const post = await postsRepository.getById(id);
  if (!post) {
    const error = new Error('post no exist');
    error.status = 404;
    throw error;
  }
  post.dislikes += 1;
  post.save();
  const response = await postsRepository.removeLike(id, post);
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
