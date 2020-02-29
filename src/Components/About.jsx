
import React, { Component } from 'react';
import {Image,Col}from 'react-bootstrap';
import { grid } from 'react-bootstrap';
import './About.css';

export class About extends Component{

render()
{

return(
    <div>
     <Image src="./Assets/test1.jpg" className="header-image" />
<grid>
<Col xs={12} sm={4} smoffset={4} >
          <Image src="./Assets/test2.jpg" className="profile-pic" />
          <h3>Grank</h3>
         <p>This the application to testbootstrap in react application</p>
      </Col>
</grid>
</div>
     
);
}
}
export default About
