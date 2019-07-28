import React from 'react';
import './App.css';
import LinksRow from './components/linksRow';
import AlphabetizeRecipes from './helpers/alphabetizeRecipes';
import Breakfast from './recipes/breakfast';
import Desserts from './recipes/desserts';
import Entrees from './recipes/entrees';
import Salads from './recipes/salads';
import Sides from './recipes/sides';
import Soups from './recipes/soups';

function App() {
  let date = new Date();
  const sortedBreakfast = AlphabetizeRecipes(Breakfast);
  const sortedSalads = AlphabetizeRecipes(Salads);
  const sortedSoups = AlphabetizeRecipes(Soups);
  const sortedEntrees = AlphabetizeRecipes(Entrees);
  const sortedSides = AlphabetizeRecipes(Sides);
  const sortedDesserts = AlphabetizeRecipes(Desserts);

  return (
    <div className="App">
      <h1>Family <span>Recipes</span></h1>
      <LinksRow title="Breakfast" recipes={ sortedBreakfast } />
      <LinksRow title="Salads" recipes={ sortedSalads } />
      <LinksRow title="Soups" recipes={ sortedSoups } />
      <LinksRow title="Entrees" recipes={ sortedEntrees } />
      <LinksRow title="Sides" recipes={ sortedSides } />
      <LinksRow title="Desserts" recipes={ sortedDesserts } />
      <footer className="footer-main">
        {'Copyright 2011 - ' + date.getFullYear() + ' PellegriniPage.com | All Rights Reserved'}
      </footer>
    </div>
  );
}

export default App;
