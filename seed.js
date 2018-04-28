const mongoose = require("mongoose");
const Book = require("./models/Book");

const books = [
  {
    name: "Catch-22",
    author: "Joseph Heller",
    bookOwner: null
  },
  {
    name: "The Grapes of Wrath",
    author: "John Steinbeck",
    bookOwner: null
  },
  {
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    bookOwner: null
  },
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    bookOwner: null
  },
  {
    name: "1984",
    author: "George Orwell",
    bookOwner: null
  }
];

const seedDB = () => {
  // Clear mLab DB first
  // Then seed the DB with books
  Book.remove({}, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("removed books");
      books.forEach(seed => {
        Book.create(seed, (err, book) => {
          if (err) {
            console.log(err);
          } else {
            console.log("added book");
          }
        });
      });
    }
  });
};

module.exports = seedDB;
