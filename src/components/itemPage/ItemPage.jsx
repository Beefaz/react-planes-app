import React from 'react';
import {Image, Jumbotron} from "react-bootstrap";
import ImageGrid from "./ImageGrid";
import Iframe from 'react-iframe';


const ItemPage = (props) => {
    const paragraphNameStyle = {

    };
    const paragraphStyle = {

    };
    const iframeParams={
        width:"100%",
        height:"415",
        frameBorder:"0",
        allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
        url: props.item.CONTENT.Video,
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
            <section key={'Section'.concat((index).toString())}>
                {(paragraphItem !=='Status') && (paragraphItem !=='Video') ? newLinesToComponents('h4', paragraphNameStyle, paragraphItem.replace('_', ' ')) : null}
                {paragraphItem !=='Video' ? newLinesToComponents('p', paragraphStyle, props.item.CONTENT[paragraphItem]) : React.createElement(Iframe, iframeParams)}
            </section>
        ),)}
        <ImageGrid item={props.item} id={'Plane gallery'}/>
    </Jumbotron>
};

export default ItemPage;