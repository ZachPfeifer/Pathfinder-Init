import React from 'react';
import Dice from '../random/Input'
import { rollPercentage, rollD12, rollD10, rollD8, rollD6, rollD4 } from "../random/Utility";
import { rolls } from '../state/Constants';

export default ({
  rolls,
  onDiceRoll,
}) =>

  <div className="dice">
    <Dice
      label="Roll Results"
      type="number"
      value={rolls}
      onChange={e => onDiceRoll(e)}
    />
    <button onClick={() => onDiceRoll({ target: { value: rollPercentage() } })}>Roll Percentage</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD12() } })}>Roll D12</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD10() } })}>Roll D10</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD8() } })}>Roll D8</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD6() } })}>Roll D6</button>
    <button onClick={() => onDiceRoll({ target: { value: rollD4() } })}>Roll D4</button>




  </div>;
