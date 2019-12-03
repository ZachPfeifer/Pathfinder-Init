import React, { Component } from 'react';


export default ({
  id,
  name,
  initiative,
  hitpoints,
  onNameChange,
  onInitiativeChange,
  onHitpointsChange }) =>
  <div className="card">
    <label htmlFor="name">
      Name:
    <input type="text" value={name} onChange={e => onNameChange(id, e)} />
    </label>
    <label htmlFor="initiative">
      Initiative:
      <input type="number" value={initiative} onChange={e => onInitiativeChange(id, e)} />
    </label>
    <label htmlFor="hitpoints">
      HP:
      <input type="number" value={hitpoints} onChange={e => onHitpointsChange(id, e)} />
    </label>


  </div>;