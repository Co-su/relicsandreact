import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

export class Hubworld extends Component {
	render() {
		return (

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
<<<<<<< HEAD
>>>>>>> b3ed631b9b9a49d95c6241e4eff2e4a24359e097
=======
>>>>>>> 17eac086538fef9a97681b6eb6bcf423b9a497f6
	}
}
export default Hubworld;