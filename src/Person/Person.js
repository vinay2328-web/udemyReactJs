import React from 'react';
import './Person.css';
import styled from 'styled-components'

const person = (props) => {

    const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        padding: 10px;
        border: 1px solid rgb(240, 236, 236);
        box-shadow: 0px 2px 2px rgb(123, 121, 121);

        @media(min-width: 500px) {
            width: 450px;
        }
    `;

    // const style = {
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // }


    return (
        <>
            <StyledDiv>
                <p onClick={props.click}>I'm a <b>{props.name} </b> and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.change} value={props.name} name={props.name} />
            </StyledDiv>
        </>
    );
};

export default person;