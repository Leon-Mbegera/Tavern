import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktailsList } from '../actions/index';

const EachCocktail = () => {
  const { cocktails } = useSelector((state) => state);
  const { idx } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCocktailsList(),
    );
  }, []);

  const clicked = cocktails.cocktails[idx];
  return (
    <div>
      <img src={clicked.strDrinkThumb} alt="eachCocktail" />
      <p>{clicked.strDrink}</p>
      <p>
        ksh.
        {' '}
        {Math.floor(Math.random() * 1000)}
      </p>
    </div>
  );
};

export default EachCocktail;
