import React, { Component } from 'react';


export class Loginpage extends Component {

	addNewPlayer(event){
		event.preventDefault();
		console.log(this.refs);
		let playername = this.refs.playername.value;
		let password = this.refs.password.value;

		let player = {
			playername,
			password
		};

		let players = this.state.players;

		players.push(player);

		this.setState({
			players: players
		})
	}


	constructor(){
	super();
	this.addNewPlayer = this.addNewPlayer.bind(this);
	this.state = {
		players: []
	}
}
	render() {
		let players = this.state.players
		return (
			<div className="login">
				<img id="RoRCoCLogo" src="./assets/logo_transparency.png"/>
				<form class="login-form">
					<input type="text" ref="playername" placeholder="Enter your player's name." />
					<input type="password" ref="password" placeholder="Enter your password." />
					<button onClick={this.addNewPlayer}>Submit</button>
				</form>
				<pre>
				{JSON.stringify(players)}
				</pre>
			</div>
		);
	}
}
export default Loginpage;