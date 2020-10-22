import React, {useState} from 'react';
import {Image, Card, Button, Jumbotron} from "react-bootstrap";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Inventory = (props) => {
    const requiredCarouselItemWidth = 300;
    const [carouselItemCount, setCarouselItemCount] = useState(1);
    const [carouselItemHeight, setCarouselItemHeight] = useState('300px');

    const itemSizeHandler = () =>{
        setCarouselItemCount(Math.ceil( window.innerWidth/requiredCarouselItemWidth));
        setCarouselItemHeight((window.innerHeight/window.innerHeight*requiredCarouselItemWidth).toString().concat('px'));
    };


    const carouselParams = {
    items: carouselItemCount,
    margin: 10,
    loop: true,
    dots: false,
    slide: 'page',
    lazyLoad: 'true',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
};

    const imageContainerStyle = {
        height: carouselItemHeight,
        display:'flex',
        overflow:'hidden',
        borderRadius:'25px'
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

    return <Jumbotron id={props.id}>
        {console.log(carouselItemHeight)}
        <h3>Inventory</h3>
        <OwlCarousel {...carouselParams} onResize={itemSizeHandler} onLoad={itemSizeHandler}>
            {props.items.map(
                (item, key) => (
                    <Card key={key} style={imageContainerStyle}>
                        <div style={imageWrapperStyle}>
                            <Image
                            style={imageStyle}
                            variant="top"
                            src={item.TOPIMAGE}
                            alt="First slide"/>
                        </div>
                        <Button variant="primary" as={Link}
                                to={"/item/"+item.NAME.replace(/\s/g, "")}
                        >{item.NAME}</Button>
                    </Card>
                ),
            )}
        </OwlCarousel>
    </Jumbotron>
};

export default Inventory;
