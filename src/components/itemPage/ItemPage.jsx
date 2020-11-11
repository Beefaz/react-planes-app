import React from 'react';
import {Image, Jumbotron, Row, Col} from "react-bootstrap";
import ImageGrid from "./ImageGrid";
import Iframe from 'react-iframe';
import {scrollToTop} from "../../constants/Constants";


const ItemPage = (props) => {
    const topSectionStyle = {
        justifyContent: 'center',
        paddingTop: '15px',
        margin: '-9px',
        marginBottom: '10px',
    };
    const topSectionCol1Style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    };
    const topSectionCol2Style = {
        ...topSectionCol1Style,
        flexDirection: 'column',
    };
    const topImgStyle = {
        maxHeight: '80vh',
        objectFit: 'cover',
    };
    const topSectionTextColStyle = {
        textAlign: 'justify',
        textJustify: 'inter-word',
        paddingTop: '15px',
    };
    const alternateH3Style = {
        display: 'flex',
        justifyContent: 'center'
    };

    const paragraphNameStyle = {};
    const paragraphStyle = {};
    const tableStyle = {};
    const headerRowStyle = {};
    const rowStyle = {};
    const ulStyle = {};
    const liStyle = {};

    const iframeParams = {
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


    return <Jumbotron id='itemPage' onLoad={scrollToTop} style={{paddingTop: '56px'}}>
        <Row style={topSectionStyle}>
            <Col sm={12} lg={8} xl={6} style={topSectionCol1Style}>
                <Image style={topImgStyle}
                       src={props.item.TOPIMAGE[0].default}
                       alt=""
                       fluid/>
            </Col>
            {props.item.CONTENT.hasOwnProperty('General_information')
            && <Col lg={4} xl={6} style={topSectionCol2Style}>
                <h3>{props.item.NAME}</h3>
                <div style={topSectionTextColStyle}>
                    {createElemFromNewLine('p', paragraphStyle, props.item.CONTENT.General_information)}
                </div>
            </Col>}
        </Row>
        {!props.item.CONTENT.hasOwnProperty('General_information')
        && <div style={alternateH3Style}><h3>{props.item.NAME}</h3></div>}
        {Object.keys(props.item.CONTENT).map((sectionContent, index) => (
            <section key={'Section'.concat((index).toString())}>
                {!objIncludesStr(sectionContent, 'unnamed')
                && ((objIncludesStr(sectionContent, 'list')
                    || objIncludesStr(sectionContent, 'table'))
                    ? (<h4 style={paragraphNameStyle}>{sectionContent.toString()
                        .replaceAll(/[_]+unnamed/gi, '')
                        .replaceAll(/[_]+list/gi, '')
                        .replaceAll(/[_]+table/gi, '')
                        .replaceAll(/[_]/gi, ' ')}</h4>)
                    : (!objIncludesStr(sectionContent, 'general_information')
                        && <h4 style={paragraphNameStyle}>{sectionContent.toString()
                            .replaceAll(/[_]/gi, ' ')}</h4>))
                }

                {objIncludesStr(sectionContent, 'video')
                && <Iframe {...iframeParams} url={props.item.CONTENT[sectionContent]}/>}

                {objIncludesStr(sectionContent, 'list')
                && <ul style={ulStyle}>{createElemFromNewLine('li', liStyle, props.item.CONTENT[sectionContent])}</ul>}

                {objIncludesStr(sectionContent, 'table')
                && createTable(props.item.CONTENT[sectionContent], tableStyle, headerRowStyle, rowStyle)}

                {!objIncludesStr(sectionContent, 'list')
                && !objIncludesStr(sectionContent, 'video')
                && !objIncludesStr(sectionContent, 'table')
                && !objIncludesStr(sectionContent, 'general_information')
                && createElemFromNewLine('p', paragraphStyle, props.item.CONTENT[sectionContent])}
            </section>
        ),)}
        <ImageGrid item={props.item} id={'Plane gallery'}/>
    </Jumbotron>
};

export default ItemPage;