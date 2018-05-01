const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  name: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  bookOwner: { type: Schema.Types.ObjectId, ref: "User" },
  imageCover: { type: String, required: false }
});

module.exports = mongoose.model("Book", BookSchema);
