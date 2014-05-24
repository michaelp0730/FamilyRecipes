$.namespace('app');

app.HomeHeaderView = Backbone.View.extend({
    template: _.template( $('#home-header-template').html() ),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template);
    },
    events: {
        'click li.home': 'showHome',
        'click li.breakfast': 'showBreakfast',
        'click li.salad': 'showSalads',
        'click li.soup': 'showSoups',
        'click li.entree': 'showEntrees',
        'click li.side': 'showSides',
        'click li.dessert': 'showDesserts'
    },
    showHome: function() {
        recipesRouter.navigate('', true);
    },
    showBreakfast: function() {
        recipesRouter.navigate('breakfast', true);
    },
    showSalads: function() {
        recipesRouter.navigate('salads', true);
    },
    showSoups: function() {
        recipesRouter.navigate('soups', true);
    },
    showEntrees: function() {
        recipesRouter.navigate('entrees', true);
    },
    showSides: function() {
        recipesRouter.navigate('sides', true);
    },
    showDesserts: function() {
        recipesRouter.navigate('desserts', true);
    }
});

app.HomeRecipesView = Backbone.View.extend({
    template: _.template( $('#home-recipes-template').html() ),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template);
        $('#main-content').addClass('lt-grey');
    }
});

app.ShowBreakfastsView = Backbone.View.extend({
    template: _.template( $('#home-meal-type-template').html() ),
    initialize: function() {
        this.$el = $(this.el);
        this.listen();
        this.render();
    },
    render: function() {
        this.$el.html( this.template( {
            collection: this.collection,
            type: 'breakfast',
            title: 'Breakfast',
            id: 'breakfast-list-home'
        } ));
    },
    listen: function() {
        var view = this;
        this.collection.bind('add', function() {
            view.render();
        }).bind('remove', function() {
            view.render();
        });
    },
    events: {
        'click li': 'clickHandler'
    },
    clickHandler: function(e) {
        e.preventDefault();
        var element = $(e.currentTarget),
            id = element.attr('id');
        recipesRouter.navigate('breakfast/' + id, true);
    }
});

app.ShowSaladsView = Backbone.View.extend({
    template: _.template( $('#home-meal-type-template').html() ),
    initialize: function() {
        this.$el = $(this.el);
        this.listen();
        this.render();
    },
    render: function() {
        this.$el.html( this.template( {
            collection: this.collection,
            type: 'salad',
            title: 'Salads',
            id: 'salads-list-home'
        } ));
    },
    listen: function() {
        var view = this;
        this.collection.bind('add', function() {
            view.render();
        }).bind('remove', function() {
            view.render();
        });
    },
    events: {
        'click li': 'clickHandler'
    },
    clickHandler: function(e) {
        e.preventDefault();
        var element = $(e.currentTarget),
            id = element.attr('id');
        recipesRouter.navigate('salads/' + id, true);
    }
});

app.ShowSoupsView = Backbone.View.extend({
    template: _.template( $('#home-meal-type-template').html() ),
    initialize: function() {
        this.$el = $(this.el);
        this.listen();
        this.render();
    },
    render: function() {
        this.$el.html( this.template( {
            collection: this.collection,
            type: 'soup',
            title: 'Soups',
            id: 'soups-list-home'
        } ));
    },
    listen: function() {
        var view = this;
        this.collection.bind('add', function() {
            view.render();
        }).bind('remove', function() {
            view.render();
        });
    },
    events: {
        'click li': 'clickHandler'
    },
    clickHandler: function(e) {
        e.preventDefault();
        var element = $(e.currentTarget),
            id = element.attr('id');
        recipesRouter.navigate('soups/' + id, true);
    }
});

app.ShowEntreesView = Backbone.View.extend({
    template: _.template( $('#home-meal-type-template').html() ),
    initialize: function() {
        this.$el = $(this.el);
        this.listen();
        this.render();
    },
    render: function() {
        this.$el.html( this.template( {
            collection: this.collection,
            type: 'entree',
            title: 'Entrees',
            id: 'entrees-list-home'
        } ));
    },
    listen: function() {
        var view = this;
        this.collection.bind('add', function() {
            view.render();
        }).bind('remove', function() {
            view.render();
        });
    },
    events: {
        'click li': 'clickHandler'
    },
    clickHandler: function(e) {
        e.preventDefault();
        var element = $(e.currentTarget),
            id = element.attr('id');
        recipesRouter.navigate('entrees/' + id, true);
    }
});

app.ShowSidesView = Backbone.View.extend({
    template: _.template( $('#home-meal-type-template').html() ),
    initialize: function() {
        this.$el = $(this.el);
        this.listen();
        this.render();
    },
    render: function() {
        this.$el.html( this.template( {
            collection: this.collection,
            type: 'side',
            title: 'Sides',
            id: 'sides-list-home'
        } ));
    },
    listen: function() {
        var view = this;
        this.collection.bind('add', function() {
            view.render();
        }).bind('remove', function() {
            view.render();
        });
    },
    events: {
        'click li': 'clickHandler'
    },
    clickHandler: function(e) {
        e.preventDefault();
        var element = $(e.currentTarget),
            id = element.attr('id');
        recipesRouter.navigate('sides/' + id, true);
    }
});

app.ShowDessertsView = Backbone.View.extend({
    template: _.template( $('#home-meal-type-template').html() ),
    initialize: function() {
        this.$el = $(this.el);
        this.listen();
        this.render();
    },
    render: function() {
        this.$el.html( this.template( {
            collection: this.collection,
            type: 'dessert',
            title: 'Desserts',
            id: 'desserts-list-home'
        } ));
    },
    listen: function() {
        var view = this;
        this.collection.bind('add', function() {
            view.render();
        }).bind('remove', function() {
            view.render();
        });
    },
    events: {
        'click li': 'clickHandler'
    },
    clickHandler: function(e) {
        e.preventDefault();
        var element = $(e.currentTarget),
            id = element.attr('id');
        recipesRouter.navigate('desserts/' + id, true);
    }
});

app.RecipeHeaderView = Backbone.View.extend({
    template: _.template( $('#recipe-header-template').html() ),
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    }
});


app.RecipeMainContentView = Backbone.View.extend({
    template: _.template( $('#recipe-main-content-template').html() ),
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        $('#main-content').removeClass('lt-grey');
        return this;
    },
    events: {
        'click li.home': 'showHome',
        'click li.breakfast': 'showBreakfast',
        'click li.salad': 'showSalads',
        'click li.soup': 'showSoups',
        'click li.entree': 'showEntrees',
        'click li.side': 'showSides',
        'click li.dessert': 'showDesserts'
    },
    showHome: function() {
        recipesRouter.navigate('', true);
    },
    showBreakfast: function() {
        recipesRouter.navigate('breakfast', true);
    },
    showSalads: function() {
        recipesRouter.navigate('salads', true);
    },
    showSoups: function() {
        recipesRouter.navigate('soups', true);
    },
    showEntrees: function() {
        recipesRouter.navigate('entrees', true);
    },
    showSides: function() {
        recipesRouter.navigate('sides', true);
    },
    showDesserts: function() {
        recipesRouter.navigate('desserts', true);
    }
});

app.SearchResultsView = Backbone.View.extend({
    template: _.template( $('#search-results-template').html() ),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template);
    }
});