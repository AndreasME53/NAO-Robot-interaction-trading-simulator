import React from 'react';
import { NavbarWrapper } from './style';
import { Link } from 'react-router-dom';
import { BsGraphUp } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserDetailsHeaderContainer } from 'pages/Dashboard/containers';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

export default function Header() {
  return (
    <div>
      <NavbarWrapper>
        <div className="App-primary-color">
          <Navbar expand="md" light>
            <NavbarBrand className="logo-color  text-color">
              <BsGraphUp />
              <Link to={'/'} className="text-color">
                <span className="font-monospace"> Crypto & Stocks</span>
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={() => {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <Link to="#" className="text-color">
                    Settings
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to={'/account'} className="text-color">
                    Account
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </NavbarWrapper>
      <UserDetailsHeaderContainer />
    </div>
  );
}
