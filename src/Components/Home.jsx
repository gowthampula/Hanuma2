import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import { Link } from 'react-router-dom';
import { Jumbotron, Image,Button, Col, Row} from 'react-bootstrap';
import { row,col} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Home.css';

export class Home extends Component{

render()
{
    return(
 <Container>
   <Jumbotron>
  <h1>Testing Bootstrap</h1>
  <p>
      This the application to testbootstrap in react application
  </p>
  <Link to="/about">
      <button bs-style="primary">About</button>
  </Link>
  </Jumbotron>
  <Row className="show-grid text-center"> 
      <Col xs={12} sm={4} className="person-wrapper">
          <Image src="./Assets/test.jpg" className="profile-pic" roundedCircle="true"/>
          <h3>Grank</h3>
         <p>This the application to testbootstrap in react application</p>
      </Col>
      <Col xs={12} sm={4} className="person-wrapper">
          <Image src="./Assets/test1.jpg" className="profile-pic" roundedCircle="true"/>
          <h3>Grank</h3>
         <p>This the application to testbootstrap in react application</p>
      </Col>
      <Col xs={12} sm={4} className="person-wrapper">
          <Image src="./Assets/test1.jpg" className="profile-pic" roundedCircle="true"/>
          <h3>Grank</h3>
         <p>This the application to testbootstrap in react application</p>
      </Col>
     
  </Row>
  
  </Container>
    );
}

}
export default Home