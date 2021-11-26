import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('test for the header component', () => {
  test('The header component is defined', () => {
    const navbar = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(navbar).toBeDefined();
  });

  test('The header component rendered matches the snapshot', () => {
    const navbar = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
