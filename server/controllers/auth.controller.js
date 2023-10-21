const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user.model');
const { generateAccessToken } = require('../helpers/auth.helper');
const { uploadImageToS3, getImageLink } = require('../helpers/aws.helper');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const { file } = req;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const key = await uploadImageToS3(file);
    const imageLink = await getImageLink(key);

    const user = await User.create({
      image_name: key,
      profile_image: imageLink,
      username,
      email,
      role: 'admin',
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ status: 201, message: 'User created successfully.', data: user });
  } catch (error) {
    console.log(error);
    return res.json({ message: error?.message });
  }
};

exports.login = async (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log(err, user);
    if (err || !user) {
      return res.json(404).json({
        status: 404,
        message: 'User with this credentials not found',
      });
    }

    req.login(user, { session: false }, (err) => {
      if (err) {
        return res.json({ message: err?.message });
      }

      user.last_login = Date.now();

      const accessToken = generateAccessToken({
        _id: user._id,
        role: user.role ? user.role : 'visitor',
      });

      res.cookie('accessToken', accessToken);

      return res.status(200).json({ status: 200, accessToken, data: user });
    });
  })(req, res);
};
