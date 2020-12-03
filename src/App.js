
import { useState } from 'react';
import './App.css';

// import Person from './Person/Person';
import UserInput from './AssignmentOne/UserInput';
import UserOputput from './AssignmentOne/UserOutput';

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Kuhoo", age: 18 },
//       { name: "Pallavi", age: 30 },
//       { name: "Vinay", age: 32 },
//     ],
//     otherState: 'somthing other state value'
//   }

//   switchNameHandler = () => {
//     // console.log('was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = "Avni";
//     this.setState({
//       persons: [
//         { name: "Avni", age: 18 },
//         { name: "Pallavi", age: 30 },
//         { name: "Vinay", age: 33 },
//       ]
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hi, I am React App</h1>
//         <button onClick={this.switchNameHandler}>Switch</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Na! Naaaa! Na!</Person>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Reading</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     )
//   }
// }


// function App() {
//   return (
//     <>
//       <h1>Hi, I am React App</h1>
//       <Person name="Kuhoo" age="18">Na! Naaaa! Na!</Person>
//       <Person name = "Vinay" age = "32" >My Hobbies: Reading</Person>
//       <Person name = "Pallavi" age = "30" />
//     </>
//   );
// }
// export default App;

// const App = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Kuhoo", age: 18 },
//       { name: "Pallavi", age: 30 },
//       { name: "Vinay", age: 32 },
//     ]
//   });
//   const [otherState, setOtherState] = useState('Something other state');
//   console.log(personState, otherState);

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: "Avni", age: 18 },
//         { name: "Pallavi", age: 30 },
//         { name: "Vinay", age: 33 },
//       ]
//     });

//     setOtherState(otherState);
//   }

//   return (
//     <>
//       <h1>Hi, I am React App</h1>
//       <button onClick={switchNameHandler}>Switch</button>
//       <Person name={personState.persons[0].name}
//               age={personState.persons[0].age}>
//                 Na! Naaaa! Na!
//       </Person>
//       <Person name={personState.persons[1].name}
//               age={personState.persons[1].age}
//               click = {switchNameHandler} >
//                 My Hobbies: Reading
//       </Person>
//       <Person name={personState.persons[2].name}
//               age={personState.persons[2].age} />
//     </>
//   )

// };

// export default App;

const App = () => {
  const style = {
    width: '60%',
    margin: '20px auto',
    textAlign: 'center',
  }

  const [userName, setUserName] = useState({
    users: [
      {
        name: 'Vinay',
      },
      {
        name: 'Kuhoo',
      }
    ]
  });
  const onChangeHandler = (event) => {
    setUserName({
      users: [
        {
          name: event.target.value
        },
        {
          name: 'Kuhoo'
        }
      ]
    });
  };

  return (
    <>
      <div style={style}>
        <h1>Assignment 1</h1>
        <p style = {{textAlign:'right'}}> - Vinay Pathrikar</p>
      </div>
      <UserOputput
        User={userName.users[0].name}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
        Donec scelerisque sollicitudin enim eu venenatis.
        <div>User Name: <UserInput
          name={userName.users[0].name}
          changed={onChangeHandler} />
        </div>
      </UserOputput>
      <UserOputput
        User={userName.users[1].name}>
        Duis tincidunt laoreet ex,
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
        vestibulum.
        <div>User Name: <UserInput
          name={userName.users[1].name}
        />
        </div>
      </UserOputput>

    </>
  )
};

export default App;