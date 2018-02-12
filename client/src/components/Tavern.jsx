import React, { Component } from 'react';
import TavernOwner from "../assets/Tavern_Owner.jpg";
import TavernCust from "../assets/tavern_customer.jpg";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BuyDrink from "../components/BuyDrink";
import Modal from 'react-responsive-modal';


export class Tavern extends Component {

	render() {
		return (
			<div className="tavern">
				<Hero>
					<h1>Welcome to the Tavern!</h1>
					<h2>Grab a drink from the owner or 
						Get a rumor from a fellow patron</h2>
				</Hero>
				<Container>
					<Row>
						<BuyDrink />
					</Row>
				</Container>
			</div>
		);
	}
  
}
export default Tavern;