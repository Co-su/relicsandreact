var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  quest: {
    type: Number,
    required: true
  },
  charname: {
    type: String,
    required: true
  },
  charclass: {
    type: String,
    required: true
  },
  strength: {
    type: String,
    required: true
  },
  dexterity: {
    type: String,
    required: true
  },
  constitution: {
    type: String,
    required: true
  },
  wisdom: {
    type: String,
    required: true
  },
  charisma: {
    type: String,
    required: true
  },
  gp: {
    type: String,
    required: true
  },
});

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Exports model
module.exports = User;
