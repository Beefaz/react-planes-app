import React from 'react';
import ItemText from "./ItemText";
import {Image, Jumbotron} from "react-bootstrap";
import ImageGrid from "./ImageGrid";


const ItemPage = (props) => {
    return <Jumbotron onLoad={props.onLoad}>
        <Image src={props.item.TOPIMAGE}
               alt=""
               fluid/>
        <ItemText txtLink={props.item.TEXT}/>
        <ImageGrid item={props.item} id={'Plane gallery'}/>
    </Jumbotron>
};

export default ItemPage;