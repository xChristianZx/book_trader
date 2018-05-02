const mongoose = require("mongoose");
const Book = require("./models/Book");

const books = [
  {
    title: "Catch-22",
    author: "Joseph Heller",
    bookOwner: null,
    coverImageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Catch22.jpg/220px-Catch22.jpg"
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    bookOwner: null,
    coverImageURL:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/JohnSteinbeck_TheGrapesOfWrath.jpg/200px-JohnSteinbeck_TheGrapesOfWrath.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    bookOwner: null,
    coverImageURL:
      "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    bookOwner: null,
    coverImageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/TheGreatGatsby_1925jacket.jpeg/220px-TheGreatGatsby_1925jacket.jpeg"
  },
  {
    title: "1984",
    author: "George Orwell",
    bookOwner: null,
    coverImageURL: "https://images-na.ssl-images-amazon.com/images/I/514CVwOrybL.jpg"
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
