const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  id: String,
  name: String,
  nickname: String,
  userPhoto: String
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
