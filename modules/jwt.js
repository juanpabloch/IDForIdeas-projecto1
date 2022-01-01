const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('./keys/privateKey.pem');
const publicKey = fs.readFileSync('./keys/publicKey.pem');

const signOptions = { expiresIn: '8h', algorithm: 'RS256' };

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);

const decodeToken = (token) => jwt.verify(token, publicKey);

module.exports = {
  createToken,
  decodeToken
};
