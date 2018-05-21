const mongoose = require("mongoose");
const Book = require("../models/Book");
const chalk = require('chalk');

module.exports = app => {
  // === Get all books === //
  app.get("/books", (req, res) => {
    Book.find({}, (err, books) => {
      if (err) {
        console.log(err);
      } else {
        res.send(books);
      }
    });
  });

  // === Add a book === //
  app.post("/books/add", (req, res) => {
    const newBook = req.body;
    console.log(req.body);
    Book.create(newBook, (err, book) => {
      if (err) {
        throw err;
      } else {
        res.send(chalk.cyan(`${newBook.title} has been added`));
      }
    });
    // Save for testing
    // res.send(`${newBook.title} has been added`);
  });
};