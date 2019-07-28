import React from 'react';
import './App.css';
import LinksRow from './components/linksRow';
import Breakfast from './recipes/breakfast';
import Desserts from './recipes/desserts';
import Entrees from './recipes/entrees';
import Salads from './recipes/salads';
import Sides from './recipes/sides';
import Soups from './recipes/soups';

function App() {
  let date = new Date();
  return (
    <div className="App">
      <h1>Family <span>Recipes</span></h1>
      <LinksRow title="Breakfast" recipes={ Breakfast } />
      <LinksRow title="Salads" recipes={ Salads } />
      <LinksRow title="Soups" recipes={ Soups } />
      <LinksRow title="Entrees" recipes={ Entrees } />
      <LinksRow title="Sides" recipes={ Sides } />
      <LinksRow title="Desserts" recipes={ Desserts } />
      <footer className="footer-main">
        {'Copyright 2011 - ' + date.getFullYear() + ' PellegriniPage.com | All Rights Reserved'}
      </footer>
    </div>
  );
}

export default App;
