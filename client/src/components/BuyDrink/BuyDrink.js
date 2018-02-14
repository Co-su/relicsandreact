import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Notifications, {notify} from 'react-notify-toast';
import Modal from 'react-responsive-modal';
import TavernOwner from "../../assets/Tavern_Owner.jpg";
import TavernOwnerVoice from "../../assets/Tavern Owner 2.mp3";
import Sound from "react-sound";
import Col from "../Col";
import Container from "../Container";
import moonshine from "../../assets/moonshine.jpg";
import beer from "../../assets/beer.jpg";
import wine from "../../assets/wine.jpg";

 
class BuyDrink extends Component {
  state = {
    open: false,
    gold: 100,
    inebriationLevel: 0
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


  haveBeer = () =>{
      this.setState ({open: false})
      let myColor = { background: "#2CB61B", text: "#FFFFFF" };
      let gold = this.state.gold;
      let inebriationLevel = this.state.inebriationLevel;
      notify.show("That will cost 10 gold peices!","success", 3000, "myColor")
      gold = gold-10;
      inebriationLevel = inebriationLevel + 1;
      this.setState({gold});
      this.setState({inebriationLevel});
      notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
      }

  haveWine = () =>{
    this.setState ({open: false})
    let myColor = { background: "#2CB61B", text: "#FFFFFF" };
    let gold = this.state.gold;
    let inebriationLevel = this.state.inebriationLevel;
    notify.show("That will cost 15 gold peices!","success", 3000, "myColor")
    gold = gold-15;
    inebriationLevel = inebriationLevel + 1.5;
    this.setState({gold});
    this.setState({inebriationLevel});
    notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
  }

  haveMoonshine = () => {
    this.setState ({open: false})
    let myColor = { background: "#2CB61B", text: "#FFFFFF" };
    let gold = this.state.gold;
    let inebriationLevel = this.state.inebriationLevel;
    let yourDEX = this.state.yourDEX;
    let yourSTR = this.state.yourSTR;
    notify.show("That will cost 20 gold peices!","success", 3000, "myColor")
    gold = gold-20;
    inebriationLevel = inebriationLevel + 2;
    this.setState({gold});
    this.setState({inebriationLevel});
    notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
  }
 
  render() {
    const { open } = this.state;
    return (
      <div align= "center">
       <img src = {TavernOwner} onClick={this.onOpenModal}/>
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
            <button onClick={this.haveBeer}><img src = {beer}/></button>
            <button onClick={this.haveWine}><img src = {wine}/></button>
            <button onClick={this.haveMoonshine}><img src = {moonshine}/></button>
            </Modal>
            
      </div>
    );
  };
};
 
export default BuyDrink;