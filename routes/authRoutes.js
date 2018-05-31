const passport = require("passport");
const User = require("../models/User");
const chalk = require("chalk");

module.exports = app => {
  // === authO Login Form === //
  app.get("/login", passport.authenticate("auth0", {}));

  // === authO login callback === //
  app.get(
    "/login/callback",
    passport.authenticate("auth0", {
      failureRedirect: "http://localhost:3000/"
    }),
    function(req, res) {
      if (!req.user) {
        throw new Error("user login error");
      }
      console.log("***************");
      console.log("REQ.USER", req.user);

      // === authO User info ===//
      const { sub, name, nickname, picture, email } = req.user._json;

      const newUser = {
        id: sub,
        name,
        nickname,
        email,
        userPhoto: picture
      };

      // === Add User or check if User exists === //
      // return res.redirect("http://localhost:3000");
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
              // return res.send(user);
              return res.redirect("http://localhost:3000");
            });
          } else {
            console.log(chalk.cyan("USER FOUND", user));
            // return res.send(user);
            return res.redirect("http://localhost:3000");
          }
        }
      );
    }
  );

  app.post("/userupdate", (req, res) => {
    const { _id, name, city, state } = req.body;
    const userUpdate = { name, city, state };
    // Returns the new model instead of the old one upon update
    const mOptions = { new: true };
    User.findByIdAndUpdate(_id, userUpdate, mOptions, (err, user) => {
      console.log(chalk.green("Updated User Info: ", user));
      return res.send(user);
    });
  });

  // === CheckAuth === //
  app.get("/checkauth", (req, res) => {
    if (!req.user) {
      res.status(400).json({ error: "User not found" });
    } else {
      // console.log("USER FOUND2", req.user);
      User.findOne({ id: req.user.id }, (err, user) => {
        if (err) {
          console.log(err);
        }
        // console.log("HERE I AM", user);
        return res.status(200).send(user);
      });
    }
  });

  // === Logout === //
  app.get("/logout", (req, res) => {
    req.logOut();
    // res.redirect("http://localhost:3000");
    return res.status(200).send("HEYO");
  });
};
