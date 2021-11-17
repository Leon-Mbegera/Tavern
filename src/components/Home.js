import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const cocktails = useSelector((state) => state.cocktails);

  return (
    <div>
      {cocktails.map((cocktail) => <p key={cocktail.idDrink}>{cocktail.title}</p>)}
    </div>
  );
};

export default Home;
