import React from 'react';
import Input from '../random/Input'
import { rollD20 } from '../random/Utility'

export default ({
  id,
  name,
  initiative,
  hitpoints,
  ac,
  onNameChange,
  onInitiativeChange,
  onHitpointsChange,
  onAcChange,
  onRemoveElement,
}) =>

  <div className="mycard">
    <Input
      label="Name"
      type="text"
      value={name}
      onChange={e => onNameChange(id, e)}
    />

    <div id="initiative">
      <Input
        label="Initiative"
        type="number"
        value={initiative}
        onChange={e => onInitiativeChange(id, e)}
      />
      <button
        className="btn btn-dark btn-sm"
        type="button"
        onClick={() => onInitiativeChange(id, { target: { value: rollD20() } })}
      >D20</button>
    </div>


    <Input
      label="AC"
      type="number"
      value={ac}
      onChange={e => onAcChange(id, e)}
    />
    <Input
      label="Hitpoints"
      type="number"
      value={hitpoints}
      onChange={e => onHitpointsChange(id, e)}
    />
    <button className="btn btn-danger btn-sm" onClick={() => onRemoveElement(id)}>X</button>
  </div>;