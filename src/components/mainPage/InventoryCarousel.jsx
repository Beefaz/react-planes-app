import React, {useState} from 'react';
import {Jumbotron, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const InventoryCarousel = (props) => {
    const [cardSize, setCardSize] = useState(300);

    const carouselParams = {
        autoWidth: true,
        autoPlay: true,
        autoPlayInterval: 2500,
        animationDuration: 500,
        mouseTracking: true,
        disableDotsControls: true,
        disableButtonsControls: true,
        dots: false,
        infinite: true,
    };
    const imageContainerStyle = {
        height: cardSize-32,
        width: cardSize-32,
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
    const handleDragStart = (e) => e.preventDefault();
    const resizeItems = () => {
        if (window.screen.width <= 350) {
            setCardSize(window.screen.width);
        }
    };

    const cards = props.items.map(
        (item, index) => (
            <Card key={'card'.concat(index.toString())}
                  style={imageContainerStyle}
                  onDragStart={handleDragStart}>
                <Card.Img
                    style={imageStyle}
                    variant="top"
                    src={item.TOPIMAGE[0].default}
                    alt="First slide"/>
                <Card.Body className='text-light bg-dark'

                           as={Link}
                           id={'item'.concat(index.toString())}
                           to={"/item/" + item.NAME.replace(/\s/g, "")}>
                    <Card.Text style={cardLabelStyle}>{item.NAME.toUpperCase()}</Card.Text>
                </Card.Body>
            </Card>
        ),
    );
    return <Jumbotron id={props.id}>
        <h3>Inventory</h3>
        <AliceCarousel {...carouselParams} items={cards} onLoad={resizeItems} onResized={resizeItems}/>
    </Jumbotron>
};

export default InventoryCarousel;
