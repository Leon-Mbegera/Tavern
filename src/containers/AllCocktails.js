import React from 'react';
import PropTypes from 'prop-types';
import EachCocktail from './EachCocktail';

const AllCocktails = ({ cocktails }) => {
  const seeCocktail = (cocktail) => {
    <EachCocktail cocktail={cocktail} />;
  };

  return (
    <div>
      {cocktails.cocktails.map((cocktail) => (
        <>
          <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
          <button type="button" onClick={() => seeCocktail(cocktail)}>See Cocktail</button>
        </>
      ))}
    </div>
  );
};

AllCocktails.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCocktails;
