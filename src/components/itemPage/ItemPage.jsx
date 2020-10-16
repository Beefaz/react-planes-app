import React from 'react';
import ItemText from "./ItemText";
import {Image, Row, Col, Jumbotron} from "react-bootstrap";
import {ITEMS} from "../../planes/FolderList";


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

    return <Jumbotron>
        {ITEMS.map(
                    (item, key) => (
                        <Jumbotron key={key}>
                            {item.TOPIMAGE.map((imageLink, index) => (
                                <Image src={imageLink}
                                       key={index}
                                       alt=""
                                       fluid/>
                            ),)}
                            {item.TEXT.map((txtLink, index) => (
                                <ItemText txtLink={txtLink}
                                          key={index}/>
                            ),)}
                            <Row style={rowStyle}>
                                {item.IMAGES.map((imageLink, index) => (
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
                    ),
                )}
    </Jumbotron>
};

export default ItemPage;