import React, {useState} from 'react';

const ItemText = (props) => {
    const [content, setContent] = useState('loading');


    fetch(props.txtLink)
        .then(response => response.text())
        .then(data => setContent(data));

    return (
        <p style={{wordWrap:'break-word'}}>
            {content}
        </p>
    );
};

export default ItemText;
