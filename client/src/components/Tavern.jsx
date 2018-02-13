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
var Sound = require('react-sound').default;

const buyDrink = () => {
	
const { open } = this.state;
<Modal open={open} onClose={this.onCloseModal} little>
	 <div>
		<button onClick="/tavern">Nevermind, im not thirsty</button>
		<button onClick={this.onOpenModal}>Buy a Drink</button>
		<h2>What would you like?</h2>
		<button class = "drinkBtn" onClick={this.haveBeer} value = "beer">Have a beer</button>
		<button class = "drinkBtn" onClick={this.haveWine} value = "wine">Have wine</button>
		<button class = "drinkBtn" onClick={this.haveMoonshine} value = "wine">Have wine</button>
	 </div>
</Modal>
return(buyDrink);		
}


export class Tavern extends Component {

	state = {
		yourGP: 100,
		yourHealingItems: 5,
		yourCON: 100,
		enemyCON: 100,
		yourSTR: 10,
		yourWIS: 20,
		specialAttackCounter: 2,
		enemySTR: 10,
		yourTurn: true,
		hasMushroom: false,
		yourDEX: 10,
		yourCHAR: 10,
		inebriationLevel: 0
  };
 

hearRumor = (e) => {
	var rumor = ["I hear that C'ode is taking over the realm again. He has been asleep for thousands of years...", "I hear that the king's daughter, C'omma, is missing - that means that this game's code could crash!", "I hear that the magic mushrooms in the forest will grant you magical powers...I wonder if they have any use for defeating C'ode?"];
	var pickRumor = Math.floor(Math.random()*rumor.length);
	if(pickRumor === 0){
		alert("It's just a rumor, but... " + rumor[0]);
	}else if(pickRumor === 1){
		alert("It's just a rumor, but... " + rumor[1]);
	}else if(pickRumor === 2){
		alert("It's just a rumor, but... " + rumor[2]);
	}
	console.log(pickRumor);
}

ifDrunk = () => {
    let inebriationLevel = this.state.inebriationLevel;
    let yourDEX = this.state.yourDEX;
    let yourSTR = this.state.yourSTR;
    if (inebriationLevel >= 3){
      const renderDrunk = () => {
        return (
			<div className="tavern">
				<div className="tavern-owner" onClick={this.buyDrink}>
				<img src={TavernIcon}/>
				</div>
				<div className="tavern-patron" onClick={this.hearRumor}></div>
				<Hero>
					<h1>Welcome to the Tavern!</h1>
					<h2>Grab a drink from the owner or 
						Get a rumor from a fellow patron</h2>
				</Hero>
				<Container>
					<Row>
						<BuyDrink />
						<HearRumor />
					</Row>
				</Container>
			</div>
		)}
      
    
  }
}
renderDrunk(){

};

// offerADrink = (e) => {
// 	var yourGP = this.state.yourGP;
// 	var inebriationLevel = this.state.inebriationLevel;
// 	var yourHealingItems = this.state.yourHealingItems;
// 	var	yourCON = this.state.yourCON;
// 	var	enemyCON = this.state.enemyCON;
// 	var	yourSTR = this.state.yourSTR;
// 	var	yourWIS = this.state.yourWIS;
// 	var	specialAttackCounter = this.state.yourSpecialAttackCounter;
// 	var	enemySTR = this.state.enemySTR;
// 	var	yourTurn = this.state.yourTurn;
// 	var	hasMushroom = this.state.hasMushroom;
// 	var	yourDEX = this.state.yourDEX;
// 	var	yourCHAR = this.state.yourCHAR;
// 	var drinkies = prompt("Would you like a flagon of ale? What's your poison, beer, wine, or moonshine?");
// 	if(drinkies === "beer"){
// 		alert("that will be ten gold!");
// 		yourGP = yourGP- 10;
// 		inebriationLevel = inebriationLevel + 1;
// 		this.setState({ yourGP });
// 		this.setState({ inebriationLevel });
// 		alert("You have " + yourGP + " gold left!");
// 	}else if(drinkies === "wine"){
// 		alert("that'll be 15 gold!");
// 		yourGP = yourGP - 15;
// 		inebriationLevel = inebriationLevel + 1.5;
// 		this.setState({ yourGP });
// 		this.setState({ inebriationLevel });
// 		alert("You have " + yourGP + " gold left!");
// 	}else if(drinkies === "moonshine"){
// 		alert("that'll be 30 gold!");
// 		yourGP = yourGP - 20;
// 		inebriationLevel = inebriationLevel + 2;
// 		this.setState({ yourGP });
// 		this.setState({inebriationLevel});
// 		alert("You have + " + yourGP + " gold left!")
// 		yourGP = yourGP - 15;
// 		this.setState({ yourGP });
// 		alert("You have " + yourGP + " gold left!");
// 	}else if(drinkies === "moonshine"){
// 		alert("that'll be 20 gold!");
// 		yourGP = yourGP - 20;
// 		this.setState({ yourGP });
// 		alert("You have " + yourGP + " gold left!")
// 	}else{
// 		alert("get outta here!");
// 	}if (inebriationLevel >=3){
// 		yourSTR = yourSTR + 20;
// 		yourDEX = yourDEX - 20;
// 	}
	
// }


	render() {
		return (
			<div className="tavern">
				<div className="tavern-owner" onClick={this.buyDrink}>
				<img src={TavernIcon}/>
				</div>
				<div className="tavern-patron" onClick={this.hearRumor}></div>
				<Hero>
					<h1>Welcome to the Tavern!</h1>
					<h2>Grab a drink from the owner or 
						Get a rumor from a fellow patron</h2>
				</Hero>
				<Container>
					<Row>
						<BuyDrink />
						<HearRumor />
					</Row>
				</Container>
			</div>
		);
	}
  
}

export default Tavern;