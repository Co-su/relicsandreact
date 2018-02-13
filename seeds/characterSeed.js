const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/relicsandreact",
  );

  const characterSeed = [
    {
        name: "Mitch",
        class: "Warlock",
        strength: "99",
        dexterity: "99",
        constitution: "99",
        charisma: "99",
        wisdom: "99",
        gold: "99999999"
    },
    {
        name: "Corey",
        class: "Mage",
        strength: "99",
        dexterity: "99",
        constitution: "99",
        charisma: "99",
        wisdom: "99",
        gold: "99999999"
    },
    {
        name: "Bean",
        class: "Warrior",
        strength: "99",
        dexterity: "99",
        constitution: "99",
        charisma: "99",
        wisdom: "99",
        gold: "99999999"
    },
    {
        name: "Mara",
        class: "Rogue",
        strength: "99",
        dexterity: "99",
        constitution: "99",
        charisma: "99",
        wisdom: "99",
        gold: "99999999"
    }
];

db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
