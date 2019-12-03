// INPUT LIBRARY

import React, { Component } from 'react';


export default ({
  label,
  type,
  value,
  onChange
}) =>
  <div className="card">
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} />
    </label>



  </div>;