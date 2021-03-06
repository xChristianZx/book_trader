const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  id: String,
  name: String,
  nickname: String,
  userPhoto: String,
  email: String,
  city: String,
  state: String,
  booksOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  /* Temp model for trades - Contains bookOwner and title */
  requestedTrades: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }]
});

module.exports = mongoose.model("User", UserSchema);
//  === Note === //
/*  
  'id' refers to auth0's 'sub' property - use this to see if user already exists
  'nickname' is username for google and github

  id: sub,
  name: name,
  nickname: nickname,
  userPhoto: picture
*/
