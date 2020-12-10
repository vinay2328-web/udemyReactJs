import React from 'react';

const Validation = (props) => {
    let validationMsg = 'Text to long';

    if(props.inputLength <=5) {
        validationMsg = 'Text to short';
    }

    return(
        <div>
            <p>{validationMsg}</p>
        </div>
    )
};

export default Validation;