const mongoose = require("mongoose");

//Mongoose Scheme reference
const Schema = mongoose.Schema;


const monsterSchema = new Schema({
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
const Monster = mongoose.model("Monster", monsterSchema);

// Exports model
module.exports = Monster;
