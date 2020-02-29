import React, { Component } from 'react';
import {Nav,Navbar,NavItem, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export class CustomNavbar extends Component{
render()
{
return(
    <Navbar default collapseOnSelect>
    <Navbar.Text>
    <Navbar.Brand>
           <Link to="/">CodeLife</Link>
         </Navbar.Brand>
    </Navbar.Text>
    <Navbar.Collapse>
        <Navbar.Toggle/>  
       </Navbar.Collapse> 
        <Navbar.Toggle/>  
      <Nav pullRight>
           
           <NavItem>
           <Link to="/"> Home </Link>
           </NavItem>
              <NavItem>
           <Link to="/about"> About </Link>
           </NavItem>
           <NavItem>
           <Link to="/news"> News </Link>
           </NavItem>
           
      </Nav>
    </Navbar>
    );
}
}
export default CustomNavbar
