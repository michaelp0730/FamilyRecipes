import React from 'react'
import LinksRow from './linksRow';
import FooterMain from './footerMain';
import AlphabetizeRecipes from '../helpers/alphabetizeRecipes';
import RecipesSearch from './recipesSearch';
import Breakfast from '../recipes/breakfast';
import Desserts from '../recipes/desserts';
import Entrees from '../recipes/entrees';
import Salads from '../recipes/salads';
import Sides from '../recipes/sides';
import Soups from '../recipes/soups';

const RecipesIndex = () => {
    const sortedBreakfast = AlphabetizeRecipes(Breakfast);
    const sortedSalads = AlphabetizeRecipes(Salads);
    const sortedSoups = AlphabetizeRecipes(Soups);
    const sortedEntrees = AlphabetizeRecipes(Entrees);
    const sortedSides = AlphabetizeRecipes(Sides);
    const sortedDesserts = AlphabetizeRecipes(Desserts);

    return (
        <div>
            <h1>Family <span>Recipes</span></h1>
            <p>This is a collection of recipes from our family and friends, as well as restaurants we've worked in, tv shows we've appeared on, etc. Lots of special stuff in here. Please enjoy and eat well!</p>
            <RecipesSearch />
            <LinksRow title="Breakfast" recipes={ sortedBreakfast } />
            <LinksRow title="Salads" recipes={ sortedSalads } />
            <LinksRow title="Soups" recipes={ sortedSoups } />
            <LinksRow title="Entrees" recipes={ sortedEntrees } />
            <LinksRow title="Sides" recipes={ sortedSides } />
            <LinksRow title="Desserts" recipes={ sortedDesserts } />
            <FooterMain />
        </div>
    );
};

export default RecipesIndex;
