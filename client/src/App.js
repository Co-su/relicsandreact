import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from "./components/pages/landingPage.js";
import Loginpage from "./components/Loginpage.jsx";
import Hubworld from "./components/Hubworld.jsx";
import Startquest from "./components/Startquest.jsx";
import Tavern from "./components/Tavern.jsx";
import Forest from "./components/Forest.jsx";
import Castle from "./components/Castle.jsx";
import Codesrealm from "./components/Codesrealm.jsx";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
           <Route exact path="/" component = {Landing}/>
           <Route exact path="/hubworld" component = {Hubworld}/>
           <Route exact path="/startquest" component={Startquest}/>
           <Route exact path="/castle" component={Castle}/>
           <Route exact path="/forest" component={Forest}/>
           <Route exact path="/codesrealm" component={Codesrealm}/>
           <Route exact path="/tavern" component={Tavern}/>
        </div>
      </Router>

    );
  }
}

export default App;
