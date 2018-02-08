var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var UsersSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Character = mongoose.model("Character", CharacterSchema);

// Export the Article model
module.exports = Character;
