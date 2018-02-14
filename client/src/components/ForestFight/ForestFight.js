import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Notifications, {notify} from 'react-notify-toast';
import Modal from 'react-responsive-modal';
import Goblin from "../../assets/Troop_Goblin.png";
import fight from "../../assets/fight.png";
import run from "../../assets/run.png";


class ForestFight extends Component {
  state = {
    open: false,
    gold: 100,
    inebriationLevel: 0,
    yourHealingItems: 5,
		yourCON: 100,
		enemyCON: 100,
		yourSTR: 100,
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
          notify.show("Enemy hp is now " + enemyCON + "! You have acquired a Mushroom!","success",4000,myColor);
          if (enemyCON === 0){
            hasMushroom = true;
            yourCON = yourCON + 5;
            yourSTR = yourSTR + 5;
            yourDEX = yourDEX + 5;
            yourWIS = yourWIS + 5;
            this.setState({hasMushroom});
            if (yourTurn ===  false){
              yourCON = yourCON - enemySTR;
              notify.show("Your hp is now " + yourCON + "!", "danger",4000,myColor);
              this.setState({yourCON});
            }
          }
        }
      }

 
render() {
  const { open } = this.state;
  return (
    <div>
      <img src={Goblin} onClick={this.onOpenModal} style = {{height:300, width:300}}/>
      <Modal open={open} onClose={this.onCloseModal} little>
          <img src={fight} onClick={this.fightAttack}/>
          <Link to="/hubworld">
          <img src={run} onClick={this.onCloseModal}/>
          </Link>
      </Modal>
    </div>
  );
};
};

export default ForestFight;