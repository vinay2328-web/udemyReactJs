import React from 'react';
import './Users.css';
const UserOutput = (props) => {
    return (
        <>
            <div className='Users'>
                <div>User: <b>{props.User}</b></div>
                <div className='userPara'>{props.children}</div>
            </div>
        </>
    );
};

export default UserOutput;