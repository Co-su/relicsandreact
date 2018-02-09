import React, { Component } from 'react';
import Hubworld from "../components/Hubworld.jsx";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export class Forest extends Component {

	state = {
		gold: 100,
		yourHealingItems: 5,
		yourHP: 100,
		enemyHP: 100,
		yourAttack: 10,
		yourSpecialAttack: 20,
		specialAttackCounter: 2,
		enemyAttack: 10,
		yourTurn: true,
		hasMushroom: false
	}


	startFight = (e) => {
	var yourHealingItems = this.state.yourHealingItems;
	var yourHP = this.state.yourHP;
	var enemyHP = this.state.enemyHP;
	var yourAttack = 10;
	var yourSpecialAttack = 15;
	var specialAttackCounter = this.state.specialAttackCounter;
	var enemyAttack = 10;
	var yourTurn = this.state.yourTurn;
	var gold = this.state.gold;
	var hasMushroom = this.state.hasMushroom;
	var fight = prompt("You have been challenged by a foe! Type fight to enter battle, heal to restore your HP, or flee to chicken out!");
	if (fight === "fight" && yourTurn === true){
		var pickAttack = prompt("type special attack or physical attack");
		if (pickAttack === "special attack" && specialAttackCounter > 0){
			enemyHP = enemyHP - yourSpecialAttack;
			this.setState({ enemyHP });
			specialAttackCounter = specialAttackCounter - 1;
			this.setState({specialAttackCounter});
			alert("Enemy hp is now " + enemyHP + "!");
			alert("You have " + specialAttackCounter + " special attacks left!");
			if (specialAttackCounter === 0){
				alert("You have no special attacks left!");
			if (enemyHP === 0){
				alert("Enemy defeated! Mushroom acquired!");
				hasMushroom = true;
				this.setState({hasMushroom});
			}
			}yourTurn = false;
			this.setState({yourTurn});
		}else if (pickAttack === "attack" && yourTurn === true){
			enemyHP = enemyHP - yourAttack;
			this.setState({ enemyHP });
			alert("Enemy hp is now " + enemyHP + "!");
			yourTurn = false;
			this.setState({yourTurn});
			if (enemyHP === 0){
				alert("Enemy defeated! Mushroom acquired!");
				hasMushroom = true;
				this.setState({hasMushroom});
			}
		}else if (specialAttackCounter === 0){
		alert("You have no special attacks left!");
	}
	}else if (fight === "heal"){
		alert("You recovered 10 HP! Your current health level is " + yourHP + "." + "You now have " + yourHealingItems + " left.");
		yourHP = yourHP + 10;
		yourHealingItems = yourHealingItems - 1;
		this.setState({yourHP});
		this.setState({yourHealingItems});
		if (yourHealingItems === 0){
			alert:("Out of healing items!");
		}
	}else if (fight === "flee"){
		alert("You fled in fear! While escaping, you dropped 20 gold! Now you have " + gold + "left!");
		gold = gold - 20;
		this.setState({gold});
		if(gold === 0){
			alert("You have no more money! You shouldn't be in the forest! Go back to town to get supplies!");
			<Route exact path="/hubworld" component = {Hubworld}/>

		}
	}else if (yourTurn === false){
		alert("enemy attacked you for " + enemyAttack + " damage!");
		yourHP = yourHP - enemyAttack;
		this.setState({yourHP});
		yourTurn = true
		this.setState({yourTurn});	
	}
}

	render() {
		return (
			<div className="forest" onClick={this.startFight}>	
			</div>
		);
	}
}
export default Forest;