import React from 'react';
import {GALLERY_IMAGES, CONTENT, TOP_IMAGE} from "../mainObject/Constants"
import ItemText from "./ItemText";
import Image from "react-bootstrap/cjs/Image";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";


const ItemPage = () => {
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

    return (
        <div>
            {TOP_IMAGE.map((imageLink, index) => (
                <Image src={imageLink}
                       key={index}
                       alt=""
                       fluid/>
            ),)}
            {CONTENT.map((txtLink, index) => (
                <ItemText txtLink={txtLink}
                          key={index}/>
            ),)}
            <Row style={rowStyle}>
                {GALLERY_IMAGES.map((imageLink, index) => (
                    <Col xs={6} sm={4} md={4} lg={4} key={index}>
                        <div style={imageWrapperStyle}>
                            <Image style={imageStyle}
                                   src={imageLink}
                                   alt=""/>
                        </div>
                    </Col>
                ),)}
            </Row>
        </div>
    );
};

export default ItemPage;
