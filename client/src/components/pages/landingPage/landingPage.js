import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../assets/logoTransparencyOffwhite.png";
import Hero from "../../../components/Hero";
import Container from "../../../components/Container";
import Row from "../../../components/Row";
import Col from "../../../components/Col";
import NewCharBtn from "../../../components/newCharBtn";
import ConQuestBtn from "../../../components/conQuestBtn";
import "./landingPage.css";


export class Landing extends Component {

  render() {
    return (
      <div className = "hubworld">
			  <Hero backgroundImage = {LogoImage}>
      	  	
    	  </Hero>
    	  <Container>
      		  <Row>
        		  <Col size="md-12" align = "center">
          		  	<h1 style = {{fontSize: 60}}>Welcome To Relics and React</h1>
                  <h1 style = {{fontsize: 60}}> Call of C'Ode</h1>
        		  </Col>
      		  </Row>
      		<Row>
        		<Col size="md-12" align="center">
              <NewCharBtn /><ConQuestBtn />
            </Col>
      		</Row>
    	  </Container>
  	  </div>

    )
  }
}

export default Landing;

