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
        <h2>{props.id}</h2>
        <Row style={rowStyle}>
            {props.item.IMAGES.map((topimage, index) => (
                <div key={'topImage'.concat(index.toString())} style={imageContainerStyle}>
                    <Image style={imageStyle}
                           src={topimage}
                           alt=""/>
                </div>
            ),)}
        </Row>
    </section>
};

export default ImageGrid;