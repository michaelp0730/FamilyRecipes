import React from 'react'
import LinksRow from './linksRow';
import FooterMain from './footerMain';
import AlphabetizeRecipes from '../helpers/alphabetizeRecipes';
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
