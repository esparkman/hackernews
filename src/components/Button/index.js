import React from 'react';

const Button = ({ onClick, className = '', children }) =>
  <button
    onClick={onClick}
    type="button"
    className={className}
  >
    {children}
  </button>

export default Button;