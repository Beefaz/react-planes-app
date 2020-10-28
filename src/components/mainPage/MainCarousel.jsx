import React, {useState} from "react";
import {Button, Carousel} from "react-bootstrap";
import {useMediaPredicate} from "react-media-hook";
import {CAROUSEL_ITEMS} from '../../constants/MainCarouselItems';

const MainCarousel = (props) => {
    const btnOnHover = {
        opacity: '100%',
        borderColor: '#000'
    };
    const btnOnHoverOut = {
        opacity: '90%',
        borderColor: '#f8f9fa'
    };

    const screenSM = useMediaPredicate("(min-width: 300px)");
    const screenMD = useMediaPredicate("(min-width: 454px)");
    const [btnStyle, setBtnStyle] = useState(btnOnHoverOut);

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
        position: 'absolute',
        top: screenMD ? '50%' : (screenSM ? '37%' : '25%'),
        transform: screenMD ? 'translate(0,-50%)' : (screenSM ? 'translate(0,-37%)' : 'translate(0,-25%)'),
    };
    const linkStyle = {
        borderWidth: 'medium',
        color: '#000',
        backgroundColor: '#000',
        fontWeight: '900',
        borderColor: 'gray',
        padding: '15px',
        position: 'absolute',
        bottom: '5%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        ...btnStyle,
    };
    return <Carousel interval={4000} id={props.id} style={{paddingTop: '56px'}}>
        {CAROUSEL_ITEMS.map((item, index) => (
            <Carousel.Item style={imgContainerStyle} key={'carouselItem'.concat(index.toString())}>
                <div style={shadeLayerStyle}/>
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
                <Button className='bg bg-light'
                        href={item.href}
                        style={linkStyle}
                        onMouseEnter={() => {
                            setBtnStyle(btnOnHover)
                        }}
                        onMouseLeave={() => {
                            setBtnStyle(btnOnHoverOut)
                        }}>
                    {item.btnText}
                </Button>
            </Carousel.Item>
        ),)}
    </Carousel>
};

export default MainCarousel;