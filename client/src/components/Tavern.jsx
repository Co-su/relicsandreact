import React, { Component } from 'react';
import TavernOwner from "../assets/Tavern_Owner.jpg";
import TavernCust from "../assets/tavern_customer.jpg";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BuyDrink from "../components/BuyDrink";
import Modal from 'react-responsive-modal';

const buyDrink = () => {

	
	const { open } = this.state;
	<Modal open={open} onClose={this.onCloseModal} little>
		 <div>
			<button onClick="/tavern">Nevermind, im not thirsty</button>
			<button onClick={this.onOpenModal}>Buy a Drink</button>
			<h2>What would you like?</h2>
			<button id = "drinkBtn" onClick={this.OfferDrink} value = "beer">Have a beer</button>
		 </div>
	</Modal>
	return(buyDrink);		
}

export class Tavern extends Component {

	state = {
    gold: 100
  };


hearRumor = (e) => {
	const rumor = ["I hear that C'ode is taking over the realm again. He has been asleep for thousands of years...", "I hear that the king's daughter, C'omma, is missing - that means that this game's code could crash!", "I hear that the magic mushrooms in the forest will grant you magical powers...I wonder if they have any use for defeating C'ode?"];
	const pickRumor = Math.floor(Math.random()*rumor.length);
	if(pickRumor === 0){
		alert("It's just a rumor, but... " + rumor[0]);
	}else if(pickRumor === 1){
		alert("It's just a rumor, but... " + rumor[1]);
	}else if(pickRumor === 2){
		alert("It's just a rumor, but... " + rumor[2]);
	}
	console.log(pickRumor);
}

offerADrink = (e) => {
	const gold = this.state.gold;
	const drinkies = prompt("Would you like a flagon of ale? What's your poison?");
	if(drinkies === "beer"){
		alert("that will be ten gold!");
		gold = gold - 10;
		this.setState({ gold });
		alert("You have " + gold + " gold left!");
	}else if(drinkies === "wine"){
		alert("that'll be 15 gold!");
		gold = gold - 15;
		this.setState({ gold });
		alert("You have " + gold + " gold left!");
	}else if(drinkies === "moonshine"){
		alert("that'll be 20 gold!");
		gold = gold - 20;
		this.setState({ gold });
		alert("You have " + gold + " gold left!")
	}else{
		alert("get outta here!");
	}
}


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