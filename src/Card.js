import React, { Component } from 'react';
import Input from './Input'

export default ({
  id,
  name,
  initiative,
  hitpoints,
  onNameChange,
  onInitiativeChange,
  onHitpointsChange
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


    <Input
      label="Hitpoints"
      type="number"
      value={hitpoints}
      onChange={e => onHitpointsChange(id, e)}
    />
    <button>
      -
    </button>
  </div>;