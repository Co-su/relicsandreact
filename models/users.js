var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var usersSchema = new Schema({
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
var User = mongoose.model("User", usersSchema);

// Exports model
module.exports = User;
