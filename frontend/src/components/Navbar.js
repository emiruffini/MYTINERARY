import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
        
        <NavbarBrand href="/"><img className="logo" src={process.env.PUBLIC_URL + '/logo.png'}/></NavbarBrand>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">To confirm</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">To confirm</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">To confirm</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
          <NavbarBrand className="mr-1 login" href="/"><img className="user" src={process.env.PUBLIC_URL + '/user.png'}/></NavbarBrand>
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
          
        
        
      </Navbar>
    </div>
  );
}

export default Navegacion;

//ffa300