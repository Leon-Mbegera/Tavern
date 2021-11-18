import React from 'react';
import PropTypes from 'prop-types';
import EachCocktail from './EachCocktail';

const AllCocktails = ({ cocktails }) => (
  <div>
    {cocktails.cocktails.map((cocktail) => (
      <>
        <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
        <EachCocktail cocktail={cocktail} />
      </>
    ))}
  </div>
);

AllCocktails.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCocktails;
