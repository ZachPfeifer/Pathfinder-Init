import React, { Component } from 'react';


export default ({ id, value, onChange }) =>
  <div>
    <input type="text" value={value} onChange={e => onChange(id, e)} />
  </div>;