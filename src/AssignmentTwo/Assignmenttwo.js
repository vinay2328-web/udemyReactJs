import React, { Component } from 'react';
import Validation from './Validation';
import Charcomponent from './Charcomponent';

class Assignmenttwo extends Component {
    state = {
        userInput: ''
    }

    inputHandler = (element) => {
        this.setState({ userInput: element.target.value });
    }

    deletCharHandler = (ind) => {
        const text = this.state.userInput.split('');
        text.splice(ind, 1);

        const updatedText = text.join('');
        this.setState({ userInput: updatedText });

    }

    render() {

        const charComponent = this.state.userInput.split('').map((ch, ind) => {
            return (
                <Charcomponent
                    char={ch}
                    key={ind}
                    clicked={() => { this.deletCharHandler(ind) }} />
            )
        });

        return (
            <div>
                <input type="text" onChange={this.inputHandler} value={this.state.userInput} />
                <p>{this.state.userInput}</p>
                <Validation
                    inputLength={this.state.userInput.length} />
                {charComponent}
            </div>
        );
    }
}

export default Assignmenttwo;