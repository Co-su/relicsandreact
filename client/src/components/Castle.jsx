import React, { Component } from 'react';

export class Castle extends Component {

	banishFromCastle = (e) => {
		alert("You are not high-enough leveled to enter this realm. Begone!");
	}
	render() {
		return (
			<div className="castle" onClick={this.banishFromCastle}>
			</div>
		);
	}
}
export default Castle;