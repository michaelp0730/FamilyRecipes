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

class RecipesIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.sortedBreakfast = AlphabetizeRecipes(Breakfast);
        this.sortedSalads = AlphabetizeRecipes(Salads);
        this.sortedSoups = AlphabetizeRecipes(Soups);
        this.sortedEntrees = AlphabetizeRecipes(Entrees);
        this.sortedSides = AlphabetizeRecipes(Sides);
        this.sortedDesserts = AlphabetizeRecipes(Desserts);

        this.breakfast = this.sortedBreakfast;
        this.salads = this.sortedSalads;
        this.soups = this.sortedSoups;
        this.entrees = this.sortedEntrees;
        this.sides = this.sortedSides;
        this.desserts = this.sortedDesserts;
        this.showSearch = false;
    }

    handleChange(event) {
        const searchVal = event.target.value;
        this.showSearch = true;
        this.setState({ value: searchVal });
        this.handleSubmit(searchVal);
    }

    handleSubmit(txt) {
        this.state = Object.assign({}, {
            searchText: txt,
            showSearch: txt !== '',
        });

        if (this.state.showSearch) {
            this.breakfast = this.sortedBreakfast.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.salads = this.sortedSalads.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.soups = this.sortedSoups.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.entrees = this.sortedEntrees.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.sides = this.sortedSides.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.desserts = this.sortedDesserts.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });
        } else {
            this.breakfast = this.sortedBreakfast;
            this.salads = this.sortedSalads;
            this.soups = this.sortedSoups;
            this.entrees = this.sortedEntrees;
            this.sides = this.sortedSides;
            this.desserts = this.sortedDesserts;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="group">
                    <h1>Family <span>Recipes</span></h1>
                    <form name="recipes-search-form" className="recipes-search-form">
                        <label>
                            <strong>Search recipes:</strong>
                            <input type="text" id="recipes-search" name="recipes-search" className="recipes-search" value={ this.state.value } onChange={ this.handleChange } />
                        </label>
                    </form>
                </div>
                <p className="intro">This is a collection of recipes from our family and friends, as well as restaurants we've worked in, tv shows we've appeared on, etc. Lots of special stuff in here. Please enjoy and eat well!</p>

                <LinksRow title="Breakfast" recipes={ this.breakfast } />
                <LinksRow title="Salads" recipes={ this.salads } />
                <LinksRow title="Soups" recipes={ this.soups } />
                <LinksRow title="Entrees" recipes={ this.entrees } />
                <LinksRow title="Sides" recipes={ this.sides } />
                <LinksRow title="Desserts" recipes={ this.desserts } />
                <FooterMain />
            </div>
        );
    }
};

export default RecipesIndex;
