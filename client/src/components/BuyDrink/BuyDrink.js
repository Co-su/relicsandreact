import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Notifications, {notify} from 'react-notify-toast';
import Modal from 'react-responsive-modal';
import TavernOwner from "../../assets/Tavern_Owner.jpg";

 
class BuyDrink extends Component {
  state = {
    open: false,
    gold: 100
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  offerADrink = (e) => {
	var gold = this.state.gold;
	let value = document.getElementById("drinkBtn").value;
	if(value === "beer"){
		notify.show("that will be ten gold!", 3000);
		gold = gold - 10;
		this.setState({ gold });
		notify.show("You have " + gold + " gold left!", 3000);
	}else if(value === "wine"){
		alert("that'll be 15 gold!");
		gold = gold - 15;
		this.setState({ gold });
		alert("You have " + gold + " gold left!");
	}else if(value === "moonshine"){
		alert("that'll be 20 gold!");
		gold = gold - 20;
		this.setState({ gold });
		alert("You have " + gold + " gold left!")
	}else{
		alert("get outta here!");
    }
  }

  haveBeer = () =>{
      this.setState ({open: false})
      let myColor = { background: "#2CB61B", text: "#FFFFFF" };
      let gold = this.state.gold;
      notify.show("That will cost 10 gold peices!","success", 3000, "myColor")
      gold = gold-10;
      this.setState({gold});
      notify.show("You have" + gold + "gold peices left!","custom", 6000, "myColor")
      }
 
  render() {
    const { open } = this.state;
    return (
      <div>
        
        <button onClick={this.onOpenModal}><img src = {TavernOwner}/></button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>What would you like?</h2>
            <button onClick={this.haveBeer}>Have a beer</button>
            <button onClick={this.onCloseModal}>I dont want a drink</button>
        </Modal>
      </div>
    );
  };
};
 
export default BuyDrink;