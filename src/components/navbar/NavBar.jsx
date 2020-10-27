import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import {scrollToTop} from "../../constants/Constants";


const NavBar = () => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/#home">Historic and Classic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link}
                          to={'/'}
                          onClick={scrollToTop}>
                    Home
                </Nav.Link>
                <Nav.Link href="/#aboutUs">About us</Nav.Link>
                <Nav.Link href="/#inventory">Inventory</Nav.Link>
                <Nav.Link href="/#adventureFlights">Adventure flights</Nav.Link>
                <Nav.Link href="/#services">Services</Nav.Link>
                <Nav.Link href="/#contacts">Contacts</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};
export default NavBar;