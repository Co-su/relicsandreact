const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/relicsandreact",
  );

  const monsterSeed = [
    {
        name: "Rat",
        class: "Monster",
        strength: "1",
        dexterity: "1",
        constitution: "15",
        charisma: "1",
        wisdom: "1",
        gold: "14"
    },
    {
        name: "Goblin",
        class: "Monster",
        strength: "10",
        dexterity: "10",
        constitution: "35",
        charisma: "2",
        wisdom: "1",
        gold: "48"
    },
    {
        name: "Dragon",
        class: "Monster",
        strength: "30",
        dexterity: "60",
        constitution: "500",
        charisma: "20",
        wisdom: "90",
        gold: "2000"
    },
    {
        name: "C'ode",
        class: "Monster",
        strength: "9999999",
        dexterity: "9999999",
        constitution: "9999999",
        charisma: "9999999",
        wisdom: "9999999",
        gold: "3"
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
