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
    <div className="container my-4">
      <div className="d-flex flex-row justify-content-between">
        <div>
          <img src={clicked.strDrinkThumb} alt="eachCocktail" className="img-div" />
        </div>
        <div className="cocktail-info">
          <p className="cocktail-name">{clicked.strDrink}</p>
          <div className="mb-4">
            <FontAwesomeIcon icon={faTag} className="price-tag" />
            <p className="price">
              Ksh.
              {' '}
              {Math.floor(Math.random() * (3000 - 1000) + 1000)}
            </p>
          </div>
          <div>
            <button type="button" className="btn btn-danger btn-block">Add to cart</button>
            <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCocktail;
