import React from 'react';
import {Jumbotron} from "react-bootstrap";

const Section = (props) => {

    return <Jumbotron id={props.id}>
        <h3>{props.sectionName}</h3>
        {props.sectionContent}
    </Jumbotron>
};

export default Section;
