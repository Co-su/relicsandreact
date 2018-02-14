import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Notifications, {notify} from 'react-notify-toast';
import Modal from 'react-responsive-modal';
import TavernPatron from "../../assets/tavern_customer.jpg";
import chat from "../../assets/chat.png";
import TavernPatronVoice from "../../assets/Tavern Patron 2.mp3";
import RumorOne from "../../assets/Rumor 1 2.mp3";
import RumorTwo from "../../assets/Rumor 2 2.mp3";
import RumorThree from "../../assets/Rumor 3 2.mp3";
import Col from "../Col";
import Container from "../Container";
var Sound = require('react-sound').default;


 
class HearRumor extends Component {
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

  hearRumor = () =>{
      this.setState ({open: false})
      let myColor = { background: "#2CB61B", text: "#FFFFFF" };
      let rumor = ["I hear that C'ode is taking over the realm again. He has been asleep for thousands of years...", "I hear that the king's daughter, C'omma, is missing - that means that this game's code could crash!", "I hear that the magic mushrooms in the forest will grant you magical powers...I wonder if they have any use for defeating C'ode?"];
      let pickRumor = Math.floor(Math.random()*rumor.length);
	    if(pickRumor === 0){
        notify.show("It's just a rumor, but..."+rumor[0]+"","success",4000,myColor)
	    }else if(pickRumor === 1){
		notify.show("It's just a rumor, but... " + rumor[1]+"","success",4000,myColor);
	    }else if(pickRumor === 2){
		notify.show("It's just a rumor, but... " + rumor[2]+"","success",4000,myColor);
	    }
      }

  render() {
    const { open } = this.state;
    return (
    <div align="center">
       <img src = {TavernPatron} onClick={this.onOpenModal}/>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>It's just a rumor, but...do you really wanna hear?</h2>
            <img src={chat} onClick={this.hearRumor}/>
            <Sound
      url={TavernPatronVoice}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
        </Modal>
    </div> 
    );
  };
};
 
export default HearRumor;