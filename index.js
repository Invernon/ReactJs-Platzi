import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './src/components/playlist/playlist';
import data from './src/api.json'

const app = document.getElementById("app");

// ReactDOM.render( Que voy a renderizar, donde voy a renderizarlo)
ReactDOM.render( 
    <Playlist data={data} /> , app 
);