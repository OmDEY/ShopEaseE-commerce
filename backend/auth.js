const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotENV = require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: dotENV.parsed.CLIENT_ID,
  clientSecret: dotENV.parsed.CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  // Here, you can save the user profile to your database if necessary.
  return done(null, profile);
}
));
