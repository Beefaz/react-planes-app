import React, {useState} from 'react';
const InventoryItemText = (props) => {
    const [content, setContent] = useState('loading');
    fetch(props.txtLink)
        .then(response => response.text())
        .then(data => {
            setContent(data);
        });
    return <p>{content.txtLink}</p>
};

export default InventoryItemText;