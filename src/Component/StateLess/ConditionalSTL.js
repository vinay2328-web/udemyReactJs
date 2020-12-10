import React, { useState } from 'react';
import Person from '../../Person/Person';

const ConditonalStl = () => {
    const [persons, setPersons] = useState({
        users: [
            { id: "abc1", name: "Vinay", age: 30 },
            { id: "abc2", name: "Pallavi", age: 28 },
            { id: "abc3", name: "Kuhoo", age: 2 },
            { id: "abc4", name: "Pari", age: 3 },
            { id: "abc5", name: "Bali", age: 26 },
        ],
        otherPerson: "Somthing other Person",
        showPerson: false
    });

    const togglePersons = () => {
        const doesShowPerson = persons.showPerson;
        setPersons((oldData) => {
            return {
                ...oldData,
                showPerson: !doesShowPerson
            }
        });
    };

    const deletePerson = (personIndex) => {
        const personList = persons.users;
        personList.splice(personIndex, 1);
        setPersons((pervData) => {
            return {
                ...pervData,
                persons: personList,
            }
        });
    };

    const nameChangeHandler = (event, id) => {
        const value = event.target.value;

        const personPindex = persons.users.findIndex(p => {
            return p.id === id;
        });

        const pPerson = {
            ...persons.users[personPindex]
        }

        pPerson.name = value;

        const personsList = persons.users;

        personsList[personPindex] = pPerson;

        setPersons((oldData) => {
            return {
                ...oldData,
                [persons.users]: personsList
            }

        });

    };



    let people = null;

    if (persons.showPerson) {
        people = (
            <div>
                {
                    persons.users.map((peoples, indx) => {
                        return <Person
                            key={peoples.id}
                            click={() => { deletePerson(indx) }}
                            name={peoples.name}
                            age={peoples.age}
                            change={(event) => nameChangeHandler(event, peoples.id)} />
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div>
                <h1>Statless/Functional Component:
                    <span> - Rendering Context Conditionally</span>
                </h1>
                <button onClick={togglePersons}>Show Person</button>
            </div>
            {people}
        </>
    );
}

export default ConditonalStl;