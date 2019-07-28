import React from 'react'
import FooterMain from './footerMain';

const NotFound = () => {
    return (
        <div>
            <h1>Family <span>Recipes</span></h1>
            <h2>Recipe <span>Not Found</span></h2>
            <p>The recipe you're looking for could not be found.</p>
            <p><a href="/">Go home</a></p>
            <FooterMain />
        </div>
    );
};

export default NotFound;
