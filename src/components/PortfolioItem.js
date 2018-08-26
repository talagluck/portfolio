import React from 'react';
import './Components.css'

class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="PortfolioItem" onClick={()=>{this.props.handleClick(this.props.data)}}>
      <img src={this.props.data.images[0]}></img>
      </div>
    );
  }
}

export default PortfolioItem;
