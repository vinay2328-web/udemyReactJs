import React, { useState } from 'react';

const UserInput = (props) => {
    const inputField = {
        width: '250px',
        margin: '15px 0px',
        padding: '8px',
        border: '1px solid #ccc',
    };

    return (
        <>
            <input style={inputField} type='text' onChange={props.changed} value={props.name} name={props.name} />
        </>
    )
};

export default UserInput;