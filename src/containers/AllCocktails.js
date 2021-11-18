import React from 'react';

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

export default AllCocktails;
