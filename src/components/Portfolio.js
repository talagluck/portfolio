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
            <div className="PortfolioItemContainer">
                <PortfolioItem data={AndalusianDisciplinaryStaff} handleClick={this.handleClick}/>
                <PortfolioItem data={MartialAsclepias} handleClick={this.handleClick}/>
                {this.state.galleryVisible ? <Gallery data={this.state.galleryItem} /> : null}
            </div>
        )

    }
}

export default Portfolio;
