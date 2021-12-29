import React from 'react'
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse, NavLink} from 'reactstrap'
import logo from "../assets/logo1.png"

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='mx-1 mx-lg-5 mt-2'>
        <Navbar
         light expand="md"
         >
          <NavbarBrand href="/"><img 
          src ={logo}
          style={{
           height: "50px"
         }}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className='mx-3 mx-md-5' isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto fs-3 " navbar>
              <NavItem>
                <Link style={{color : "#294959"}} to="/Faq">FAQ</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
