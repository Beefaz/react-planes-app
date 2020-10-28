import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import {scrollToTop} from "../../constants/Constants";


const NavBar = (props) => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand as={Link}
                      to={'/'}
                      onClick={scrollToTop}>Historic and Classic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link}
                          to={'/'}
                          onClick={scrollToTop}>Home</Nav.Link>
                <Nav.Link as={Link}
                          to={'/'}
                          onClick={() => {props.setScrollTarget('aboutUs')}}>About us</Nav.Link>
                <Nav.Link as={Link}
                          to={'/'}
                          onClick={() => {props.setScrollTarget('inventory')}}>Inventory</Nav.Link>
                <Nav.Link as={Link}
                          to={'/'}
                          onClick={() => {props.setScrollTarget('adventureFlights')}}>Adventure flights</Nav.Link>
                <Nav.Link as={Link}
                          to={'/'}
                          onClick={() => {props.setScrollTarget('services')}}>Services</Nav.Link>
                <Nav.Link as={Link}
                          to={'/'}
                          onClick={() => {props.setScrollTarget('contacts')}}>Contacts</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};
export default NavBar;