const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: '946210058903-phmfasj5o0memmir4kk73lmg8ibp9hju.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:5000/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  // Here, you can save the user profile to your database if necessary.
  return done(null, profile);
}
));
