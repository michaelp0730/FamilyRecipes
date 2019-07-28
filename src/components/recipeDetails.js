import React from 'react'
import Breakfast from '../recipes/breakfast';
import Desserts from '../recipes/desserts';
import Entrees from '../recipes/entrees';
import Salads from '../recipes/salads';
import Sides from '../recipes/sides';
import Soups from '../recipes/soups';
import FooterMain from './footerMain';
import NotFound from './notFound';

const RecipeDetails = (props) => {
    console.log('RecipeDetails props: ', props);
    let requestPath = props.location.pathname;
    let currentRecipe;
    let returnView;

    // strip requestPath leading slash
    requestPath = requestPath.replace(/^\//, '');

    // strip requestPath trailing slash
    requestPath = requestPath.replace(/\/$/, '');

    let split = requestPath.split('/');
    let requestType = split[0];
    let requestSlug = split[1];

    function getRecipeFromCollection(collection, slug) {
        let i;
        for (i = 0; i < collection.length; i += 1) {
            if (collection[i].slug === slug) {
                return collection[i];
            }
        }
        return null;
    }

    switch (requestType) {
        case 'breakfast':
            currentRecipe = getRecipeFromCollection(Breakfast, requestSlug);
        break;
        case 'salads':
            currentRecipe = getRecipeFromCollection(Salads, requestSlug);
        break;
        case 'soups':
            currentRecipe = getRecipeFromCollection(Soups, requestSlug);
        break;
        case 'entrees':
            currentRecipe = getRecipeFromCollection(Entrees, requestSlug);
        break;
        case 'sides':
            currentRecipe = getRecipeFromCollection(Sides, requestSlug);
        break;
        case 'desserts':
            currentRecipe = getRecipeFromCollection(Desserts, requestSlug);
        break;
        default:
            currentRecipe = null;
        break;
    }
    console.log('currentRecipe: ', currentRecipe);

    if (currentRecipe === null) {
        returnView = <NotFound />
    } else {
        returnView = <div>
            <p><a href="/">Back home</a></p>
            <h1>{ currentRecipe.title }</h1>
            <p>{ currentRecipe.type }</p>
            <p>{ currentRecipe.about }</p>
            <ul className="ingredients">
                {currentRecipe.ingredients.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
            <p>{ currentRecipe.instructions }</p>
            <FooterMain />
        </div>
    }

    return ( returnView );
};

export default RecipeDetails;
