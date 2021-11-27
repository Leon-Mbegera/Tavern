import axios from 'axios';

const GET_COCKTAILS_REQUEST = 'GET_COCKTAILS';
const GET_COCKTAILS_SUCCESS = 'GET_COCKTAILS_SUCCESS';
const GET_COCKTAILS_FAILURE = 'GET_COCKTAILS_FAILURE';
const GET_COCKTAIL = 'GET_COCKTAIL';

const getCocktailsRequest = () => ({
  type: GET_COCKTAILS_REQUEST,
});

const getCocktail = (title, image) => ({
  type: GET_COCKTAIL,
  title,
  image,
});

const getCocktailsSuccess = (cocktails) => ({
  type: GET_COCKTAILS_SUCCESS,
  payload: cocktails,
});

const getCocktailsFailure = (error) => ({
  type: GET_COCKTAILS_FAILURE,
  payload: error,
});

const getCocktailsList = () => (dispatch) => {
  dispatch(getCocktailsRequest());
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
  axios.get(endpoint).then((response) => {
    const cocktails = response.data.drinks;
    dispatch(getCocktailsSuccess(cocktails));
  }).catch((error) => {
    const errorMsg = error;
    dispatch(getCocktailsFailure(errorMsg));
  });
};

export {
  GET_COCKTAILS_REQUEST, GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_FAILURE, GET_COCKTAIL, getCocktailsRequest, getCocktailsList, getCocktail,
  getCocktailsSuccess, getCocktailsFailure,
};
