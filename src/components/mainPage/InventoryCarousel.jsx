import React, {useState} from 'react';
import {Jumbotron, Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const InventoryCarousel = (props) => {
    const [carouselItemCount, setCarouselItemCount] = useState(1);

    const itemSizeHandler = () => {
        setCarouselItemCount(Math.ceil(window.innerWidth / props.cardSize));
    };

    const carouselParams = {
        items: carouselItemCount,
        margin: 10,
        loop: true,
        dots: false,
        slide: 'page',
        lazyLoad: 'true',
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
    };
    const imageContainerStyle = {
        height: '300px',
        display: 'flex',
        overflow: 'hidden',
        borderRadius: '25px',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };
    const imageWrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    };
    const imageStyle = {
        minHeight: '100%',
        minWidth: '100%',
        objectFit: 'cover',
        overflow: 'hidden'
    };
    const cardLabelStyle = {
        marginTop: '12px',
        color: 'white',
        verticalAlign: 'center',
        marginLeft: '10px',
        marginRight: '10px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center'
    };

    return <Jumbotron id={props.id}>
        <h3>Inventory</h3>
        <OwlCarousel {...carouselParams} onChange={itemSizeHandler}>
            {props.items.map(
                (item, index) => (
                    <Card key={'card'.concat(index.toString())}
                          style={imageContainerStyle}
                          as={Link}
                          to={"/item/" + item.NAME.replace(/\s/g, "")}
                          onClick={() => {
                              window.scrollTo({top: 0, behavior: 'auto'})
                          }}>
                        <div style={imageWrapperStyle} ref={React.createRef()}>
                            <Image
                                style={imageStyle}
                                variant="top"
                                src={item.TOPIMAGE}
                                alt="First slide"/>
                        </div>
                        <div>
                            <p style={cardLabelStyle}>{item.NAME.toUpperCase()}</p>
                        </div>
                    </Card>
                ),
            )}
        </OwlCarousel>
    </Jumbotron>
};

export default InventoryCarousel;
