import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import {scrollToTop} from "../../constants/Constants";
import {LINKS} from "../../constants/Links";


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
                    <Nav.Link as={Link}
                              to={'/'}
                              href={item.href}
                              key={'link'.concat(index.toString())}
                              onClick={() => {
                                  props.setScrollTarget(item.href)
                              }}>{item.name}</Nav.Link>
                ),)}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
};
export default NavBar;