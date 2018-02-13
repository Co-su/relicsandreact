import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Notifications, {notify} from 'react-notify-toast';
import Modal from 'react-responsive-modal';
import Goblin from "../../assets/Troop_Goblin.png";


class ForestFight extends Component {
  state = {
    open: false,
    gold: 100,
    inebriationLevel: 0,
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
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  // offerADrink = (e) => {
	// var gold = this.state.gold;
	// let value = document.getElementById("drinkBtn").value;
	// if(value === "beer"){
	// 	notify.show("that will be ten gold!", 3000);
  //   gold = gold - 10;
  //   inebriationLevel = inebriationLevel + 1;
  //   this.setState({ gold });
  //   this.setState({ inebriationLevel });
	// 	notify.show("You have " + gold + " gold left!", 3000);
	// }else if(value === "wine"){
	// 	alert("that'll be 15 gold!");
  //   gold = gold - 15;
  //   inebriationLevel = inebriationLevel + 1.5;
  //   this.setState({ gold });
  //   this.setState({ inebriationLevel });
	// 	alert("You have " + gold + " gold left!");
	// }else if(value === "moonshine"){
	// 	alert("that'll be 20 gold!");
  //   gold = gold - 20;
  //   inebriationLevel = inebriationLevel + 2;
  //   this.setState({ gold });
  //   this.setState({ inebriationLevel });
	// 	alert("You have " + gold + " gold left!")
	// }else{
	// 	alert("get outta here!");
  //   }
  // }

      fightAttack = () =>{
        this.setState ({open: false})
        let myColor = { background: "#2CB61B", text: "#FFFFFF" };
      let gold = this.state.gold;
      let yourHealingItems = this.state.yourHealingItems;
      let yourCON = this.state.yourCON;
      let enemyCON = this.state.enemyCON;
      let yourSTR = this.state.yourSTR;
      let yourWIS = this.state.yourWIS;
      let specialAttackCounter = this.state.specialAttackCounter;
      let enemySTR = this.state.enemySTR;
      let yourTurn = this.state.yourTurn;
      let hasMushroom = this.state.hasMushroom;
      let yourDEX = this.state.yourDEX;
      let yourCHAR = this.state.yourCHAR;
      if (yourTurn === true && yourCON > 0){
          enemyCON = enemyCON - yourSTR;
          yourTurn = false;
          this.setState({ enemyCON });
          this.setState({yourTurn});
          notify.show("Enemy hp is now " + enemyCON + "!");
          if (enemyCON === 0){
            notify.show("Enemy defeated! Mushroom acquired!");
            hasMushroom = true;
            yourCON = yourCON + 5;
            yourSTR = yourSTR + 5;
            yourDEX = yourDEX + 5;
            yourWIS = yourWIS + 5;
            this.setState({hasMushroom});
            if (yourTurn ===  false){
              yourCON = yourCON - enemySTR;
              notify.show("Your hp is now " + yourCON + "!");
              this.setState({yourCON});
            }
          }
        }
      }
    //     else if (yourTurn === false){
    //         yourCON = yourCON - enemySTR;
    //         this.setState({yourCON});
    //         yourTurn = true;
    //         this.setState({yourTurn});
    //       }
         
    //     }else if (pickAttack === "attack" && yourTurn === true){
    //       enemyCON = enemyCON - yourSTR;
    //       this.setState({ enemyCON });
    //       alert("Enemy hp is now " + enemyCON + "!");
    //       yourTurn = false;
    //       this.setState({yourTurn});
    //       if (enemyCON === 0){
    //         alert("Enemy defeated! Mushroom acquired!");
    //         hasMushroom = true;
    //         this.setState({hasMushroom});
    //       }
    //     }else if (specialAttackCounter === 0){
    //     alert("You have no special attacks left!");
    //   }
    //   }else if (fight === "heal"){
    //     alert("You recovered 10 HP! Your current health level is " + yourCON + "." + "You now have " + yourHealingItems + " left.");
    //     yourCON = yourCON + 10;
    //     yourHealingItems = yourHealingItems - 1;
    //     this.setState({yourCON});
    //     this.setState({yourHealingItems});
    //     if (yourHealingItems === 0){
    //       alert:("Out of healing items!");
    //     }
  
    // haveWine = () =>{
    //   this.setState ({open: false})
    //   let myColor = { background: "#2CB61B", text: "#FFFFFF" };
    //   let gold = this.state.gold;
    //   let inebriationLevel = this.state.inebriationLevel;
    //   notify.show("That will cost 15 gold peices!","success", 3000, "myColor")
    //   gold = gold-15;
    //   inebriationLevel = inebriationLevel + 1.5;
    //   this.setState({gold});
    //   this.setState({inebriationLevel});
    //   notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
    // }
  
    // fight = () => {
    //   this.setState ({open: false})
    //   let myColor = { background: "#2CB61B", text: "#FFFFFF" };
    //   let gold = this.state.gold;
    //   let inebriationLevel = this.state.inebriationLevel;
    //   let yourDEX = this.state.yourDEX;
    //   let yourSTR = this.state.yourSTR;
    //   notify.show("That will cost 20 gold peices!","success", 3000, "myColor")
    //   gold = gold-20;
    //   inebriationLevel = inebriationLevel + 2;
    //   this.setState({gold});
    //   this.setState({inebriationLevel});
    //   notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
    // }
      
    //   }else if (fight === "flee"){
    //     alert("You fled in fear! While escaping, you dropped 20 gold! Now you have " + gold + "left!");
    //     gold = gold - 20;
    //     this.setState({gold});
    //     if(gold === 0){
    //       alert("You have no more money! You shouldn't be in the forest! Go back to town to get supplies!");
    //       // <Route exact path="/hubworld" component = {Hubworld}/>
    
    //     }
    //   }else if (yourTurn === false){
    //     alert("enemy attacked you for " + enemySTR + " damage!");
    //     yourCON = yourCON - enemySTR;
    //     this.setState({yourCON});
    //     yourTurn = true
    //     this.setState({yourTurn});	
    //   }
    // }
      
  //     notify.show("That will cost 10 gold peices!","success", 3000, "myColor")
  //     gold = gold-10;
  //     inebriationLevel = inebriationLevel + 1;
  //     this.setState({gold});
  //     this.setState({inebriationLevel});
  //     notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
  //     }

  // haveWine = () =>{
  //   this.setState ({open: false})
  //   let myColor = { background: "#2CB61B", text: "#FFFFFF" };
  //   let gold = this.state.gold;
  //   let inebriationLevel = this.state.inebriationLevel;
  //   notify.show("That will cost 15 gold peices!","success", 3000, "myColor")
  //   gold = gold-15;
  //   inebriationLevel = inebriationLevel + 1.5;
  //   this.setState({gold});
  //   this.setState({inebriationLevel});
  //   notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
  // }

  // haveMoonshine = () => {
  //   this.setState ({open: false})
  //   let myColor = { background: "#2CB61B", text: "#FFFFFF" };
  //   let gold = this.state.gold;
  //   let inebriationLevel = this.state.inebriationLevel;
  //   let yourDEX = this.state.yourDEX;
  //   let yourSTR = this.state.yourSTR;
  //   notify.show("That will cost 20 gold peices!","success", 3000, "myColor")
  //   gold = gold-20;
  //   inebriationLevel = inebriationLevel + 2;
  //   this.setState({gold});
  //   this.setState({inebriationLevel});
  //   notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
  // }
 
render() {
  const { open } = this.state;
  return (
    <div>
      <button onClick={this.onOpenModal}><img src={Goblin}/></button>
      <Modal open={open} onClose={this.onCloseModal} little>
        <h2>Fight Me!</h2>
          <button onClick={this.fightAttack}>Fight!</button>
          <button onClick={this.onCloseModal}>Forget it!</button>
      </Modal>
    </div>
  );
};
};

export default ForestFight;