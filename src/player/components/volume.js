import React from 'react';
import VolumeIcon from '../../components/icons/volume';
import VolumeUpIcon from '../../components/icons/volume-up';
import './volume.css';

function Volume(props) {

    return (
        <button className="Volume" onClick ={ props.handleToggleMute }>
            <VolumeIcon color="white" size={25}/>

            <div className="Volume-range">
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange = {props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volume;