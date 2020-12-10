import React from 'react';

const Charcomponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid #232323',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'orange',
        cursor:'pointer'
    }
    return (
        <div
         style={style}
         onClick={props.clicked}>
            <p>{props.char}</p>
        </div>
    )
};

export default Charcomponent;