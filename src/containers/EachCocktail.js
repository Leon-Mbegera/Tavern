import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
    <div className="container-fluid my-4 d-flex flex-direction-column">
      <div className="col-8">
        <img src={clicked.strDrinkThumb} alt="eachCocktail" />
      </div>
      <div className="col-4">
        <p className="cocktail-name">{clicked.strDrink}</p>
        <div className="mb-4">
          <FontAwesomeIcon icon={faTag} className="price-tag" />
          <p className="price">
            Ksh.
            {' '}
            {Math.floor(Math.random() * 1000)}
          </p>
        </div>
        <div>
          <button type="button" className="btn btn-danger btn-block">Add to cart</button>
          <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart" />
        </div>
      </div>
    </div>
  );
};

export default EachCocktail;
