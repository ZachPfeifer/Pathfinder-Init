import React, { Component } from 'react'
import './App.css';
import Card from './Card'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      elements: [{
        id: 1,
        name: "player 1"

      }, {
        id: 2,
        name: "player 2"

      }]
    };
    this.updateName = this.updateName.bind(this)
  }

  updateName(id, e) {
    const { value } = e.target;
    const elements = this.state.elements
    const index = elements.findIndex(el => el.id === id)
    elements[index].name = value;
    this.setState({ elements });
  }

  render() {
    const { elements } = this.state;
    return (
      <div>
        {elements.map(elements =>
          <Card
            value={elements.name}
            key={elements.key}
            onChange={this.updateName}
            id={elements.id}
          />

        )}
      </div>
    );
  }
}

export default App;
