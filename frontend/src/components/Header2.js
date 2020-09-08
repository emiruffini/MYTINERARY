import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';


const Header2 = (props) => {
    return (
      <div>
        <Navbar className="navbar" color="light" light expand="md">
          <NavbarBrand><NavLink to = "/home"><img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}/></NavLink></NavbarBrand>
        </Navbar>
      </div>
    );
  }
export default Header2