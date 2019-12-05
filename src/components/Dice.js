import React from 'react';
import Dice from '../random/Input'
import { rollPercentage, rollD12, rollD10, rollD8, rollD6, rollD4, rollD20 } from "../random/Utility";
// import { rolls } from '../state/Constants';

export default ({
  rolls,
  onDiceRoll,
}) =>

  <div className="dice ">
    <div className="row">
      <div className="col-12 col-sm-12 d-flex justify-content-center">
        <Dice
          label="Roll Results"
          type="number"
          value={rolls}
          onChange={e => onDiceRoll(e)}
        />
        {/* <Dice
          label="Modifiers"
          type="number"
          value={rolls}
          onChange={e => onDiceRoll(e)}
        /> */}

      </div>
    </div>

    <hr />
    <span className="d-flex justify-content-center">
      <p>Rolls:  </p>
      <button className="btn btn-dark" onClick={() => onDiceRoll({ target: { value: rollD20() } })}>D20</button>
      <button className="btn btn-dark" onClick={() => onDiceRoll({ target: { value: rollD12() } })}>D12</button>
      <button className="btn btn-dark" onClick={() => onDiceRoll({ target: { value: rollD10() } })}>D10</button>
      <button className="btn btn-dark" onClick={() => onDiceRoll({ target: { value: rollD8() } })}>D8</button>
      <button className="btn btn-dark" onClick={() => onDiceRoll({ target: { value: rollD6() } })}>D6</button>
      <button className="btn btn-dark" onClick={() => onDiceRoll({ target: { value: rollD4() } })}>D4</button>
      <button className="btn btn-dark" onClick={() => onDiceRoll({ target: { value: rollPercentage() } })}>%</button>
    </span>


    {/* <hr />
    <i className="ra ra-dice-six ra-2x"></i>
    <i className="ra ra-perspective-dice-random ra-2x"></i>
    <i className="ra ra-perspective-dice-random ra-2x" onClick={() => onDiceRoll({ target: { value: rollPercentage() } })}>Roll Percentage</i>
    <i className="ra ra-perspective-dice-random ra-2x" onClick={() => onDiceRoll({ target: { value: rollD20() } })}>Roll D20</i> */}




  </div>;
