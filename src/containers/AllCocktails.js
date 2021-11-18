import React from 'react';
import PropTypes from 'prop-types';

const AllCocktails = ({ cocktails }) => (
  <div>
    {cocktails.cocktails.map((cocktail) => (
      <>
        <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
      </>
    ))}
  </div>
);

AllCocktails.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCocktails;
