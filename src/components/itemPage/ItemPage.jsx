import React from 'react';
import {Image, Jumbotron} from "react-bootstrap";
import ImageGrid from "./ImageGrid";
import Iframe from 'react-iframe';
import {scrollToTop} from "../../constants/Constants";


const ItemPage = (props) => {
    const paragraphNameStyle = {};
    const paragraphStyle = {};
    const tableStyle = {};
    const headerRowStyle = {};
    const rowStyle = {};
    const ulStyle = {};
    const liStyle = {};

    let iframeParams = {
        width: "100%",
        height: "415",
        frameBorder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
    };

    const objIncludesStr = (someObj, someStr) => someObj.toString().toLowerCase().includes(someStr.toString().toLowerCase());

    const createElemFromNewLine = (HTMLComponentString, styleProp, content) =>
        content.split('\n').map((lineText, index) => React.createElement(HTMLComponentString, {
            style: styleProp,
            key: 'lineText'.concat(index.toString()),
        }, lineText));


    const createTable = (tableObj) => <table>
        <tbody>
        {Object.keys(tableObj).map((tableRows, rowIndex) => (
            <tr key={'tableRow'.concat(rowIndex.toString())}>
                {objIncludesStr(tableRows, 'tHead')
                    ? Object.keys(tableObj[tableRows]).map((column, colIndex) => (
                        <th
                            style={headerRowStyle}
                            key={column.toString().concat(colIndex.toString())}>
                            {tableObj[tableRows][column]}
                        </th>))
                    : Object.keys(tableObj[tableRows]).map((column, colIndex) => (
                        <td style={rowStyle}
                            key={column.toString().concat(colIndex.toString())}>
                            {tableObj[tableRows][column]}
                        </td>),)
                }
            </tr>
        ),)}
        </tbody>
    </table>;


    return <Jumbotron id='itemPage' onLoad={scrollToTop} style={{paddingTop:'56px'}}>
        <h1>{props.item.NAME}</h1>
        <div>
            <Image src={props.item.TOPIMAGE[0].default}
                   alt=""
                   fluid/>
            {props.item.CONTENT.hasOwnProperty('General_information')
                ? <div><h4 style={paragraphNameStyle}>General
                    info:</h4>{createElemFromNewLine('p', paragraphStyle, props.item.CONTENT.General_information)}</div>
                : null}
        </div>
        {Object.keys(props.item.CONTENT).map((sectionContent, index) => (
            <section key={'Section'.concat((index).toString())}>
                {!objIncludesStr(sectionContent, 'unnamed')
                    ? (objIncludesStr(sectionContent, 'list')
                        || objIncludesStr(sectionContent, 'table'))
                        ? <h4 style={paragraphNameStyle}>{sectionContent.toString()
                            .replace(/[_]+unnamed/gi, '')
                            .replace(/[_]+list/gi, '')
                            .replace(/[_]+table/gi, '')
                            .replace(/[_]/, ' ')}</h4>
                        : <h4 style={paragraphNameStyle}>{sectionContent.toString()
                            .replace(/[_]/, ' ')}</h4>
                    : null
                }
                {objIncludesStr(sectionContent, 'video')
                    ? <Iframe {...iframeParams} url={props.item.CONTENT[sectionContent]}/>
                    : null}
                {objIncludesStr(sectionContent, 'list')
                    ?
                    <ul style={ulStyle}>{createElemFromNewLine('li', liStyle, props.item.CONTENT[sectionContent])}</ul>
                    : null}
                {objIncludesStr(sectionContent, 'table')
                    ? createTable(props.item.CONTENT[sectionContent], tableStyle, headerRowStyle, rowStyle)
                    : null}
                {!objIncludesStr(sectionContent, 'list')
                && !objIncludesStr(sectionContent, 'video')
                && !objIncludesStr(sectionContent, 'table')
                    ? createElemFromNewLine('p', paragraphStyle, props.item.CONTENT[sectionContent])
                    : null}
            </section>
        ),)}
        <ImageGrid item={props.item} id={'Plane gallery'}/>
    </Jumbotron>
};

export default ItemPage;