import React, { Component } from 'react';


export default ({ onChange }) =>
  <div>
    <input type="text" onChange={e => onChange(e)} />
  </div>;