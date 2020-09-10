import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavItem
} from 'reactstrap';


const Header2 = (props) => {
    return (
      <div>
        <Navbar className="navbar" color="light" light expand="md">
          <NavbarBrand><NavLink to = "/home"><img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}/></NavLink></NavbarBrand>
              <NavItem>
                  <NavLink className="link1" to="/log-in">Sign In</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="link1" to="/create-account">Not registered yet?</NavLink>
              </NavItem>
              
        </Navbar>
        
      </div>
    );
  }
export default Header2