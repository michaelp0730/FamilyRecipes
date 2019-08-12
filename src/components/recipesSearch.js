import React from 'react'

class RecipesSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const searchVal = event.target.value;
        this.setState({ value: searchVal });
        this.handleSubmit(searchVal);
    }

    handleSubmit(txt) {
        console.log(this.props);
        this.state = Object.assign({}, {
            searchText: txt,
        });
        console.log(this.state);
    }

    render() {
        return (
            <form name="recipes-search-form" className="recipes-search-form">
                <label>
                    <strong>Search recipes:</strong>
                    <input type="text" id="recipes-search" name="recipes-search" className="recipes-search" value={ this.state.value } onChange={ this.handleChange } />
                </label>
            </form>
        );
    }
};

export default RecipesSearch;
