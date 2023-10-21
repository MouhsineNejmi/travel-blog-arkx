const mongoose = require('mongoose');

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.ATLAS_URL);
  console.log('Mongodb is connected');
};

module.exports = connectDB;
