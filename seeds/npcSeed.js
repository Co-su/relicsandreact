const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/relicsandreact",
  );

  const npcSeed = [
    {
        name: "Sam",
        class: "Npc",
        strength: "10",
        dexterity: "10",
        constitution: "50",
        charisma: "10",
        wisdom: "1000000",
        gold: "400"
    },
    {
        name: "Bartender",
        class: "Npc",
        strength: "80",
        dexterity: "60",
        constitution: "95",
        charisma: "70",
        wisdom: "20",
        gold: "250000"
    },
    {
        name: "Forest Man",
        class: "Npc",
        strength: "5",
        dexterity: "5",
        constitution: "5",
        charisma: "5",
        wisdom: "5",
        gold: "0"
    }
];

db.Npc
  .remove({})
  .then(() => db.Npc.collection.insertMany(npcSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
