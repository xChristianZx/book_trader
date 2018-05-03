const passport = require("passport");

module.exports = app => {
  app.get("/login", passport.authenticate("auth0", {}));

  app.get(
    "/login/callback",
    passport.authenticate("auth0", { failureRedirect: "/login" }),
    function(req, res) {
      if (!req.user) {
        throw new Error("user null");
      }
      res.redirect("/");
    }
  );
};
