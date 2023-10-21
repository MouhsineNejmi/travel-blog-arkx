const LocalStrategy = require('passport-local').Strategy;
const { verifyPassword } = require('../helpers/auth.helper');
const User = require('../models/user.model');

module.exports = (passport) => {
  passport.use(
    'local',
    new LocalStrategy(async (username, password, done) => {
      const user = await User.findOne({ username });

      if (!user) {
        console.log('Incorrect username or password');
        return done(null, false, {
          message: 'Incorrect username or password.',
        });
      }

      const isMatched = await verifyPassword(user.password, password);
      if (isMatched) {
        console.log('Invalid password');

        return done(null, false, {
          message: 'Invalid password.',
        });
      }

      return done(null, user);
    })
  );
};
