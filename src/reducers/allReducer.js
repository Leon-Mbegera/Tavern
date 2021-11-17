import {
  GET_COCKTAILS_REQUEST, GET_COCKTAILS_SUCCESS,
  GET_COCKTAILS_FAILURE,
} from '../actions/index';

const initialState = {
  cocktails: [],
  error: '',
};

const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS_REQUEST:
      return {
        ...state,
        error: '',
      };
    case GET_COCKTAILS_SUCCESS:
      return {
        ...state,
        cocktails: action.payload,
      };
    case GET_COCKTAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default allReducer;
