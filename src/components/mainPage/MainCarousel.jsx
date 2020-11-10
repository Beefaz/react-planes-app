import React from "react";
import {Button, Carousel} from "react-bootstrap";
import {CAROUSEL_ITEMS} from '../../constants/MainCarouselItems';

const MainCarousel = (props) => {
    const carouselParams = {
        interval:3000,
        fade: true,
        id:props.id,
        style: {
            paddingTop: '56px',
        },
    };
    const shadeLayerStyle = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    };
    const imgContainerStyle = {
        height: '70vh',
        overflow: 'hidden',
    };
    const imgStyle = {
        height: '100%',
        objectFit: 'cover',
        overflow: 'hidden'
    };
    const captionStyle = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
    };
    const captionHeaderStyle = {
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textShadow: '0 0 10px #000',
    };

    const linkStyle = {
        borderStyle:'none',
        marginBottom: '15px',
        maxWidth: '200px',
        fontWeight: '900',
        padding: '15px',
    };
    return <Carousel {...carouselParams}>
        {CAROUSEL_ITEMS.map((item, index) => (
            <Carousel.Item style={imgContainerStyle} key={'carouselItem'.concat(index.toString())}>
                <div style={shadeLayerStyle}/>
                <img
                    style={imgStyle}
                    className="d-block w-100"
                    src={item.image}
                    alt="First slide"/>
                <Carousel.Caption style={captionStyle}>
                    <div style={captionHeaderStyle}>
                        <h1>{item.h1}</h1>
                        <h2>{item.h3}</h2>
                        <h3>{item.p}</h3>
                    </div>
                    <Button className='text-light bg-dark'
                            href={item.href}
                            style={linkStyle}>
                        {item.btnText}
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        ),)}
    </Carousel>
};

export default MainCarousel;