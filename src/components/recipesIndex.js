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

        this.searchBreakfast = [];
        this.searchSalads = [];
        this.searchSoups = [];
        this.searchEntrees = [];
        this.searchSides = [];
        this.searchDesserts = [];
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
            this.searchBreakfast = this.sortedBreakfast.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.searchSalads = this.sortedSalads.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.searchSoups = this.sortedSoups.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.searchEntrees = this.sortedEntrees.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.searchSides = this.sortedSides.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });

            this.searchDesserts = this.sortedDesserts.filter(recipe => {
                return recipe.slug.indexOf(txt) !== -1;
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Family <span>Recipes</span></h1>
                <p>This is a collection of recipes from our family and friends, as well as restaurants we've worked in, tv shows we've appeared on, etc. Lots of special stuff in here. Please enjoy and eat well!</p>

                <form name="recipes-search-form" className="recipes-search-form">
                    <label>
                        <strong>Search recipes:</strong>
                        <input type="text" id="recipes-search" name="recipes-search" className="recipes-search" value={ this.state.value } onChange={ this.handleChange } />
                    </label>
                </form>

                <LinksRow title="Breakfast" recipes={ this.showSearch ? this.searchBreakfast : this.sortedBreakfast } />
                <LinksRow title="Salads" recipes={ this.showSearch ? this.searchSalads : this.sortedSalads } />
                <LinksRow title="Soups" recipes={ this.showSearch ? this.searchSoups : this.sortedSoups } />
                <LinksRow title="Entrees" recipes={ this.showSearch ? this.searchEntrees : this.sortedEntrees } />
                <LinksRow title="Sides" recipes={ this.showSearch ? this.searchSides : this.sortedSides } />
                <LinksRow title="Desserts" recipes={ this.showSearch ? this.searchDesserts : this.sortedDesserts } />
                <FooterMain />
            </div>
        );
    }
};

export default RecipesIndex;
