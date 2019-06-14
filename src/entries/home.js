import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home'
// import Playlist from './src/components/playlist/playlist';
import data from '../api.json'

const home = document.getElementById("home-container");

// ReactDOM.render( Que voy a renderizar, donde voy a renderizarlo)
ReactDOM.render( 
    <Home data={data} /> , home
);