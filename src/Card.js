import React from 'react';
import Input from './Input'
import Utility, { rollD20 } from './Utility'

export default ({
  id,
  name,
  initiative,
  hitpoints,
  onNameChange,
  onInitiativeChange,
  onHitpointsChange,
  onRemoveElement,
}) =>

  <div className="card">
    <Input
      label="Name"
      type="text"
      value={name}
      onChange={e => onNameChange(id, e)}
    />

    <Input
      label="Initiative"
      type="number"
      value={initiative}
      onChange={e => onInitiativeChange(id, e)}
    />
    <button onClick={() => onInitiativeChange(id, { target: { value: rollD20() } })}>Roll D20</button>


    <Input
      label="Hitpoints"
      type="number"
      value={hitpoints}
      onChange={e => onHitpointsChange(id, e)}
    />
    <button onClick={() => onRemoveElement(id)}>-</button>
  </div>;