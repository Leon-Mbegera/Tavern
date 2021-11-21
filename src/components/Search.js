import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleFilterChange }) => (
  <input type="text" onChange={(e) => handleFilterChange(e)} placeholder="Search cocktail by name.." />
);

SearchBar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default SearchBar;
