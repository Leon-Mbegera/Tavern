import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllCocktails = ({ cocktails }) => (
  <div className="container-fluid row wrapper">
    {cocktails.map((cocktail, idx) => (
      <>
        <div className="col-md-3">
          <div className="card bg-warning mb-3" style={{ width: '20rem' }}>
            <img className="card-img-top" src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
            <div className="card-body">
              <h6 className="card-title fw-bolder" key={cocktail.idDrink}>{cocktail.strDrink}</h6>
              <Link className="btn btn-danger btn-block" to={`/cocktail/${idx}`}>Cocktail</Link>
            </div>
          </div>
        </div>
      </>
    ))}
  </div>
);

AllCocktails.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCocktails;
