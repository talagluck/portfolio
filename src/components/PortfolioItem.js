import React from 'react';
import './Components.css'

class PortfolioItem extends React.Component {
  childHandleClick = (event) => {
    event.stopPropagation();
    console.log(event);
    this.props.itemHandleClick(this.props.item)
  }
  render() {
    return (
      <div className="PortfolioItem" onClick={this.childHandleClick}>
      <img src={this.props.item.images[0]}></img>
      </div>
    );
  }
}

export default PortfolioItem;
