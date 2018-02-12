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
		<Hero backgroundImage = {LogoImage}>

    	</Hero>
    	<Container>
      		<Row>
        		<Col size="md-12" align = "center">
          			<h1 style = {{fontSize: 60}}>Welcome To HubLanta!</h1>
        		</Col>
      		</Row>
      		<Row>
        		<Col size="md-12">
				<a class="waves-effect waves-light btn-large">
					<Link to = "/forest"> Go To The Forest!</Link>
				</a>
				<a class="waves-effect waves-light btn-large">
					<Link to = "/castle"> Go To The Castle!</Link>
				</a>
				<a class="waves-effect waves-light btn-large">
					<Link to = "/tavern"> Go To The Tavern!</Link>
				</a>
				<a class="waves-effect waves-light btn-large">
					<Link to = "/codesrealm">Go To the Codes Realm!!</Link>
				</a>
          
        		</Col>
      		</Row>
    	</Container>
  	</div>
	)
	}
}
export default Hubworld;