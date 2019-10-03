import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Form from './Form.js';
import Intro from './Intro.js';
import Button from './Button.js';
import Mood from './Mood.js';
import NumPicker from './NumPicker.js';
import Friend from './Friend.js';
import CountClick from './CountClick';

class App extends Component {
  render() {
  return (
     <div className="App">
        {/* <Hello to="Cher" from="Paul" />
        <Hello to="Ringo" from="Sonny" />
        <Hello to="Bob" />
        <Form />
        <Intro />
        <Button />
        <Mood />
        <NumPicker />
        <Friend name="Elton" hobbies={[ 'Piano' , 'Singing' , 'Dancing' ]} /> */}
        <CountClick />
     </div>
    );
  }
}


export default App;
