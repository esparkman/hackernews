import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {  
  render() {
    const { value, onChange, onSubmit, children } = this.props;
    let input;

    return (
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          ref={(node) => input = node}
        />
        <button
          type='submit'
        >
          {children}
        </button>
      </form>
    );
  }
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Search;