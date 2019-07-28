import React, { Component } from 'react'

const LinksRow = (props) => {
    console.log('aaa props: ', props);
    const { recipes } = props;
    const recipeType = props.title.toLowerCase();
    const recipesList = recipes.map(function (recipe) {
        return <li key={recipe.slug}>
                <a href={'/' + recipeType + '/' + recipe.slug + '/'}>{recipe.title}</a>
            </li>
    });
    return (
        <section className="container" aria-label={props.title}>
            <h2 className={'heading-label ' + recipeType}>{props.title}</h2>
            <ul className="link-list">
                { recipesList }
            </ul>
        </section>
    );
};

export default LinksRow;
