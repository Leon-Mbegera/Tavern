import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllCocktails = ({ cocktails }) => (
  <div>
    {cocktails.map((cocktail, idx) => (
      <>
        <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
        <Link to={`/cocktail/${idx}`} className="nav-link">Cocktail</Link>
      </>
    ))}
  </div>
);

AllCocktails.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCocktails;
