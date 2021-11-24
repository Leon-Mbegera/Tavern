import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { applyMiddleware } from 'redux';
import mockAxios from '../__mocks__/axios';
import { getCocktailsList } from '../actions/index';

const mockStore = configureMockStore(thunk, applyMiddleware());

describe('Get cocktails List', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cocktails: {},
    });
  });

  it('dispatches GET_COCKTAILS_SUCCESS after successful api fetch request', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        drinks: [
          { idDrink: '15346', strDrink: '155 Belmont' },
        ],
      },
    }));
    getCocktailsList()(store.dispatch);
  });
});
