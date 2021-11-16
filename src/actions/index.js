const GET_COCKTAILS = 'GET_COCKTAILS';
const GET_COCKTAILS_SUCCESS = 'GET_COCKTAILS_SUCCESS';
const GET_COCKTAILS_FAILURE = 'GET_COCKTAILS_FAILURE';

const getCocktails = () => ({
  type: GET_COCKTAILS,
});

const getCocktailsSuccess = (cocktail) => ({
  type: GET_COCKTAILS_SUCCESS,
  payload: cocktail,
});

const getCocktailsFailure = (error) => ({
  type: GET_COCKTAILS_FAILURE,
  payload: error,
});

export {
  GET_COCKTAILS, GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_FAILURE, getCocktails, getCocktailsSuccess, getCocktailsFailure,
};
