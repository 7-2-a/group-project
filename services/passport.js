const passport = require('passport');
const FbStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new FbStrategy(
    {
      clientID: keys.FbClientID,
      clientSecret: keys.FbClientSecret,
      callbackURL: '/auth/facebook/callback'
    },
    async (accessToken, refreshToken, public_profile, done) => {
      const existingUser = await User.findOne({
        facebookId: public_profile.id
      });

      if (existingUser) {
        // we already have a user record
        return done(null, existingUser);
      }
      // we dont have a user so make new user
      const user = await new User({ facebookId: public_profile.id }).save();
      done(null, user);
    }
  )
);