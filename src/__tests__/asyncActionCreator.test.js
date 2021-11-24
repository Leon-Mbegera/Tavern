import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { applyMiddleware } from 'redux';
import mockAxios from '../__mocks__/axios';
import * as actions from '../actions/index';

const mockStore = configureMockStore(thunk, applyMiddleware());

describe('Get cocktails List', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cocktails: {},
    });
  });

  test('getCocktailsList async function dispatches after successful api fetch request', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        drinks: [
          { idDrink: '15346', strDrink: '155 Belmont' },
        ],
      },
    }));
    actions.getCocktailsList()(store.dispatch);
  });

  test('getCocktailsFailure dispatches after unsuccessful fetch request', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ Error: 'Network error' }));
    actions.getCocktailsList()(store.dispatch);
  });
});
