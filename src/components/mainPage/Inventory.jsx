import React from 'react';
import {Card, Button, Jumbotron} from "react-bootstrap";
import {ITEMS} from "../../planes/FolderList";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Inventory = (props) => {
const carouselParams = {
    items: 6,
    margin:10,
    loop: true,
    dots: false,
    slide: 'page',
    lazyLoad: 'true',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
};
    return <Jumbotron id={props.id}>
        <h3>Inventory</h3>
        <OwlCarousel {...carouselParams}>
            {ITEMS.map(
                (item, key) => (
                    <Card key={key}>
                        <Card.Img
                            className="d-block w-100"
                            variant="top"
                            src={item.TOPIMAGE}
                            alt="First slide"
                        />
                        <Card.Title>{item.NAME}</Card.Title>
                        <Card.Text>{item.TEXT}</Card.Text>
                        <Button variant="primary">View plane</Button>
                    </Card>
                ),
            )}
        </OwlCarousel>
    </Jumbotron>
};

export default Inventory;
