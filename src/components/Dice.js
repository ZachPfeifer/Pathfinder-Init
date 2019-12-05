import React from 'react';
import Dice from '../random/Input'
import { rollPercentage, rollD12, rollD10, rollD8, rollD6, rollD4, rollD20 } from "../random/Utility";
// import { rolls } from '../state/Constants';

export default ({
  rolls,
  onDiceRoll,
}) =>

  <div className="dice">
    <span>
      <Dice
        label="Roll Results"
        type="number"
        value={rolls}
        onChange={e => onDiceRoll(e)}
      />
      <label>Modifiers </label>
      <input type="number" />
    </span>


    <button onClick={() => onDiceRoll({ target: { value: rollPercentage() } })}>Roll Percentage</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD20() } })}>Roll D20</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD12() } })}>Roll D12</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD10() } })}>Roll D10</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD8() } })}>Roll D8</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD6() } })}>Roll D6</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD4() } })}>Roll D4</button>


    <hr />
    <i className="ra ra-dice-six ra-2x"></i>
    <i className="ra ra-perspective-dice-random ra-2x"></i>
    <i className="ra ra-perspective-dice-random ra-2x" onClick={() => onDiceRoll({ target: { value: rollPercentage() } })}>Roll Percentage</i>
    <i className="ra ra-perspective-dice-random ra-2x" onClick={() => onDiceRoll({ target: { value: rollD20() } })}>Roll D20</i>




  </div>;
