import React, {useState} from "react";
import {Button, Carousel} from "react-bootstrap";
import image1 from "../../img/image1.webp"
import image2 from "../../img/image2.webp"
import image3 from "../../img/image3.webp"
import {useMediaPredicate} from "react-media-hook";

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
        {console.log(screenSM)}
        <Carousel.Item style={imgContainerStyle}>
            <img
                style={imgStyle}
                className="d-block w-100"
                src={image1}
                alt="First slide"
            />
            <Carousel.Caption style={captionStyle}>
                <h1>Historic and Classic Airplanes</h1>
                <h3>Each plane has its own history.</h3>
                <p>And it is for sale!</p>
            </Carousel.Caption>
            <Button href="#inventory"
                    style={linkStyle}
                    onMouseEnter={() => {
                        setOpacity('90%')
                    }}
                    onMouseLeave={() => {
                        setOpacity('70%')
                    }}>
                VIEW ALL PLANES
            </Button>
        </Carousel.Item>
        <Carousel.Item style={imgContainerStyle}>
            <img
                style={imgStyle}
                className="d-block w-100"
                src={image2}
                alt="Second slide"
            />
            <Carousel.Caption style={captionStyle}>
                <h1>Adventure flights</h1>
                <h3>Get your historical experience in air!</h3>
            </Carousel.Caption>
            <Button href="#adventureFlights"
                    style={linkStyle}
                    onMouseEnter={() => {
                        setOpacity('90%')
                    }}
                    onMouseLeave={() => {
                        setOpacity('70%')
                    }}>
                REGISTER FOR FLIGHT
            </Button>
        </Carousel.Item>
        <Carousel.Item style={imgContainerStyle}>
            <img
                style={imgStyle}
                className="d-block w-100"
                src={image3}
                alt="Third slide"
            />
            <Carousel.Caption style={captionStyle}>
                <h1>Services</h1>
                <h3>Need agent service, equipment or plane data?</h3>
            </Carousel.Caption>
            <Button href="#contacts"
                    style={linkStyle}
                    onMouseEnter={() => {
                        setOpacity('90%')
                    }}
                    onMouseLeave={() => {
                        setOpacity('70%')
                    }}>
                CONTACT US
            </Button>
        </Carousel.Item>
    </Carousel>
};

export default MainCarousel;