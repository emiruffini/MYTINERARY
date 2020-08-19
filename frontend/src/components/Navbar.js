import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  NavbarText
} from 'reactstrap';

const Navegacion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        
        <NavbarBrand href="/home"><img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}/></NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="link1" to="/Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link1" to="/Cities">All Cities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link1" to="/components/">To confirm</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
          
          <div className="user1">
          <NavbarBrand className="mr-1 login" ><img className="user" src={process.env.PUBLIC_URL + '/user.png'}/></NavbarBrand>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Log In
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </div>
          
        
        
      </Navbar>
    </div>
  );
}

export default Navegacion;

//ffa300