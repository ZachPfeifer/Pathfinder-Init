import React, { Component } from 'react'
import './App.css';
import Card from './Card'
// import { randomId } from "./Utility";
import uuid from 'uuid'
import { initialState } from "./Constants";






class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      elements: initialState,
    };
    this.updateName = this.updateName.bind(this)
    this.updateInitiative = this.updateInitiative.bind(this)
    this.updateHitpoints = this.updateHitpoints.bind(this)
    this.addCard = this.addCard.bind(this)
    this.removeElement = this.removeElement.bind(this)

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
      id: uuid(),
      name: `player ${elements.length + 1}`,
      initiative: -100,
      hitpoints: 10,
    };
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    })
  }


  removeElement(id) {
    let { elements } = this.state;
    elements = elements.filter(el => el.id !== id)
    this.setState({ elements });
  }

  sortElements() {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((l, r) => r.initiative - l.initiative)
    })
  }


  render() {
    //TEST Rendering
    // console.log(randomId())
    console.log(uuid())
    console.log(this.state.elements);





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
            onRemoveElement={this.removeElement}
            id={elements.id}
          />

        )}
      </div>
    );
  }
}

export default App;
