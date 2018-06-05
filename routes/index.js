const mongoose = require("mongoose");
const Book = require("../models/Book");
const chalk = require("chalk");
const User = require("../models/User");

module.exports = app => {
  // === Get all books === //
  app.get("/books", (req, res) => {
    Book.find({}, (err, books) => {
      if (err) {
        console.log(err);
      } else {
        res.send(books);
      }
    }).populate("bookOwner", "");
  });

  // === Add a book === //
  app.post("/books/add", async (req, res) => {
    const { title, author, coverImageURL } = req.body;
    const { sub } = req.user._json;
    // console.log(req.body);
    // console.log("USER:", req.user._json);
    const { _id } = await findUser_id(sub);
    // console.log("user_id", _id);
    const newBook = {
      title,
      author,
      coverImageURL,
      bookOwner: _id
    };
    Book.create(newBook, (err, book) => {
      if (err) {
        throw err;
      } else {
        /*  
        TODO - Need to add Book _id to User Model 
        User.update()
        */
        res.send(`${newBook.title} has been added`);
      }
    });
    // Save for testing without adding Book
    // res.send(`${newBook.title} has been added`);
  });
};

function findUser_id(userSubID) {
  return User.findOne({ id: userSubID }, "_id", (err, user) => {
    if (err) {
      throw err;
    }
    console.log("USER FOUND 2", user._id);
  });
}
