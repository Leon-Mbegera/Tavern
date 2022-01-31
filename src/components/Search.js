import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleFilterChange }) => (
  <div className="sub-header container-fluid d-flex flex-direction-column justify-content-between">
    <div className="d-flex flex-direction-column offer">
      <h4 className="fw-bold">NOVEMBER BLACK FRIDAY SALES</h4>
      <p className="discount py-1">Up to 50% Off</p>
      <p className="live-now blink">LIVE NOW</p>
    </div>
    <div className="form-outline my-3 Searchbar">
      <input
        type="text"
        className="form-control"
        onChange={(e) => handleFilterChange(e)}
        placeholder="Search cocktail by name.."
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default SearchBar;
