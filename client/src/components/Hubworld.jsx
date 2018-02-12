import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import LogoImage from "../assets/logoTransparencyOffwhite.png";
import ThemeSong from "../assets/RaRCoCmpt.mp3";
import TavernIcon from "../components/tavernIcon.png";
import CastleIcon from "../components/castleIcon .png";
import ForestIcon from "../components/forestIcon.png";
import CodesrealmIcon from "../assets/codesRealmIcon.png";
var Sound = require('react-sound').default;

// playThemeSong = () =>{

// }

export class Hubworld extends Component {
	render() {
		return (


	<div className = "hubworld">

<Sound
      url={ThemeSong}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />

		<Link to = "/">
    	<Hero backgroundImage = {LogoImage}>

    	</Hero>
		</Link>
    	<Container>
      		<Row>
        		<Col size="md-12" align = "center">
          			<h1 style = {{fontSize: 60}}>Welcome To HubLanta!</h1>
        		</Col>
      		</Row>
      		<Row>
        		<Col size="md-12">
				<span>
				<button id = "forestBtn" style = {{margin: 60, marginLeft: 100}}>
					<Link to = "/forest"><img id="forestLogo" src={ForestIcon}/></Link>
				</button>
				<button id = "castleBtn" style = {{margin: 60}}>
					<Link to = "/castle"><img id="castleLogo" src={CastleIcon}/></Link>
				</button>
				<button id = "tavernBtn" style = {{margin: 60}}>
					<Link to = "/tavern"><img id="tavernLogo" src={TavernIcon}/></Link>
				</button>
				<button id = "realmBtn" style = {{margin: 60}}>
					<Link to = "/codesrealm"><img id="codesRealmLogo" src={CodesrealmIcon}/></Link>
				</button>
				</span>
          
        		</Col>
      		</Row>
    	</Container>
  	</div>
	)
	}
}
export default Hubworld;