import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {useSelector} from "react-redux";
import {createSelector} from 'reselect';

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
  
} from 'reactstrap';

const Navegacion = (props) => {

  const selectLogUser = createSelector(
    state => state.users,
    logUser => logUser
  )
  const logUser = useSelector(selectLogUser)



  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" color="light" light expand="md">
        
        <NavbarBrand>
          <NavLink to = "/home">
            <img className="logo" src={process.env.PUBLIC_URL + '/logo.png' }/>
          </NavLink>
        </NavbarBrand>
        
        
          
          <NavbarToggler  onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {logUser.token === ""
              ?
              (
                <>
                <NavItem>
                  <NavLink className="link1" to="/Home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="link1" to="/Cities">All Cities</NavLink>
                </NavItem>
                </>
              )
              :
              (
                <>
                  <NavItem>
                   <NavLink className="link1" to="/Home">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="link1" to="/Cities">All Cities</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="link1" to="/components/">My account</NavLink>
                  </NavItem>
                </> 
              )
              }
              
            </Nav>
            </Collapse>

            <div className="user1">
            <UncontrolledDropdown className="mr-5 pt-0 pb-0" nav inNavbar>
              <DropdownToggle nav caret>
                <NavbarBrand className="mr-1 login" >
                  <img className="user" 
                  src={logUser.token === "" ?process.env.PUBLIC_URL + '/user.png': logUser.photo}/>
                </NavbarBrand>
              </DropdownToggle>
              <DropdownMenu right>
                {logUser.token ==="" 
                ?
                (<>
                  <NavLink to ="/log-in">
                    <DropdownItem>
                      Log In
                    </DropdownItem>
                  </NavLink>
                  <NavLink to ="/create-account">
                    <DropdownItem>
                      Create account
                    </DropdownItem>
                  </NavLink>
                  <DropdownItem divider />
                  <DropdownItem>
                    Welcome Stranger
                  </DropdownItem>
                </>) 
                :
                (<>
                  <NavLink to ="/log-out">
                    <DropdownItem>
                      Log Out
                    </DropdownItem>
                  </NavLink>
                  
                  
                </>)
                }
                  
              </DropdownMenu>
                </UncontrolledDropdown>
          </div>
          
          
          
          
        
        
      </Navbar>
    </div>
  );
}

export default Navegacion;

//ffa300