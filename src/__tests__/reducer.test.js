import allReducer from '../reducers/allReducer';
import {
  GET_COCKTAILS_REQUEST, GET_COCKTAILS_SUCCESS,
} from '../actions/index';

const initialState = {
  cocktails: [],
  error: '',
};

describe('All Cocktails Reducer', () => {
  test('should return the initial state', () => {
    expect(allReducer(undefined, {})).toEqual({
      cocktails: [],
      error: '',
    });
  });

  it('returned initial state should match snapshot', () => {
    expect(allReducer(undefined, {})).toMatchSnapshot({
      cocktails: [],
      error: '',
    });
  });

  test('should handle GET_COCKTAILS_REQUEST', () => {
    expect(allReducer(initialState, GET_COCKTAILS_REQUEST)).toEqual({
      ...initialState,
      error: '',
    });
  });

  test('should handle GET_COCKTAIL_SUCCESS', () => {
    const response = {
      cocktails: [
        { strDrink: '155 Belmont' },
      ],
    };

    const successAction = {
      type: GET_COCKTAILS_SUCCESS,
      payload: response.cocktails,
    };

    expect(allReducer(initialState, successAction)).toEqual({
      ...initialState,
      cocktails: successAction.payload,
    });
  });

  test('should handle GET_COCKTAILS_FAILURE', () => {
    const response = {
      error: "404 Error couldn't fetch",
    };

    const failureAction = {
      type: GET_COCKTAILS_SUCCESS,
      payload: response.error,
    };

    expect(allReducer(initialState, failureAction)).toEqual({
      ...initialState,
      cocktails: failureAction.payload,
    });
  });
});
