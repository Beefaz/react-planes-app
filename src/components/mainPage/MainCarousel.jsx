import React from "react";
import {Button, Nav, Carousel} from "react-bootstrap";
import image from "../../planes/image.webp"

const MainCarousel = () => {
    return <Carousel interval={4000} fade={true}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Historic and Classic Airplanes</h1>
                    <h3>Each plane has its own history.</h3>
                    <p>And it is for sale!</p>
                    <Nav.Link href="#inventory"><Button>VIEW ALL PLANES</Button></Nav.Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>Adventure flights</h1>
                    <h3>Get your historical experience in air!</h3>
                    <Nav.Link href="#adventureFlights"><Button>REGISTER FOR FLIGHT</Button></Nav.Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Services</h1>
                    <h3>Need agent service, equipment or plane data?</h3>
                    <Nav.Link href="#contacts"><Button>CONTACT US</Button></Nav.Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
};

export default MainCarousel;