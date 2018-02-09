import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import LogoImage from "../assets/logoTransparencyOffwhite.png";

export class Hubworld extends Component {
	render() {
		return (
	<div className = "hubworld">
		<Link to = "/">
    	<Hero backgroundImage = {LogoImage}>

    	</Hero>
		</Link>
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
	}
}
export default Hubworld;