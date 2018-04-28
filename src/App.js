import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Coursesales from '../src/Coursesales';

class App extends Component {
  render() {
    const courses = [
      { name: 'Complete React js course', price: 199 },
      { name: 'Complete Pentesting course', price: 199 },
      { name: 'Complete Front End dev course', price: 199 },
      { name: 'Complete PHP course', price: 199 }
    ]

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
