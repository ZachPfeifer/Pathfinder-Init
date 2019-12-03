import React, { Component } from 'react'
import './App.css';
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div>
        <Card onChange={(e) => console.log(e)} />
      </div>
    );
  }
}

export default App;
