import React from 'react';
import './Components.css'

class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <img src={this.props.data.images[0]}></img>
            </div>
        );
    }
}

export default Gallery;
