import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

export class Hubworld extends Component {
	render() {
		return (
<<<<<<< HEAD
			<div className="hubworld">
			<h1 id="go-forest">Go to the forest</h1>
			<h1 id="go-to-codesrealm">Go to C'ode's Realm</h1>
			<h1 id="go-to-tavern">Go to the Tavern</h1>
			<h1 id="go-to-the-castle">Go to the castle</h1>
			</div>
		);
=======
	<div className = "hubworld">
    	<Hero>
      		<h1> Relics and React </h1>
			<h2> Call of C'Ode</h2>
    	</Hero>
    	<Container>
      		<Row>
        		<Col size="md-12" align = "center">
          			<h1 style = {{fontSize: 60}}>Welcome To HubLanta!</h1>
        		</Col>
      		</Row>
      		<Row>
        		<Col size="md-12">
				<button id = "forestBtn" style = {{margin: 60, marginLeft: 100}}>
					<Link to = "/forest"> Go To The Forest!</Link>
				</button>
				<button id = "castleBtn" style = {{margin: 60}}>
					<Link to = "/castle"> Go To The Castle!</Link>
				</button>
				<button id = "tavernBtn" style = {{margin: 60}}>
					<Link to = "/tavern"> Go To The Tavern!</Link>
				</button>
				<button id = "realmBtn" style = {{margin: 60}}>
					<Link to = "/codesrealm">Go To the Codes Realm!!</Link>
				</button>
          
        		</Col>
      		</Row>
    	</Container>
  	</div>
	)
>>>>>>> b3ed631b9b9a49d95c6241e4eff2e4a24359e097
	}
}
export default Hubworld;