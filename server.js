const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3301,

  // Your username
  user: "root",

  // Your password
  password: "lol123",
  database: "heroes_monsters_db"
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
