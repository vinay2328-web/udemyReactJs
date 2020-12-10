import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import Person from '../../Person/Person';
import styled from 'styled-components';
import '../../App.css';

const StyledButton = styled.button`
    background-color:${props => props.alt ? 'red' : 'green'};
    color: white;
    padding: 10px;
    margin:10px;
    text-align:center;
    font-size: 14px;
    letter-spacing: 1px;
    border:1px solid white;
    cursor:pointer;
    outline:none;

    &:hover {
        background-color:${props => props.alt ? 'salmon' : 'lightgreen'};
        color:black;
    }
`;

class ConditionalStf extends Component {
    state = {
        person: [
            { id: "asdf1", name: "Vinay", age: 30 },
            { id: "asdf2", name: "Pallavi", age: 28 },
            { id: "asdf3", name: "Kuhoo", age: 2 },
            { id: "asd4", name: "Pari", age: 3 },
        ],
        otherState: 'Somthing other state',
        showPerson: false,
    }

    toggleHandler = () => {
        const doesShowPerson = this.state.showPerson;
        this.setState(
            { showPerson: !doesShowPerson }
        );
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.person.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.person[personIndex]
        }

        person.name = event.target.value;

        const personPerson = [...this.state.person];

        personPerson[personIndex] = person;

        this.setState({ person: personPerson });
    };

    deletePerson = (personIndex) => {
        const persons = this.state.person;
        persons.splice(personIndex, 1);
        this.setState({ person: persons });
    }


    render() {
        // const style = {}

        let personContext = null;

        if (this.state.showPerson) {
            personContext = (
                <>
                    {this.state.person.map((user, index) => {
                        return <Person
                            key={user.id}
                            click={() => { this.deletePerson(index) }}
                            name={user.name}
                            age={user.age}
                            change={(event) => { this.nameChangeHandler(event, user.id) }} />
                    })}
                </>
            );

            // style.backgroundColor = 'red';
            // style.border = '1px solid black';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color:'black'
            // }
        }

        const classes = [];

        if(this.state.person.length <= 2){
            classes.push('red');
        }
        if(this.state.person.length <= 1){
            classes.push('bold');
        }

        return (
            // <StyleRoot>
            <>
                <h1>Rendering Context Conditionally</h1>
                <p className={classes.join(' ')}>This is working now!</p>
                <StyledButton alt = {this.state.showPerson} onClick={this.toggleHandler}>Toggle Person</StyledButton>
                { personContext }
            </>
            // </StyleRoot>
        );
    };
};

// export default Radium(ConditionalStf);
export default ConditionalStf;