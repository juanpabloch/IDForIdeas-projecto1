const usersRepository = require('../repositories/users');
const bcrypt = require('../modules/bcrypt');
const jwt = require('../modules/jwt');
const mailer = require('../modules/mailer');

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
  const email = await usersRepository.getByEmail(data.email);
  if (email) {
    const error = new Error('email already exist');
    error.status = 400;
    throw error;
  }
  data.password = bcrypt.hash(data.password);
  data.roleId = 2;
  const response = await usersRepository.create(data);
  const mailOptions = {
    from: 'juanpablochoter@gmail.com',
    to: data.email,
    subject: 'welcome to your fashion app',
    text: `hola ${body.email.split('@')[0]}`
  };
  mailer.sendEmail(mailOptions);
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
};

const login = async (body) => {
  const { email, password } = body;
  const user = await usersRepository.getByEmail(email);
  if (!user) {
    const error = new Error('email or password not valid');
    error.status = 404;
    throw error;
  }
  const validPassword = bcrypt.unHash(password, user.password);
  if (!validPassword) {
    const error = new Error('email or password not valid');
    error.status = 404;
    throw error;
  }

  const JWTObject = {
    id: user.id,
    role: user.roleId
  };

  const JWT = jwt.createToken(JWTObject);

  return { msg: 'welcome', JWT };
};

module.exports = {
  getAll,
  getById,
  remove,
  update,
  create,
  login
};
