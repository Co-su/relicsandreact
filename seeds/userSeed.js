const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/relicsandreact",
  );

  const monsterSeed = [
    {
        name: "Mitch",
        password: "yeet11230000",
        quest: "9"
    }
];

db.Monster
  .remove({})
  .then(() => db.Monster.collection.insertMany(monsterSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
