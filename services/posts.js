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

const create = async (image, body) => {
  const title = await postsRepository.getByTitle(body.title);
  if (title) {
    const error = new Error('title already exists');
    error.status = 400;
    throw error;
  }

  const newPost = {
    ...body,
    image: image.firebaseURL
  }

  const response = await postsRepository.create(newPost);
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

const addLikeDislike = async (id, option) => {
  const post = await postsRepository.getById(id);
  if (option === 'like') {
    post.likes += 1;
  }else{
    post.dislikes += 1;
  }
  post.save();
  const response = await postsRepository.updateLikeDislike(id, post);
  return response;
}

const updateLikes = async (id, option) => {
  const post = await postsRepository.getById(id);
  if (option === 'like') {
    post.likes += 1;
    post.dislikes -= 1
  }else{
    post.dislikes += 1;
    post.likes -= 1;
  }
  post.save();
  const response = await postsRepository.updateLikeDislike(id, post);
  return response;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  addLikeDislike,
  updateLikes
};
