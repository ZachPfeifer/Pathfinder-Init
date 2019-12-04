import React, { Component } from 'react'
import './App.css';
import Card from './components/Card'
// import { randomId } from "./Utility";
import uuid from 'uuid'
import { initialState } from "./state/Constants";






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


  //Local Storage
  componentWillMount() {
    localStorage.getItem('Players') && this.setState({
      elements: JSON.parse(localStorage.getItem('Players'))
    })
  }

  componentDidMount() {
    if (!localStorage.getItem('Players')) {
      this.fetchData();
    } else {
      console.log('Using Local Storage for Player Info');
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('Players', JSON.stringify(nextState.elements));
    // localStorage.setItem('PlayersDate', Date.now());

  }

  clearLocalStorage() {
    localStorage.removeItem("Players");
    window.location.reload(false)
  }

  fetchData() {
    //API/SERVER Link for later
  }



  //Update Functions
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
        <button onClick={this.clearLocalStorage}>Clear Storage</button>
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
