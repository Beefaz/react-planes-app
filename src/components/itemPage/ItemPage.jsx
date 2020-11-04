import React from 'react';
import {Image, Jumbotron} from "react-bootstrap";
import ImageGrid from "./ImageGrid";
import Iframe from 'react-iframe';
import {scrollToTop} from "../../constants/Constants";


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
        return content.split('\n').map((lineText, index) => React.createElement(HTMLComponentString, {
            style: styleProp,
            key: 'lineText'.concat(index.toString()),
        }, lineText))
    };

    return <Jumbotron id='itemPage' onLoad={scrollToTop}>
        <h1>{props.item.NAME}</h1>
        <Image src={props.item.TOPIMAGE[0].default}
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