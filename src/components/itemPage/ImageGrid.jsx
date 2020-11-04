import React from 'react';
import {Row, Image} from "react-bootstrap";


const ImageGrid = (props) => {
    const rowStyle = {
        margin: '0',
        justifyContent: 'flex-start',
    };
    const imageContainerStyle = {
        display: 'flex',
        flexGrow: '1',
        padding: '5px',
        height: '100px',
        width: '100px',
        cursor: 'pointer',
    };
    const imageStyle = {
        minHeight: '100%',
        minWidth: '100%',
        objectFit: 'cover',
        overflow: 'hidden',
    };
    return <section id={props.id}>
        <h4>{props.id}</h4>
        <Row style={rowStyle}>
            {props.item.IMAGES.map((image, index) => (
                <div key={'topImage'.concat(index.toString())} style={imageContainerStyle}>
                    <Image style={imageStyle}
                           src={image.default}
                           alt=""/>
                </div>
            ),)}
        </Row>
    </section>
};

export default ImageGrid;