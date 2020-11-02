import React, {useState} from 'react';
import {Jumbotron, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {scrollToTop} from "../../constants/Constants";

const InventoryCarousel = (props) => {
    const [carouselItemCount, setCarouselItemCount] = useState(1);

    const itemSizeHandler = () => {
        setCarouselItemCount(Math.ceil(window.innerWidth / props.cardSize));
    };

    const carouselParams = {
        startPosition: 0,
        items: carouselItemCount,
        margin: 10,
        loop: true,
        dots: false,
        slide: 'page',
        lazyLoad: 'true',
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        center: true,
    };
    const imageContainerStyle = {
        height: '300px',
        overflow: 'hidden',
        borderRadius: '25px',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
    };

    const imageStyle = {
        height: '100%',
        objectFit: 'cover',
        overflow: 'hidden'
    };
    const cardLabelStyle = {
        color: 'white',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center'
    };

    return <Jumbotron id={props.id}>
        <h3>Inventory</h3>
        <OwlCarousel {...carouselParams} onLoad={itemSizeHandler} onResize={itemSizeHandler}>
            {props.items.map(
                (item, index) => (
                    <Card key={'card'.concat(index.toString())}
                          style={imageContainerStyle}
                          as={Link}
                          id={'item'.concat(index.toString())}
                          to={"/item/" + item.NAME.replace(/\s/g, "")}
                          onClick={scrollToTop}>
                            <Card.Img
                                style={imageStyle}
                                variant="top"
                                src={item.TOPIMAGE}
                                alt="First slide"/>
                        <Card.Body className='bg bg-secondary'>
                            <Card.Text style={cardLabelStyle}>{item.NAME.toUpperCase()}</Card.Text>
                        </Card.Body>
                    </Card>
                ),
            )}
        </OwlCarousel>
    </Jumbotron>
};

export default InventoryCarousel;
