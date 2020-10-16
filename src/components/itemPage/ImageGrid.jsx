import React from 'react';
import {Row, Col, Image} from "react-bootstrap";


const ImageGrid = (props) => {

    const imageContainerStyle = {
        padding: '5px',
        height: '500px',
        cursor: 'pointer'
    };
    const imageWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    };
    const imageStyle = {
        minHeight: '100%',
        minWidth: '100%',
        objectFit: 'cover',
        overflow: 'hidden'
    };
    return <section id='inventory'>
            <Row>
                {props.item.IMAGES.map((topimage, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index} style={imageContainerStyle}>
                        <div style={imageWrapperStyle}>
                            <Image style={imageStyle}
                                   src={topimage}
                                   alt=""/>
                        </div>
                    </Col>
                ),)}
            </Row>
        </section>
};

export default ImageGrid;