import React from 'react';
import './Search.css'

// function Search(props){
//     return (

//     )
// }

const Search = (props) => (
    <form className="Search" onSubmit={ props.handleSubmit }>
        <input
            ref = {props.setRef}
            placeholder="Busca tu video favorito"
            className="Search-input"
            onChange={props.handleChange}
            value={props.value}
            type="text"/>
    </form>
)

export default Search;