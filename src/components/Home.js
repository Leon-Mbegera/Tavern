import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktailsList } from '../actions/index';

const Home = () => {
  const { cocktails } = useSelector((state) => state);
  console.log(cocktails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCocktailsList(),
    );
  }, []);

  return (
    <div>
      {cocktails.cocktails.map((cocktail) => (
        <>
          <p key={cocktail.idDrink}>{cocktail.strDrink}</p>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
        </>
      ))}
    </div>
  );
};

export default Home;
