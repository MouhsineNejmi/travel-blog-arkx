const router = require('express').Router();
const { body } = require('express-validator');
const { register, login } = require('../controllers/auth.controller');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  '/register',
  [
    body('username').notEmpty().escape(),
    body('password').isLength({ min: 6, max: 15 }).escape(),
  ],
  upload.single('avatar'),
  register
);

router.post('/login', login);

module.exports = router;
