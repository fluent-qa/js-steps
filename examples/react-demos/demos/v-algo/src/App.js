import React, { Component } from 'react';
import './App.css';

// class App extends Component { what's the different between the function/class
const App = function(){
  // render() {
    return (
      <div className="App"> {/* comments here */}
        <h1>Hello JSX!</h1>
        <p>This is a Paragraph</p>
        <ul>
          <li>l1</li>
          <li>l2</li>
          <li>l3</li>
        </ul>
      </div> 
    );
  }
// }

export default App;
