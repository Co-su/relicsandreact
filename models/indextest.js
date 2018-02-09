const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const characterSchema = new Schema({
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


const monstersSchema = new Schema({
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

const npcsSchema = new Schema({
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
const User = mongoose.model("User", usersSchema);
const Character = mongoose.model("Character", characterSchema);
const Monster = mongoose.model("Monster", monstersSchema);
const Npc = mongoose.model("Npc", npcsSchema);

// Exports model
module.exports = {User};
module.exports = Character;
module.exports = Monster;
module.exports = Npc;
  