import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Notifications, {notify} from 'react-notify-toast';
import Modal from 'react-responsive-modal';
import TavernPatron from "../../assets/tavern_customer.jpg";
import TavernPatronVoice from "../../assets/Tavern Patron 2.mp3";
import RumorOne from "../../assets/Rumor 1 2.mp3";
import RumorTwo from "../../assets/Rumor 2 2.mp3";
import RumorThree from "../../assets/Rumor 3 2.mp3";
var Sound = require('react-sound').default;

 
class HearRumor extends Component {
  state = {
    open: false,
    yourGP: 100,
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
	// var yourGP = this.state.yourGP;
	// let value = document.getElementById("drinkBtn").value;
	// if(value === "beer"){
	// 	notify.show("that will be ten gold!", 3000);
  //   yourGP = yourGP - 10;
  //   inebriationLevel = inebriationLevel + 1;
  //   this.setState({ yourGP });
  //   this.setState({ inebriationLevel });
	// 	notify.show("You have " + yourGP + " gold left!", 3000);
	// }else if(value === "wine"){
	// 	alert("that'll be 15 gold!");
  //   yourGP = yourGP - 15;
  //   inebriationLevel = inebriationLevel + 1.5;
  //   this.setState({ yourGP });
  //   this.setState({ inebriationLevel });
	// 	alert("You have " + yourGP + " gold left!");
	// }else if(value === "moonshine"){
	// 	alert("that'll be 20 gold!");
  //   yourGP = yourGP - 20;
  //   inebriationLevel = inebriationLevel + 2;
  //   this.setState({ yourGP });
  //   this.setState({ inebriationLevel });
	// 	alert("You have " + yourGP + " gold left!")
	// }else{
	// 	alert("get outta here!");
  //   }
  // }

  hearRumor = () =>{
      this.setState ({open: false})
      let myColor = { background: "#2CB61B", text: "#FFFFFF" };
      let rumor = ["I hear that C'ode is taking over the realm again. He has been asleep for thousands of years...", "I hear that the king's daughter, C'omma, is missing - that means that this game's code could crash!", "I hear that the magic mushrooms in the forest will grant you magical powers...I wonder if they have any use for defeating C'ode?"];
      let pickRumor = Math.floor(Math.random()*rumor.length);
	    if(pickRumor === 0){
	    }else if(pickRumor === 1){
		alert("It's just a rumor, but... " + rumor[1]);
	    }else if(pickRumor === 2){
		alert("It's just a rumor, but... " + rumor[2]);
	    }
      }

//   haveWine = () =>{
//     this.setState ({open: false})
//     let myColor = { background: "#2CB61B", text: "#FFFFFF" };
//     let yourGP = this.state.yourGP;
//     let inebriationLevel = this.state.inebriationLevel;
//     notify.show("That will cost 15 gold peices!","success", 3000, "myColor")
//     yourGP = yourGP-15;
//     inebriationLevel = inebriationLevel + 1.5;
//     this.setState({yourGP});
//     this.setState({inebriationLevel});
//     notify.show("You have" + yourGP + "gold peices left!","custom", 6000, "myColor")
//   }

//   haveMoonshine = () => {
//     this.setState ({open: false})
//     let myColor = { background: "#2CB61B", text: "#FFFFFF" };
//     let yourGP = this.state.yourGP;
//     let inebriationLevel = this.state.inebriationLevel;
//     let yourDEX = this.state.yourDEX;
//     let yourSTR = this.state.yourSTR;
//     notify.show("That will cost 20 gold peices!","success", 3000, "myColor")
//     yourGP = yourGP-20;
//     inebriationLevel = inebriationLevel + 2;
//     this.setState({yourGP});
//     this.setState({inebriationLevel});
//     notify.show("You have" + yourGP + "gold peices left!","custom", 6000, "myColor")
//     if (inebriationLevel >= 3){
//       yourSTR = yourSTR + 20;
//       this.setState({yourSTR});
//       yourDEX = yourDEX - 20;
//       this.setState({yourDEX});
//     }
//   }
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}><img src = {TavernPatron}/></button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>It's just a rumor, but...do you really wanna know?</h2>
            <button onClick={this.hearRumor}>Hear Rumor</button>
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