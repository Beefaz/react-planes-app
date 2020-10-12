import React, {useState} from 'react';
const ItemText = (props) => {
    const [content, setContent] = useState('loading');
    fetch(props.txtLink)
        .then(response => response.text())
        .then(data => {
            setContent(data);
        });
    return (
        <div>
            <p>{content}</p>
        </div>
    );
};

export default ItemText;
