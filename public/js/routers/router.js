var app = app || {};

app.RecipesRouter = Backbone.Router.extend({
    routes: {
        "breakfast": "showBreakfasts",
        "salads": "showSalads",
        "soups": "showSoups",
        "entrees": "showEntrees",
        "sides": "showSides",
        "desserts": "showDesserts",
        "breakfast/:id": "showBreakfastRecipe",
        "salads/:id": "showSaladRecipe",
        "soups/:id": "showSoupRecipe",
        "entrees/:id": "showEntreeRecipe",
        "sides/:id": "showSideRecipe",
        "desserts/:id": "showDessertRecipe",
        "search/:query": "showSearchResults",
        "": "showHome"
    },

    initialize: function() {
        Backbone.history.start();
    },

    showHome: function() {
        showHome();
    },

    showBreakfasts: function() {
        showBreakfast();
    },

    showSalads: function() {
        showSalads();
    },

    showSoups: function() {
        showSoups();
    },

    showEntrees: function() {
        showEntrees();
    },

    showSides: function() {
        showSides();
    },

    showDesserts: function() {
        showDesserts();
    },

    showBreakfastRecipe: function(id) {
        breakfastRecipes.fetch({
            success: function() {
                this.model = breakfastRecipes.get(id);
                $('#main-header-section').html( new app.RecipeHeaderView({model: this.model}).render().el );
                $('#main-header-section h1 span').addClass('headline-light');
                $('#main-content').html( new app.RecipeMainContentView({model: this.model}).render().el );
                $(window).scrollTop(0);
            }
        });
    },

    showSaladRecipe: function(id) {
        saladRecipes.fetch({
            success: function() {
                this.model = saladRecipes.get(id);
                $('#main-header-section').html( new app.RecipeHeaderView({model: this.model}).render().el );
                $('#main-header-section h1 span').addClass('headline-light');
                $('#main-content').html( new app.RecipeMainContentView({model: this.model}).render().el );
                $(window).scrollTop(0);
            }
        });
    },

    showSoupRecipe: function(id) {
        soupRecipes.fetch({
            success: function() {
                this.model = soupRecipes.get(id);
                $('#main-header-section').html( new app.RecipeHeaderView({model: this.model}).render().el );
                $('#main-header-section h1 span').addClass('headline-light');
                $('#main-content').html( new app.RecipeMainContentView({model: this.model}).render().el );
                $(window).scrollTop(0);
            }
        });
    },

    showEntreeRecipe: function(id) {
        entreeRecipes.fetch({
            success: function() {
                this.model = entreeRecipes.get(id);
                $('#main-header-section').html( new app.RecipeHeaderView({model: this.model}).render().el );
                $('#main-header-section h1 span').addClass('headline-light');
                $('#main-content').html( new app.RecipeMainContentView({model: this.model}).render().el );
                $(window).scrollTop(0);
            }
        });
    },

    showSideRecipe: function(id) {
        sidesRecipes.fetch({
            success: function() {
                this.model = sidesRecipes.get(id);
                $('#main-header-section').html( new app.RecipeHeaderView({model: this.model}).render().el );
                $('#main-header-section h1 span').addClass('headline-light');
                $('#main-content').html( new app.RecipeMainContentView({model: this.model}).render().el );
                $(window).scrollTop(0);
            }
        });
    },

    showDessertRecipe: function(id) {
        dessertRecipes.fetch({
            success: function() {
                this.model = dessertRecipes.get(id);
                $('#main-header-section').html( new app.RecipeHeaderView({model: this.model}).render().el );
                $('#main-header-section h1 span').addClass('headline-light');
                $('#main-content').html( new app.RecipeMainContentView({model: this.model}).render().el );
                $(window).scrollTop(0);
            }
        });
    },

    showSearchResults: function(searchTerm) {
        var breakfastSearchColllection,
            saladsSearchColllection,
            soupsSearchColllection,
            entreesSearchColllection,
            sidesSearchColllection,
            dessertsSearchColllection,
            headerView = new app.HomeHeaderView({el: '#main-header-section'}),
            recipesView = new app.HomeRecipesView({el: '#main-content'}),
            searchResultsView = new app.SearchResultsView({el: '#search-results'});
            

        breakfastRecipes.fetch({
            success: function() {
                this.collection = breakfastRecipes.search(searchTerm);
                breakfastSearchColllection = this.collection;
                var col = JSON.stringify(breakfastSearchColllection);
                if (col === '[]') {
                    $('#breakfast-container').hide();
                } else {
                        var breakfastView = new app.ShowBreakfastsView({
                            collection: breakfastSearchColllection,
                            el: '#breakfast-container'
                        });
                }
            }
        });
        saladRecipes.fetch({
            success: function() {
                this.collection = saladRecipes.search(searchTerm);
                saladsSearchColllection = this.collection;
                var col = JSON.stringify(saladsSearchColllection);
                if (col === '[]') {
                    $('#salads-container').hide();
                } else {
                    var saladsView = new app.ShowSaladsView({
                            collection: saladsSearchColllection,
                            el: '#salads-container'
                        });
                }
            }
        });
        soupRecipes.fetch({
            success: function() {
                this.collection = soupRecipes.search(searchTerm);
                soupsSearchColllection = this.collection;
                var col = JSON.stringify(soupsSearchColllection);
                if (col === '[]') {
                    $('#soups-container').hide();
                } else {
                    var soupsView = new app.ShowSoupsView({
                            collection: soupsSearchColllection,
                            el: '#soups-container'
                        });
                }
            }
        });
        entreeRecipes.fetch({
            success: function() {
                this.collection = entreeRecipes.search(searchTerm);
                entreesSearchColllection = this.collection;
                var col = JSON.stringify(entreesSearchColllection);
                if (col === '[]') {
                    $('#entrees-container').hide();
                } else {
                    var soupsView = new app.ShowEntreesView({
                            collection: entreesSearchColllection,
                            el: '#entrees-container'
                        });
                }
            }
        });
        sidesRecipes.fetch({
            success: function() {
                this.collection = sidesRecipes.search(searchTerm);
                sidesSearchColllection = this.collection;
                var col = JSON.stringify(sidesSearchColllection);
                if (col === '[]') {
                    $('#sides-container').hide();
                } else {
                    var soupsView = new app.ShowSidesView({
                            collection: sidesSearchColllection,
                            el: '#sides-container'
                        });
                }
            }
        });
        dessertRecipes.fetch({
            success: function() {
                this.collection = dessertRecipes.search(searchTerm);
                dessertsSearchColllection = this.collection;
                var col = JSON.stringify(dessertsSearchColllection);
                if (col === '[]') {
                    $('#desserts-container').hide();
                } else {
                    var soupsView = new app.ShowDessertsView({
                            collection: dessertsSearchColllection,
                            el: '#desserts-container'
                        });
                }
            }
        });
    }
});