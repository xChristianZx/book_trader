const passport = require("passport");
const User = require("../models/User");
const chalk = require("chalk");

module.exports = app => {
  // === authO Login Form === //
  app.get("/login", passport.authenticate("auth0", {}));

  // === authO login callback === //
  app.get(
    "/login/callback",
    passport.authenticate("auth0", { failureRedirect: "/login" }),
    function(req, res) {
      if (!req.user) {
        throw new Error("user null");
      }
      console.log("***************");
      console.log("REQ.USER", req.user);

      // === authO User info ===//
      const { sub, name, nickname, picture } = req.user._json;

      const newUser = {
        id: sub,
        name,
        nickname,
        userPhoto: picture
      };

      // === Add User or check if User exists === //
      User.findOne(
        {
          id: sub
        },
        (err, user) => {
          if (err) {
            throw err;
          } else if (!user) {
            User.create(newUser, (err, user) => {
              if (err) {
                throw err;
              }
              console.log(chalk.cyan(`${user.name} has been added`));
              return res.send(user);
            });
          } else {
            console.log(chalk.cyan("USER FOUND", user));
            return res.send(user);
          }
        }
      );
    }
  );
};
