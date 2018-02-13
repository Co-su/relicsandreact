const mongoose = require("mongoose");

//Mongoose Scheme reference
const Schema = mongoose.Schema;


const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  quest: {
    type: Number,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", userSchema);

// Exports model
module.exports = User;
