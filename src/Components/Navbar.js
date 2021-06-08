import React, { Component } from 'react';
import { Navbar, Nav, Jumbotron } from 'react-bootstrap';


class NavbarComponent extends Component {
    render(){
        return(
            <div >
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home"><h1>Dentist Shop</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link  href="/"><p className="linkText">Home</p></Nav.Link>
                        <Nav.Link href="/services"><p className="linkText">Our Services</p></Nav.Link>
                        <Nav.Link href="/doctors"><p className="linkText">Our Doctors</p></Nav.Link>
                        <Nav.Link href="/portfolio"><p className="linkText">Portfolio</p></Nav.Link>
                        <Nav.Link href="/contact"><p className="linkText">Contact us</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron className="jumbotron-nav">
                <h1>WORLD DENTIST SHOP</h1>
                <h4><em>Your tooth's home</em></h4>
            </Jumbotron>
            </div>
        )
    }
}

export default NavbarComponent;