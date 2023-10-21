const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  image_name: { type: String },
  profile_image: {
    type: String,
    default: 'https://fontawesome.com/icons/user?f=classic&s=regular&sz=lg',
  },
  username: { type: String, required: true, unique: true },
  email: { type: String, require: true, unique: true },
  role: {
    enum: ['admin', 'visitor'],
    type: String,
    required: true,
  },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
