import React , { Component } from 'react';
import Search from '../components/search'

class SearchContainer extends Component{

    state = {
        value: "Despacito"
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log("Submit" , this.input.value )
    }

    handleInputChange = event =>{
        this.setState({
            value: this.input.value
        })
    }

    setInputRef = element => { 
        this.input = element;
    }

    render() {
        return( 
            <Search 
                setRef={this.setInputRef} 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value} />
        )
    }
}

export default SearchContainer;