import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import NewCharBtn from "../../components/newCharButton/newCharButton.js";


export class Landing extends Component {

  render() {
    return (
      <div className = "hubworld">
    	  <Hero>
      	  	<h1> Relics and React </h1>
			      <h2> Call of C'Ode</h2>
    	  </Hero>
    	  <Container>
      		  <Row>
        		  <Col size="md-12" align = "center">
          		  	<h1 style = {{fontSize: 60}}>Welcome Relics and React</h1>
                  <h1 style = {{fontsize: 60}}> Call of C'Ode</h1>
        		  </Col>
      		  </Row>
      		<Row>
        		<Col size="md-6">
              <NewCharBtn />
            </Col>
      		</Row>
    	  </Container>
  	  </div>

    )
  }
}

export default Landing;