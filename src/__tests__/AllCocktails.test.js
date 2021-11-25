import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import 'regenerator-runtime';
import AllCocktails from '../containers/AllCocktails';

test('snapshot of the all cocktails page', () => {
  const cocktails = [{ idDrink: '15346' }];
  const Home = renderer.create(
    <BrowserRouter>
      <AllCocktails cocktails={cocktails} />
    </BrowserRouter>,
  ).toJSON();
  expect(Home).toMatchSnapshot();
});

test('Each cocktail card component is rendered', () => {
  const cocktails = [{ idDrink: '32144' }];
  const card = renderer.create(
    <BrowserRouter>
      <AllCocktails cocktails={cocktails} />
    </BrowserRouter>,
  ).toJSON();
  expect(card).toBeDefined();
});

test('classes assigned to the cocktail cards', async () => {
  const cocktails = [{ idDrink: '32144' }];
  const card = render(
    <BrowserRouter>
      <AllCocktails cocktails={cocktails} />
    </BrowserRouter>,
  );
  const cocktailCard = await card.findByTestId('cocktail-card');
  expect(cocktailCard.className).toContain('card bg-warning mb-3');
});
