import React, { Component } from 'react'
import './App.css';
import Card from './Card'


const randomId = () =>
  Math.floor(Math.random() * 1000000);

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      elements: [{
        id: randomId(),
        name: "player 1",
        initiative: 20,
        hitpoints: 50,
      }, {
        id: randomId(),
        name: "player 2",
        initiative: 19,
        hitpoints: 50,

      }, {
        id: randomId(),
        name: "player 3",
        initiative: 18,
        hitpoints: 50,

      }, {
        id: randomId(),
        name: "player 4",
        initiative: 17,
        hitpoints: 50,

      }]
    };
    this.updateName = this.updateName.bind(this)
    this.updateInitiative = this.updateInitiative.bind(this)
    this.updateHitpoints = this.updateHitpoints.bind(this)
    this.addCard = this.addCard.bind(this)



  }

  updateName(id, e) {
    const { value } = e.target;
    const elements = this.state.elements
    const index = elements.findIndex(el => el.id === id)
    elements[index].name = value;
    this.setState({ elements });
  }

  updateInitiative(id, e) {
    clearTimeout(this.timeout_)
    const { value } = e.target;
    const elements = this.state.elements
    const index = elements.findIndex(el => el.id === id)
    elements[index].initiative = Number(value);
    this.setState({ elements });
    this.timeout_ = setTimeout(() => this.sortElements(), 500)
  }

  updateHitpoints(id, e) {
    const { value } = e.target;
    const elements = this.state.elements
    const index = elements.findIndex(el => el.id === id)
    elements[index].hitpoints = Number(value);
    this.setState({ elements });
  }

  addCard() {
    const { elements } = this.state;
    elements[elements.length] = {
      id: randomId(),
      name: `player ${elements.length + 1}`,
      initiative: -100,
      hitpoints: 10,
    };
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    })
  }

  sortElements() {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    })
  }


  render() {
    const { elements } = this.state;
    return (
      <div>
        <button onClick={this.addCard}>+</button>

        {elements.map(elements =>
          <Card
            key={elements.key}
            name={elements.name}
            initiative={elements.initiative}
            hitpoints={elements.hitpoints}
            onNameChange={this.updateName}
            onInitiativeChange={this.updateInitiative}
            onHitpointsChange={this.updateHitpoints}
            id={elements.id}
          />

        )}
      </div>
    );
  }
}

export default App;
