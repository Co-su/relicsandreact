import React, { Component } from 'react';

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
	var fight = prompt("You have been challenged by a foe! Type fight to enter battle, or flee to chicken out!");
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
			}yourTurn = false;
			this.setState({yourTurn});

			
			// var yourTurn = false;
			// if (yourTurn = false){
			// 	yourHP = yourHP - enemyAttack;
			// 	alert("your hp is now " + yourHP)
			// 	yourTurn = true;
			// }
		}else if (pickAttack === "attack" && yourTurn === true){
			enemyHP = enemyHP - yourAttack;
			this.setState({ enemyHP });
			alert("Enemy hp is now " + enemyHP + "!");
			// var yourTurn = false;
			// if (yourTurn = false){
			// 	yourHP = yourHP - enemyAttack;
			// 	yourTurn = true;
			// }
		}else if (specialAttackCounter === 0){
		alert("You have no special attacks left!");
	}
	}else if (fight === "heal"){
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