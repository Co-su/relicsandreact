//Dependencies
var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 3001;
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var db = require("./models")
var mongoUrl = "mongodb://localhost/relicsandreact";


mongoose.Promise = Promise;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Mongoose connection to DB
mongoose.connect(mongoUrl, err => {
  console.log(err ||  `MongoDB connected at ${mongoUrl}`);
});



//test to post to the DB
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
