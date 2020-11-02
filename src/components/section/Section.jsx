import React from 'react';
import {Jumbotron} from "react-bootstrap";
import ContactForm from "../contactForm/ContactForm"

const Section = (props) => {

    return <Jumbotron id={props.id}>
        <h3>{props.sectionName}</h3>
        {props.form&&<ContactForm/>}
    </Jumbotron>
};

export default Section;
