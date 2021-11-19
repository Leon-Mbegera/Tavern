import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktailsList } from '../actions/index';
import AllCocktails from '../containers/AllCocktails';
import SearchBar from './Search';

const Home = () => {
  const { cocktails } = useSelector((state) => state);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getCocktailsList(),
    );
  }, []);

  const handleFilterChange = (e) => setSearch(e.target.value);
  return (
    <>
      <AllCocktails cocktails={cocktails} />
    </>
  );
};

export default Home;
