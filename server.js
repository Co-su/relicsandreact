//Dependencies
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./models/");
const jwt = require("jsonwebtoken");
const mongoUrl = "mongodb://localhost/relicsandreact";

// Only load .env file if not in production
if ( process.env.NODE_ENV != "production" ) {
  require("dotenv").config();
}

mongoose.Promise = Promise;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

mongoose.connect(mongoUrl, err => {
  console.log(err || `MongoDB connected at ${mongoUrl}`);
});

// Set up middleware to authenticate user on request to /api routes.
app.use( "/api", ( req, res, next ) => {
  const token = req.headers.authorization;
  const authenticated = jwt.verify( token, process.env.SECRET, ( err, decoded ) => {
    if ( err ) return res.status(403).json(err);
    next();
  });
});

app.post("/auth",(req, res)=> {
  db.User.findOne({ username: req.body.username })
    .then(user => {
      // TODO: improve error message
      if ( !user ) return res.status(404).send( "User not found." );

      return  user.comparePassword( req.body.password, ( passErr, isMatch ) => {

        // TODO: send proper Express error with appropriate status code
        if ( !isMatch ) return res.status(403).send( "Incorrect email or password." );

        // Sign JWT
        const payload = {
          sub: user._id
        };
  
        // create a token string
        const token = jwt.sign(payload, ENV.jwtSecret);
  
        return res.json( { access_token: token });

      });
    })
    .catch(err => {
      res.json(err);
    });
})

app.post("/user", (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    charname: req.body.charname,
    charclass: req.body.charclass,
    strength: req.body.strength,
    dexterity: req.body.dexterity,
    constitution: req.body.constitution,
    wisdom: req.body.wisdom,
    charisma: req.body.charisma,
    gp: req.body.gp
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      res.json( err );
    });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//NEXT STEPS
//Verify JWT Token
//