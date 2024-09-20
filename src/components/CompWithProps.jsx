import React, { useState } from 'react';

const CompWithProps = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <p>User: {text}</p>
        </div>
    );
}

export default CompWithProps;