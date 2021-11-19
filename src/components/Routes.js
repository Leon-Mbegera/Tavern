import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import EachCocktail from '../containers/EachCocktail';

const Routing = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/cocktail/:idx" element={<EachCocktail />} />
    </Routes>
  </BrowserRouter>
);

export default Routing;
