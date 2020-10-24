import React from 'react';
import {Image, Jumbotron} from "react-bootstrap";
import ImageGrid from "./ImageGrid";


const ItemPage = (props) => {
    const paragraphNameStyle = {

    };
    const paragraphStyle = {

    };
    const newLinesToComponents = (HTMLComponentString, styleProp, content) => {
        return content.split('\n').map((lineText, index, key) => React.createElement(HTMLComponentString, {
            style: styleProp,
            key: lineText.concat(key.toString()),
        }, lineText))
    };

    return <Jumbotron onLoad={props.onLoad}>
        <Image src={props.item.TOPIMAGE}
               alt=""
               fluid/>
        {Object.keys(props.item.CONTENT).map((paragraphItem, index) => (
            <div key={'Section'.concat((index).toString())}>
                {newLinesToComponents('h4', paragraphNameStyle, paragraphItem.replace('_', ' '))}
                {newLinesToComponents('p', paragraphStyle, props.item.CONTENT[paragraphItem])}
            </div>
        ),)}
        <ImageGrid item={props.item} id={'Plane gallery'}/>
    </Jumbotron>
};

export default ItemPage;