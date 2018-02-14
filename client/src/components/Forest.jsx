import React, { Component } from 'react';
import Hubworld from "../components/Hubworld.jsx";
import Row from "../components/Row";
import Container from "../components/Container";
import Col from "../components/Col";
import Goblin from "../assets/Troop_Goblin.png";
import ForestFight from "../components/ForestFight";
import Modal from 'react-responsive-modal';
import ForestIcon from "../components/forestIcon.png";
// var db = require("./models");
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const fightEnemy = () => {

	
// const { open } = this.state;
// <Modal open={open} onClose={this.onCloseModal} little>
// 	 <div>
// 		<button onClick="/forest">Fight</button>
// 		<button onClick={this.onOpenModal}>Heal</button>
// 		<button onClick={this.onOpenModal}>Flee</button>
// 		<h2>You have been challenged to battle! What will you do?</h2>
// 		<button id = "fightBtn" onClick={this.fight} value = "fight">Fight</button>
// 	 </div>
// </Modal>
// return(fightEnemy);		
// }


export class Forest extends Component {

// 	state = {
// 		gold: 100,
// 		yourHealingItems: 5,
// 		yourCON: 100,
// 		enemyCON: 100,
// 		yourSTR: 10,
// 		yourWIS: 20,
// 		specialAttackCounter: 2,
// 		enemySTR: 10,
// 		yourTurn: true,
// 		hasMushroom: false,
// 		yourDEX: 10,
// 		yourCHAR: 10
// 	}


// 	startFight = (e) => {
// 	var yourHealingItems = this.state.yourHealingItems;
// 	var yourCON = this.state.yourCON;
// 	var currentHP;
// 	var enemyCON = this.state.enemyCON;
// 	var yourSTR = 10;
// 	var yourWIS = 15;
// 	var specialAttackCounter = this.state.specialAttackCounter;
// 	var enemySTR = 10;
// 	var yourTurn = this.state.yourTurn;
// 	var gold = this.state.GP;
// 	var hasMushroom = this.state.hasMushroom;
// 	var yourDEX = this.state.yourDEX;
// 	var fight = prompt("You have been challenged by a foe! Type fight to enter battle, heal to restore your HP, or flee to chicken out!");
// 	if (fight === "fight" && yourTurn === true){
// 		var pickAttack = prompt("type attack or special attack");
// 		if (pickAttack === "special attack" && specialAttackCounter > 0){
// 			enemyCON = enemyCON - yourWIS;
// 			this.setState({ enemyCON });
// 			specialAttackCounter = specialAttackCounter - 1;
// 			this.setState({specialAttackCounter});
// 			alert("Enemy hp is now " + enemyCON + "!");
// 			alert("You have " + specialAttackCounter + " special attacks left!");
// 			if (specialAttackCounter === 0){
// 				alert("You have no special attacks left!");
// 			if (enemyCON === 0){
// 				alert("Enemy defeated! Mushroom acquired!");
// 				hasMushroom = true;
// 				yourCON = yourCON + 5;
// 				yourSTR = yourSTR + 5;
// 				yourDEX = yourDEX + 5;
// 				yourWIS = yourWIS + 5;
				
// 				this.setState({hasMushroom});
// 			}
// 			}yourTurn = false;
// 			this.setState({yourTurn});
// 		}else if (pickAttack === "attack" && yourTurn === true){
// 			enemyCON = enemyCON - yourSTR;
// 			this.setState({ enemyCON });
// 			alert("Enemy hp is now " + enemyCON + "!");
// 			yourTurn = false;
// 			this.setState({yourTurn});
// 			if (enemyCON === 0){
// 				alert("Enemy defeated! Mushroom acquired!");
// 				hasMushroom = true;
// 				this.setState({hasMushroom});
// 			}
// 		}else if (specialAttackCounter === 0){
// 		alert("You have no special attacks left!");
// 	}
// 	}else if (fight === "heal"){
// 		alert("You recovered 10 HP! Your current health level is " + yourCON + "." + "You now have " + yourHealingItems + " left.");
// 		yourCON = yourCON + 10;
// 		yourHealingItems = yourHealingItems - 1;
// 		this.setState({yourCON});
// 		this.setState({yourHealingItems});
// 		if (yourHealingItems === 0){
// 			alert:("Out of healing items!");
// 		}
// 	}else if (fight === "flee"){
// 		alert("You fled in fear! While escaping, you dropped 20 gold! Now you have " + gold + "left!");
// 		gold = gold - 20;
// 		this.setState({gold});
// 		if(gold === 0){
// 			alert("You have no more money! You shouldn't be in the forest! Go back to town to get supplies!");
// 			// <Route exact path="/hubworld" component = {Hubworld}/>

// 		}
// 	}else if (yourTurn === false){
// 		alert("enemy attacked you for " + enemySTR + " damage!");
// 		yourCON = yourCON - enemySTR;
// 		this.setState({yourCON});
// 		yourTurn = true
// 		this.setState({yourTurn});	
// 	}
// }

// 	render() {
// 		return (
// 			<div className="forest">
// 			<img src={Goblin} onClick={this.fightEnemy}/>	
// 			<ForestFight/>
// 			</div>
// 		);
// 	}
// }

render() {
		return (
			<div className="forest">
				<div align="center">
					<img src={ForestIcon}/>
					<h1>Fight the Goblin to earn a Mushroom!</h1>
				</div>
					<div align="center"  style={{margin: 50}}>
						<Container>
						<ForestFight/>
						</Container>
					</div>

			</div>
		);
	}
}
  
export default Forest;