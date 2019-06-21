import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import Timer from '../components/timer';
import Volume from '../components/volume';
import Spinner from '../components/spinner';
import Fullscreen from '../components/fullscreen';
import ProgressBar from '../components/progress-bar';
import Controls from '../components/video-player-controls';
import PlayPause from '../components/play-pause';


function leftPad(number) {
    const pad = '00';
    return pad.substring(0 , pad.length - number.length ) + number;
}

function formattedTime(secs){
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);

    return `${minutes}:${ leftPad( seconds.toString() )}`
}

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime : 0,
        loading: false,
        muted: false,
    }

    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause,
        })
    }

    // Cambiar Estado luego de cargar el componente.
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay),
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration,
        })
    }
    
    handleTimeUpdate = event => {
        // console.log(this.video.currentTime)
        this.setState({
            currentTime: this.video.currentTime,   
        })
    }
    
    handleProgressChange = event => {
        // Recibo el valor al cual moví el progress bar 
        this.video.currentTime = event.target.value;
    }
    
    handleVolumeChange = event => {
        // Recibo el valor para modificar el volumen del video. 
        this.video.volume = event.target.value;
    }

    handleToggleMute = event => {
        // Esto no esta bien. Ya que el evento se ejecuta cuando le das clic a cualquier elemento y no deberia de ser asi, solo al icono.
        this.setState({
            muted: !this.state.muted,
        })
    }

    handleFullScreenClick = event => {
        if( !document.webkitFullScreen ){
            this.player.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen();
        }
    }

    handleSeeking = event => {
        this.setState({
            loading: true,
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false,
        })
    }

    setRef = element => {
        this.player = element
    }

    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title={this.props.title} />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay} />

                    <Timer
                        duration={ formattedTime(this.state.duration) }
                        currentTime = { formattedTime(this.state.currentTime) }
                    />
                    <ProgressBar 
                        duration={this.state.duration} 
                        handleProgressChange = { this.handleProgressChange}
                        actualValue={this.state.currentTime} />

                    <Volume handleToggleMute = { this.handleToggleMute } handleVolumeChange = { this.handleVolumeChange } />

                    <Fullscreen handleFullScreenClick = { this.handleFullScreenClick }/>
                </Controls>
                <Spinner active = {this.state.loading}  /> 
                <Video
                    pause= { this.state.pause }
                    muted = {this.state.muted }
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate = { this.handleTimeUpdate}
                    handleSeeking = { this.handleSeeking}
                    handleSeeked = { this.handleSeeked}
                    src={this.props.src}
                    autoplay={this.props.autoplay} />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;