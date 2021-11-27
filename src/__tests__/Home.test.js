import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { cleanup, render } from '@testing-library/react';
import store from '../store';
import SearchBar from '../components/Search';

afterEach(cleanup);

describe('Home component renders both the Search bar and Allcocktails', () => {
  test('should render the search component', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchBar handleFilterChange={jest.fn()} />
        </Provider>
      </BrowserRouter>,
    );
    expect(
      asFragment(
        <Provider store={store}>
          <SearchBar handleFilterChange={jest.fn()} />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
