import React from "react";
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

const NavLink = (props) => {
    return <Nav.Link
        as={Link}
        to={'/'}
        href={props.item.href}
        onClick={()=>props.setScrollTarget(props.item.href)}>{props.item.name}</Nav.Link>
};
export default NavLink;