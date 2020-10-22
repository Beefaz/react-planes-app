import React from 'react';
import {Jumbotron} from "react-bootstrap";

const Section = (props) => {

    return <Jumbotron id={props.id}>
        <h3>{props.sectionName}</h3>
        <p>to add..</p>
        <p>to add..</p>
        <p>to add..</p>
        <p>to add..</p>
        <p>to add..</p>
    </Jumbotron>
};

export default Section;
