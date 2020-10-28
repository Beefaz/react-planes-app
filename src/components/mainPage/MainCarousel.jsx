import React, {useState} from "react";
import {Button, Carousel} from "react-bootstrap";
import {useMediaPredicate} from "react-media-hook";
import {CAROUSEL_ITEMS} from './MainCarouselItems';

const MainCarousel = (props) => {
    const screenSM = useMediaPredicate("(min-width: 300px)");
    const screenMD = useMediaPredicate("(min-width: 454px)");
    const [opacity, setOpacity] = useState('70%');

    const imgContainerStyle = {
        height: '70vh',
        overflow: 'hidden',
        backgroundColor: 'black',
    };
    const imgStyle = {
        opacity: '40%',
        height: '100%',
        objectFit: 'cover',
        overflow: 'hidden'
    };
    const captionStyle = {
        position: 'absolute',
        top: screenMD ? '50%' : (screenSM ? '37%' : '25%'),
        transform: screenMD ? 'translate(0,-50%)' : (screenSM ? 'translate(0,-37%)' : 'translate(0,-25%)'),
    };
    const linkStyle = {
        color: '#FFF',
        backgroundColor: '#000',
        opacity: opacity,
        fontWeight: '600',
        borderColor: 'gray',
        padding: '15px',
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    };
    return <Carousel interval={4000} id={props.id} style={{paddingTop: '56px'}}>
        {CAROUSEL_ITEMS.map((item, index) => (
                <Carousel.Item style={imgContainerStyle} key={'carouselItem'.concat(index.toString())}>>
                    <img
                        style={imgStyle}
                        className="d-block w-100"
                        src={item.image}
                        alt="First slide"
                    />
                    <Carousel.Caption style={captionStyle}>
                        <h1>{item.h1}</h1>
                        <h3>{item.h3}</h3>
                        <p>{item.p}</p>
                    </Carousel.Caption>
                    <Button href={item.href}
                            style={linkStyle}
                            onMouseEnter={() => {
                                setOpacity('90%')
                            }}
                            onMouseLeave={() => {
                                setOpacity('70%')
                            }}>
                        {item.btnText}
                    </Button>
                </Carousel.Item>
        ),)}
    </Carousel>
};

export default MainCarousel;