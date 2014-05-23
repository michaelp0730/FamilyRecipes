var app = app || {},
    searchQuery = '',
    recipesRouter = new app.RecipesRouter();




(function() {
    'use strict';
    
    var theDate = new Date(),
        theYear = theDate.getFullYear();
    $('#copyright-date').html( (theYear === 2013 ? '2013' : '2013 - ' + theYear) );
    
    $('.search').focus(function(){
        $('.search').val('');
    });

    $('.search').keypress(function(e) {
        if (e.which === 13) {
            searchQuery = $('.search').val();
            $('.search').val('Search').blur();
            recipesRouter.navigate('search/' + searchQuery.toLowerCase(), true);
        }
    });
}());