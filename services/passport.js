const Auth0Strategy = require("passport-auth0");
const passport = require("passport");
const keys = require("../config/keys");
const session = require("express-session");
const router = require("express").Router();
const User = require("../models/User");

const strategy = new Auth0Strategy(
  {
    domain: "z-projects.auth0.com",
    clientID: keys.auth0ClientID,
    clientSecret: keys.auth0ClientSecret,
    callbackURL: "/login/callback",
    scope: "openid profile email"
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token profile has all the information
    // from the user
    console.log("PROFILE", profile._json);
    return done(null, profile);
  }
);

router.use(
  session({
    resave: true,
    secret: keys.sessionSecret,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000
    } // 1 hour
  })
);

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(strategy);

module.exports = router;
