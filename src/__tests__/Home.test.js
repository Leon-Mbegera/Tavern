import React from 'react';
import { BrowserRouter, MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { cleanup, render, screen } from '@testing-library/react';
import store from '../store';
import SearchBar from '../components/Search';

afterEach(cleanup);

describe('Home component', () => {
  test('should render the search component', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </BrowserRouter>,
    );
    expect(
      asFragment(
        <Provider store={store}>
          <SearchBar />
        </Provider>,
      ),
    ).toMatchSnapshot();
  });
});
