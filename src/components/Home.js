import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktailsList } from '../actions/index';
import AllCocktails from '../containers/AllCocktails';

const Home = () => {
  const { cocktails } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCocktailsList(),
    );
  }, []);

  return (
    <>
      <AllCocktails cocktails={cocktails} />
    </>
  );
};

export default Home;
