var app = app || {},
    // Instantiate collections
    breakfastRecipes = new app.Breakfasts(),
    saladRecipes = new app.Salads(),
    soupRecipes = new app.Soups(),
    entreeRecipes = new app.Entrees(),
    sidesRecipes = new app.Sides(),
    dessertRecipes = new app.Desserts();

// Fetch data for each collection
breakfastRecipes.fetch();
saladRecipes.fetch();
soupRecipes.fetch();
entreeRecipes.fetch();
sidesRecipes.fetch();
dessertRecipes.fetch();


function showHome() {
    var headerView = new app.HomeHeaderView({el: '#main-header-section'}),

        recipesView = new app.HomeRecipesView({el: '#main-content'}),

        breakfastView = new app.ShowBreakfastsView({
            collection: breakfastRecipes,
            el: '#breakfast-container'
        }),

        saladsView = new app.ShowSaladsView({
            collection: saladRecipes,
            el: '#salads-container'
        }),

        soupsView = new app.ShowSoupsView({
            collection: soupRecipes,
            el: '#soups-container'
        }),

        entreesView = new app.ShowEntreesView({
            collection: entreeRecipes,
            el: '#entrees-container'
        }),

        sidesView = new app.ShowSidesView({
            collection: sidesRecipes,
            el: '#sides-container'
        }),

        dessertsView = new app.ShowDessertsView({
            collection: dessertRecipes,
            el: '#desserts-container'
        });
}

function showBreakfast() {
    var headerView = new app.HomeHeaderView({el: '#main-header-section'}),
        recipesView = new app.HomeRecipesView({el: '#main-content'}),
        breakfastView = new app.ShowBreakfastsView({
            collection: breakfastRecipes,
            el: '#breakfast-container'
        });
}

function showSalads() {
    var headerView = new app.HomeHeaderView({el: '#main-header-section'}),
        recipesView = new app.HomeRecipesView({el: '#main-content'}),
        saladsView = new app.ShowSaladsView({
            collection: saladRecipes,
            el: '#salads-container'
        });
}

function showSoups() {
    var headerView = new app.HomeHeaderView({el: '#main-header-section'}),
        recipesView = new app.HomeRecipesView({el: '#main-content'}),
        soupsView = new app.ShowSoupsView({
            collection: soupRecipes,
            el: '#soups-container'
        });
}

function showEntrees() {
    var headerView = new app.HomeHeaderView({el: '#main-header-section'}),
        recipesView = new app.HomeRecipesView({el: '#main-content'}),
        entreesView = new app.ShowEntreesView({
            collection: entreeRecipes,
            el: '#entrees-container'
        });
}

function showSides() {
    var headerView = new app.HomeHeaderView({el: '#main-header-section'}),
        recipesView = new app.HomeRecipesView({el: '#main-content'}),
        sidesView = new app.ShowSidesView({
            collection: sidesRecipes,
            el: '#sides-container'
        });
}

function showDesserts() {
    var headerView = new app.HomeHeaderView({el: '#main-header-section'}),
        recipesView = new app.HomeRecipesView({el: '#main-content'}),
        dessertsView = new app.ShowDessertsView({
            collection: dessertRecipes,
            el: '#desserts-container'
        });
}








/*
Garth's code
;(function($) {
    $.namespace('App.controllers');
    var app = app || {};
    var breakfastRecipes = new app.Breakfasts();
    var breakfastView = new app.BreakfastHomeView({
        model: breakfastRecipes,
        el: '#breakfast-list-home'
    });

    App.controllers.Main = function() {
        breakfastRecipes.fetch({
            success: function() {
                // Hide Loader
                breakfastView.render();
            }
        });
    };

    // Handle route
    router.route('*', App.controllers.Main);
}(jQuery));
*/