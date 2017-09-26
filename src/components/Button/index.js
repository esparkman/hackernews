import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) =>
  <button
    onClick={onClick}
    type="button"
    className={className}
  >
    {children}
  </button>

Button.defaultProps = {
  className: '',
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button;