const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');

const verifyPassword = async (password, hashedPassword) => {
  return await compare(password, hashedPassword);
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });
};

module.exports = { verifyPassword, generateAccessToken };
