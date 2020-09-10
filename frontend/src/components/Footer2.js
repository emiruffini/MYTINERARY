import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {NavLink} from 'react-router-dom'

const FooterPage2 = () => {
  

  return (
    <MDBFooter className="footer" color="danger" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <div className="contenedorLogo">
            <img className="logoFooter" src={process.env.PUBLIC_URL + '/logo0.png'}></img>  
            <h5 className="title tituloLogo">MYTINERARY</h5>
            
            </div>
            
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul className="listFooter">
             
                  <li className="list-unstyled">
                    <NavLink className="link" to="/log-in"> Logn in </NavLink>
                  </li>
                  <li className="list-unstyled">
                    <NavLink className="link" to="/create-account" > Create an account </NavLink>
                  </li>
            
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a>Emiliano Ruffini</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage2;