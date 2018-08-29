import React from 'react';
import PortfolioItem from './PortfolioItem';
import Gallery from './Gallery';
import AndalusianDisciplinaryStaff from '../ProjectsData/AndalusianDisciplinaryStaff';
import MartialAsclepias from '../ProjectsData/MartialAsclepias';
import './Components.css'
    
class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            galleryVisible: false,
            galleryItem: MartialAsclepias
        };
    }

    closeGallery = () =>{
        this.setState(
            () => {
                return {
                    galleryVisible: false
                }
            }
        )
    }
    handleClick = (item) => {
        
        this.setState(
            (prevState) => {
                return {
                    galleryVisible: !prevState.galleryVisible,
                    galleryItem: item
                }
            }
        )
    }
    render() {
        return (
            <div>
                <div className="PortfolioItemContainer" onClick={this.closeGallery}>
                    <PortfolioItem item={AndalusianDisciplinaryStaff} itemHandleClick={this.handleClick}/>
                    <PortfolioItem item={MartialAsclepias} itemHandleClick={this.handleClick}/>
                </div>
                {this.state.galleryVisible ? <Gallery item={this.state.galleryItem} handleClosed={this.closeGallery} /> : null}
            </div>
        )

    }
}

export default Portfolio;
