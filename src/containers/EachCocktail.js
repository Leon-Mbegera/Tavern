import React from 'react';
import PropTypes from 'prop-types';

const EachCocktail = ({ cocktail }) => (
  <div>
    <img src={cocktail.strDrinkThumb} alt="eachCocktail" />
    <p>{cocktail.strDrink}</p>
    <p>
      ksh.
      {' '}
      {Math.floor(Math.random() * 1000)}
    </p>
  </div>
);

EachCocktail.propTypes = {
  cocktail: PropTypes.arrayOf(PropTypes.string).isRequired,
};

EachCocktail.defaultProps = {

};

export default EachCocktail;
