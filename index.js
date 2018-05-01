const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const seedDB = require("./seed");
const Book = require("./models/Book");
const app = express();

// === Mongoose === //
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

// === Express Middleware === //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static("views"));
app.set("view engine", "ejs");

// Seed mLabDB
// seedDB();

// === ROUTES === //
require("./routes/index")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serving on ${PORT}`);
});
