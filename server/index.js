require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const passportConfig = require('./config/passport');

const connectDB = require('./config/db.js');
const indexRoutes = require('./routes/index.routes');

passportConfig(passport);

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(indexRoutes);

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
