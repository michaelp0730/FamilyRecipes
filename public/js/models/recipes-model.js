$.namespace('app');

app.Recipe = Backbone.Model.extend({
    defaults: {
        id: '',
        title: 'No title',
        type: '',
        about: '',
        ingredients: [],
        instruction: '',
        keywords: [],
        img: ''
    }
});