import React from 'react';
import ItemText from "./ItemText";
import {Image, Row, Col, Jumbotron} from "react-bootstrap";


const ItemPage = (props) => {
    const rowStyle = {
        padding: '0.5rem',
        flexWrap: 'wrap',
        margin: '0',
    };
    const imageWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        overflow: 'hidden'
    };

    const imageStyle = {
        flexGrow: '1'
    };

    return <Jumbotron>
        <Image src={props.item.TOPIMAGE}
               alt=""
               fluid/>
        <Jumbotron>
            <ItemText txtLink={props.item.TEXT}/>
            <Row style={rowStyle}>
                {props.item.IMAGES.map((imageLink, index) => (
                    <Col xs={6} sm={4} md={4} lg={4} key={index}>
                        <div style={imageWrapperStyle}>
                            <Image style={imageStyle}
                                   src={imageLink}
                                   alt=""/>
                        </div>
                    </Col>
                ),)}
            </Row>
        </Jumbotron>
    </Jumbotron>
};

export default ItemPage;