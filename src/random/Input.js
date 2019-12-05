// INPUT LIBRARY

import React from 'react';


export default ({
  label,
  type,
  value,
  onChange
}) =>
  <div className="mycard">
    <label>
      {label}
      <input type={type} value={value} onChange={onChange} />
    </label>



  </div>;