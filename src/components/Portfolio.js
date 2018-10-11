import React from 'react';
import PortfolioItem from './PortfolioItem';
import Gallery from './Gallery';
import AndalusianDisciplinaryStaff from '../ProjectsData/AndalusianDisciplinaryStaff';
import MartialAsclepias from '../ProjectsData/MartialAsclepias';
import Hanging1 from '../ProjectsData/Hanging1';
import Utensils from '../ProjectsData/Utensils';
import TheFairest from '../ProjectsData/TheFairest';
import Moamboea from '../ProjectsData/Moamboea';
import './Components.css'
    
class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            galleryVisible: false,
            galleryItem: ""
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
                    // galleryVisible: true,
                    galleryVisible: !prevState.galleryVisible,
                    galleryItem: item
                }
            }
        )
    }
    render() {
        return (
            <div>
                <div className="PortfolioItemContainer" onClickCapture={this.closeGallery}>
                    <PortfolioItem item={AndalusianDisciplinaryStaff} itemHandleClick={this.handleClick}/>
                    <PortfolioItem item={MartialAsclepias} itemHandleClick={this.handleClick}/>
                    <PortfolioItem item={Hanging1} itemHandleClick={this.handleClick}/>
                    <PortfolioItem item={Utensils} itemHandleClick={this.handleClick}/>
                    <PortfolioItem item={Moamboea} itemHandleClick={this.handleClick}/>
                    <PortfolioItem item={TheFairest} itemHandleClick={this.handleClick}/>
                </div>
                {this.state.galleryVisible ? <Gallery item={this.state.galleryItem} handleClosed={this.closeGallery} /> : null}
            </div>
        )

    }
}

export default Portfolio;
