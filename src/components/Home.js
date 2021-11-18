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
    <div />
  );
};

export default Home;
