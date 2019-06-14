import React , { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{

    render(){
        return(
            <div className="Media" onClick={this.props.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                    src={this.props.cover}
                    alt=""
                    width={260}
                    height={160} />
                </div>
                <h3 className="Media-title"> {this.props.title} </h3>
                <p className="Media-author"> {this.props.author} </p>
                <p className="Media-author"> {this.props.type} </p>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['audio','video']),
}

export default Media;