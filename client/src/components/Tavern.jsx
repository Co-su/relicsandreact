import React, { Component } from 'react';
import TavernIcon from "../components/tavernIcon.png";
import TavernOwner from "../assets/Tavern_Owner.jpg";
import TavernCust from "../assets/tavern_customer.jpg";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BuyDrink from "../components/BuyDrink";
import HearRumor from "../components/HearRumor";
import TavernBackground from "../assets/blurry_tavern.jpg";
import Modal from 'react-responsive-modal';
import Sound from "react-sound";


export class Tavern extends Component {



	render() {
		return (
		<div className="tavern">
			
				<div align="center">
					<img src = {TavernIcon} alt = "tavern_logo"/>
				</div>
				
			
				<Container>
				<Row>
						<BuyDrink/>
						<HearRumor />
				</Row>
				</Container>
		</div>
		);
	}
  
}

export default Tavern;