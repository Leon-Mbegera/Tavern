import axios from 'axios';

const GET_COCKTAILS_REQUEST = 'GET_COCKTAILS';
const GET_COCKTAILS_SUCCESS = 'GET_COCKTAILS_SUCCESS';
const GET_COCKTAILS_FAILURE = 'GET_COCKTAILS_FAILURE';
const GET_COCKTAIL = 'GET_COCKTAIL';

const getCocktailsRequest = () => ({
  type: GET_COCKTAILS_REQUEST,
});

const getCocktail = (cocktail) => ({
  type: GET_COCKTAIL,
  payload: cocktail,
});

const getCocktailsSuccess = (cocktails) => ({
  type: GET_COCKTAILS_SUCCESS,
  payload: cocktails,
});

const getCocktailsFailure = (error) => ({
  type: GET_COCKTAILS_FAILURE,
  payload: error,
});

const getCocktailsList = () => () => {
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  axios.get(endpoint).then((response) => {
    const cocktails = response;
    console.log(cocktails);
  });
};

export {
  GET_COCKTAILS_REQUEST, GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_FAILURE, GET_COCKTAIL, getCocktailsRequest, getCocktailsList, getCocktail,
  getCocktailsSuccess, getCocktailsFailure,
};
