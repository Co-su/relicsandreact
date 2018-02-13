//Dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models/users")
const mongoUrl = "mongodb://localhost/relicsandreact";
mongoose.Promise = Promise;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect(mongoUrl, err => {
  console.log(err ||  `MongoDB connected at ${mongoUrl}`);
})

app.post('/api/game', (req,res) => {

  console.log(req.body)
 console.log('i work')
    db.user.create({
        userName:req.body.userName,
        password:req.body.password,
        quest:req.body.quest
      })
      .then(res => {
        console.log(res)
      })
      .catch(err=>{
        console.error(err)
      })
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
