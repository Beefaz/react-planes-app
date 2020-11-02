import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import {scrollToTop} from "../../constants/Constants";
import {LINKS} from "../../constants/Links";
import NavLink from "./NavLink";


const NavBar = (props) => {

    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand as={Link}
                      to={'/'}
                      href={'home'}
                      onClick={scrollToTop}>Historic and Classic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                {LINKS.map((item, index) => (
                    <NavLink {...props}
                             item={item}
                             index={index}
                             key={'link'.concat(index.toString())}/>
                ),)}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};
export default NavBar;