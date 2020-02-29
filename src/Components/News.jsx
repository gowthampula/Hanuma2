
import React, { Component } from 'react';
import {Row, Col,  Image} from 'react-bootstrap';
import {grid} from 'react-bootstrap';
import './News.css';

export class News extends Component{

render()
{

return(
     <div>
    <Image src="./Assets/test.jpg" className="header-image" />
<grid>
    <h2>Test News</h2>
    <Row>
     <Col xs={12} sm={8}  >
         <Image src="./Assets/test.jpg" />
         <p>This the application to testbootstrap in react application</p>
         <p>This the application to testbootstrap in react application2</p>
         <p>This the application to testbootstrap in react application</p>
         <p>This the application to testbootstrap in react application4</p>
         <p>This the application to testbootstrap in react application5</p>
         <p>This the application to testbootstrap in react application6</p>

     </Col>
     <Col xs={12} sm={4} className="sidebar-section" >
         <Image src="./Assets/test.jpg"  />
         <p>This the application to testbootstrap in react application</p>
     </Col>
     </Row>
</grid>
</div>
);
}
}
export default News
