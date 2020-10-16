import React from "react";
import {Navbar, Nav} from "react-bootstrap";


const NavBar = (props) => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id ={props.id}>
        <Navbar.Brand href="#home">Historic and Classic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#aboutUs">About us</Nav.Link>
                <Nav.Link href="#inventory">Inventory</Nav.Link>
                <Nav.Link href="#adventureFlights">Adventure flights</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};
export default NavBar;