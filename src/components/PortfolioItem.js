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
      <div className="PortfolioItem" style={{backgroundImage: "url("+this.props.item.images[0]+")"}} onClick={this.childHandleClick}>
      
      </div>
    );
  }
}

export default PortfolioItem;
