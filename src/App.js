import React, { Component } from 'react'
import './App.css';
import '../node_modules/rpg-awesome/css/rpg-awesome.min.css'
import uuid from 'uuid'
import { initialState, rolls } from "./state/Constants";
import Card from './components/Card'
import Dice from './components/Dice'






class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      elements: initialState,
      diceRoll: rolls,
    };
    this.updateName = this.updateName.bind(this)
    this.updateInitiative = this.updateInitiative.bind(this)
    this.updateHitpoints = this.updateHitpoints.bind(this)
    this.updateAc = this.updateAc.bind(this)

    this.addCard = this.addCard.bind(this)
    this.removeElement = this.removeElement.bind(this)

    //NEW
    this.updateRoll = this.updateRoll.bind(this)


  }


  //Local Storage
  UNSAFE_componentWillMount() {
    localStorage.getItem('Players') && this.setState({
      elements: JSON.parse(localStorage.getItem('Players'))
    })
  }

  UNSAFE_componentDidMount() {
    if (!localStorage.getItem('Players')) {
      this.fetchData();
    } else {
      console.log('Using Local Storage for Player Info');
    }
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
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



  //SECTION Update Functions
  //Player
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

  updateAc(id, e) {
    const { value } = e.target;
    const elements = this.state.elements
    const index = elements.findIndex(el => el.id === id)
    elements[index].ac = Number(value);
    this.setState({ elements });
  }

  //ROLLs
  updateRoll(e) {
    const { value } = e.target;
    let diceRoll = this.state.diceRoll
    diceRoll = value;
    this.setState({ diceRoll });
  }


  //SECTION ADD/REMOVE
  addCard() {
    const { elements } = this.state;
    elements[elements.length] = {
      id: uuid(),
      name: `player ${elements.length + 1}`,
      initiative: undefined,
      hitpoints: undefined,
      ac: undefined,
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
    console.log(this.state.diceRoll);






    const { elements } = this.state;
    const { diceRoll } = this.state;

    return (
      <div className="container center">
        <div className="card bg-light mb-3 d-flex justify-content-center">
          <h1 className="card-header">Pathfinder Initiative Tracker</h1>
          <div className="card-body ">
            <h5 className="card-title">Initiatives:</h5>
            <p className="card-text ">
              {elements.map(elements =>
                <Card
                  key={elements.key}
                  name={elements.name}
                  initiative={elements.initiative}
                  hitpoints={elements.hitpoints}
                  ac={elements.ac}
                  onNameChange={this.updateName}
                  onInitiativeChange={this.updateInitiative}
                  onHitpointsChange={this.updateHitpoints}
                  onAcChange={this.updateAc}
                  onRemoveElement={this.removeElement}
                  id={elements.id}
                />

              )}
              <div className="row">
                <div className="col-12">
                  <Dice
                    rolls={diceRoll}
                    onDiceRoll={this.updateRoll}
                  />
                </div>
              </div>
            </p>
          </div>
          <div className="card-footer">
            <div className="btn-container row">
              <button className="btn btn-dark col-6" onClick={this.addCard}>+ Add Player</button>
              <button className="btn btn-dark col-6" onClick={this.clearLocalStorage}>Clear Storage</button>
            </div>
          </div>
        </div>







      </div>
    );
  }
}

export default App;
