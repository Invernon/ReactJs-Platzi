import React from 'react';
import FullscreenIcon from '../../components/icons/full-screen';
import './fullscreen.css';

const Fullscreen = (props) => (
    <div 
        className="Fullscreen"
        onClick={props.handleFullScreenClick}
    >
        <FullscreenIcon 
            size={25}
            color="white" />
    </div>
)

export default Fullscreen