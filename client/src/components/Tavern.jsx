import React, { Component } from 'react';
export class Tavern extends Component {

	state = {
    gold: 100
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

offerADrink = (e) => {
	var gold = this.state.gold;
	var drinkies = prompt("Would you like a flagon of ale? What's your poison?");
	if(drinkies === "beer"){
		alert("that will be ten gold!");
		gold = gold - 10;
		this.setState({ gold });
		alert("You have " + gold + " gold left!");
	}else if(drinkies === "wine"){
		alert("that'll be 20 gold!");
		gold = gold - 15;
		this.setState({ gold });
		alert("You have " + gold + " gold left!");
	}else if(drinkies === "moonshine"){
		alert("that'll be 30 gold!");
		gold = gold - 20;
		this.setState({ gold });
		alert("You have + " + gold + " gold left!")
	}else{
		alert("get outta here!");
	}
}
	render() {
		return (
			<div className="tavern">
				<div className="tavern-owner" onClick={this.offerADrink}>
				<h1>tavern owner yo</h1>
				</div>
				<div className="tavern-patron" onClick={this.hearRumor}></div>
			</div>
		);
	}
}
export default Tavern;