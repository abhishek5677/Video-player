import './SearchBar.css';
import React from "react";

class SearchBar extends React.Component {
    state = { term: 'react js' };

    onInputChnage = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }

        render(){
        return (
            <div className="search-bar ui segment search-color" >
                <form onSubmit={this.onFormSubmit} className="ui form " >
                    <div className="field search-color">
                        <label className='search-color'> <i class='large play icon'></i>    Video Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.onInputChnage}
                            className='type-color'
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;