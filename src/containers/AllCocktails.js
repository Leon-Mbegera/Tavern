import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EachCocktail from './EachCocktail';

const AllCocktails = ({ cocktails }) => {
  const seeCocktail = (cocktail) => {
    <Link to="/Cocktail" className="nav-link">
      <EachCocktail cocktail={cocktail} />
      ;
    </Link>;
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
