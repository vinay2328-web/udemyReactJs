import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ConditionalStf from './Component/StateFull/ConditionalSTF';
// import ConditionalStl from './Component/StateLess/ConditionalSTL';
// import Assignmenttwo from './AssignmentTwo/Assignmenttwo';

const rootElement = document.getElementById('root');

// Component: APP
// ReactDOM.render(<App />, document.getElementById('root'));

// Component: StateFull conditional component
ReactDOM.render(<ConditionalStf />, rootElement);

// Component: StateFull conditional component
// ReactDOM.render(<ConditionalStl />, rootElement);

// Assignement Two: Class Component
// ReactDOM.render(<Assignmenttwo />, rootElement);