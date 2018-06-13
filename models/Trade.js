const mongoose = require("mongoose");
const { Schema } = mongoose;

const tradeSchema = new Schema({
  bookOwner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  requestedBook: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  requestingUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tradeCompleted: { type: Boolean, required: true, default: false }
});

/* 
    * tradeCompleted === false => 'Trade Pending/ Waiting Approval'
    * tradeCompleted === true => 'Trade completed/ Archive Trade model'
 */
