import React from 'react';
import './Components.css'
import arrow from '../assets/Left.png'
class Gallery extends React.Component {
    constructor(){
        super();
        this.state = {
            imageIndex: 0
        };

    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown )
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyDown)

    }

    handleKeyDown = (event) =>{
        console.log(event.keyCode);
        if(event.keyCode==27){
            this.props.handleClosed();
        }


    }
    prevImage = () => {
        this.setState(
            (prevState)=>{
                let newIndex;
                if(prevState.imageIndex === 0){
                    newIndex = this.props.item.images.length-1;
                }else{
                    newIndex = prevState.imageIndex-1;
                }
                return{
                    imageIndex: newIndex
                };
            }
        )
    }
    nextImage = () => {
        this.setState(
            (prevState)=>{
                let newIndex;
                if(prevState.imageIndex === this.props.item.images.length-1){
                    newIndex = 0;
                }else{
                    newIndex = prevState.imageIndex+1;
                }
                return{
                    imageIndex: newIndex
                };
            }
        )
    }


    childHandleClosed = () => {
        this.props.handleClosed();
    }
    render() {
        return (
            <div className="Gallery">
                <span className="closeButton" onClick={this.childHandleClosed}>X</span>
                <div>
                    <span className="arrow leftArrow" onClick={this.prevImage}>
                    <img src={arrow}/>
                    </span>
                    {/* <span className="arrow leftArrow" onClick={this.prevImage}>&lt;</span> */}
                    <span className="arrow rightArrow" onClick ={this.nextImage}>
                    <img src={arrow}/>
                    </span>
                    {/* <span className="arrow rightArrow" onClick ={this.nextImage}>&gt;</span> */}
                </div>
                <img src={this.props.item.images[this.state.imageIndex]} onClick={this.nextImage}></img>
            </div>
        );
    }
}

export default Gallery;
