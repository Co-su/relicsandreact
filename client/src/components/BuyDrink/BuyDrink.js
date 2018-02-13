import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Notifications, {notify} from 'react-notify-toast';
import Modal from 'react-responsive-modal';
import TavernOwner from "../../assets/Tavern_Owner.jpg";
import TavernOwnerVoice from "../../assets/Tavern Owner 2.mp3";
var Sound = require('react-sound').default;



 
class BuyDrink extends Component {
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

  haveBeer = () =>{
      this.setState ({open: false})
      let myColor = { background: "#2CB61B", text: "#FFFFFF" };
      let yourGP = this.state.yourGP;
      let inebriationLevel = this.state.inebriationLevel;
      notify.show("That will cost 10 gold peices!","success", 3000, "myColor")
      yourGP = yourGP-10;
      inebriationLevel = inebriationLevel + 1;
      this.setState({yourGP});
      this.setState({inebriationLevel});
      notify.show("You have" + yourGP + "gold peices left!","custom", 6000, "myColor")
      }

  haveWine = () =>{
    this.setState ({open: false})
    let myColor = { background: "#2CB61B", text: "#FFFFFF" };
    let yourGP = this.state.yourGP;
    let inebriationLevel = this.state.inebriationLevel;
    notify.show("That will cost 15 gold peices!","success", 3000, "myColor")
    yourGP = yourGP-15;
    inebriationLevel = inebriationLevel + 1.5;
    this.setState({yourGP});
    this.setState({inebriationLevel});
    notify.show("You have" + yourGP + "gold peices left!","custom", 6000, "myColor")
  }

  haveMoonshine = () => {
    this.setState ({open: false})
    let myColor = { background: "#2CB61B", text: "#FFFFFF" };
    let yourGP = this.state.yourGP;
    let inebriationLevel = this.state.inebriationLevel;
    let yourDEX = this.state.yourDEX;
    let yourSTR = this.state.yourSTR;
    notify.show("That will cost 20 gold peices!","success", 3000, "myColor")
    yourGP = yourGP-20;
    inebriationLevel = inebriationLevel + 2;
    this.setState({yourGP});
    this.setState({inebriationLevel});
    notify.show("You have" + yourGP + "gold peices left!","custom", 6000, "myColor")
  }
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}><img src = {TavernOwner}/></button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>What would you like?</h2>
          <Sound
      url={TavernOwnerVoice}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
            <button onClick={this.haveBeer}>Have beer</button>
            <button onClick={this.haveWine}>Have wine</button>
            <button onClick={this.haveMoonshine}>Have moonshine</button>
            <button onClick={this.onCloseModal}>I dont want a drink</button>
        </Modal>
      </div>
    );
  };
};
 
export default BuyDrink;