
var app = app || {};

app.Breakfasts = Backbone.Collection.extend({
    model: app.Recipe,
    url: 'json/breakfast.json',
    comparator: function( collection ) {
        return( collection.get( 'title' ) );
    },
    search: function(searchTerm) {
        var resultsCollection = new app.Breakfasts();
        _.each(this.models, function(item) {
            _.each(item.get('keywords'), function(keyword) {
                if (searchTerm === keyword) {
                    resultsCollection.add(item);
                }
            });
        });
        return resultsCollection;
    }
});

app.Salads = Backbone.Collection.extend({
    model: app.Recipe,
    url: 'json/salads.json',
    comparator: function( collection ) {
        return( collection.get( 'title' ) );
    },
    search: function(searchTerm) {
        var resultsCollection = new app.Salads();
        _.each(this.models, function(item) {
            _.each(item.get('keywords'), function(keyword) {
                if (searchTerm === keyword) {
                    resultsCollection.add(item);
                }
            });
        });
        return resultsCollection;
    }
});

app.Soups = Backbone.Collection.extend({
	model: app.Recipe,
	url: 'json/soups.json',
    comparator: function( collection ) {
        return( collection.get( 'title' ) );
    },
    search: function(searchTerm) {
        var resultsCollection = new app.Soups();
        _.each(this.models, function(item) {
            _.each(item.get('keywords'), function(keyword) {
                if (searchTerm === keyword) {
                    resultsCollection.add(item);
                }
            });
        });
        return resultsCollection;
    }
});

app.Entrees = Backbone.Collection.extend({
	model: app.Recipe,
	url: 'json/entrees.json',
    comparator: function( collection ) {
        return( collection.get( 'title' ) );
    },
    search: function(searchTerm) {
        var resultsCollection = new app.Entrees();
        _.each(this.models, function(item) {
            _.each(item.get('keywords'), function(keyword) {
                if (searchTerm === keyword) {
                    resultsCollection.add(item);
                }
            });
        });
        return resultsCollection;
    }
});

app.Sides = Backbone.Collection.extend({
    model: app.Recipe,
    url: 'json/sides.json',
    comparator: function( collection ) {
        return( collection.get( 'title' ) );
    },
    search: function(searchTerm) {
        var resultsCollection = new app.Sides();
        _.each(this.models, function(item) {
            _.each(item.get('keywords'), function(keyword) {
                if (searchTerm === keyword) {
                    resultsCollection.add(item);
                }
            });
        });
        return resultsCollection;
    }
});

app.Desserts = Backbone.Collection.extend({
    model: app.Recipe,
    url: 'json/desserts.json',
    comparator: function( collection ) {
        return( collection.get( 'title' ) );
    },
    search: function(searchTerm) {
        var resultsCollection = new app.Desserts();
        _.each(this.models, function(item) {
            _.each(item.get('keywords'), function(keyword) {
                if (searchTerm === keyword) {
                    resultsCollection.add(item);
                }
            });
        });
        return resultsCollection;
    }
});