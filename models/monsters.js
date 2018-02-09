var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var monstersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  strength: {
    type: Number,
    required: true
  },
  dexterity: {
    type: Number,
    required: true
  },
  constitution: {
    type: Number,
    required: true
  },
  charisma: {
    type: Number,
    required: true
  },
  wisdom: {
    type: Number,
    required: true
  },
  gold: {
    type: Number,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Monster = mongoose.model("Monster", monstersSchema);

// Exports model
module.exports = Monster;
