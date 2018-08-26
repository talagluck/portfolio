import React from 'react';
import './Components.css'

import { BrowserRouter, Link } from 'react-router-dom';
//Create the css for ActivePage
class Header extends React.Component {
    render() {
        return (
            <div id="Header-wrapper">
                <div className="Header-sub" id="Portfolio-header">
                    <div className={this.props.location.pathname === "/Portfolio" ? "ActivePage" : ""}>
                        <Link to="/Portfolio">portfolio</Link>
                    </div>
                </div>
                <div className="Header-sub" id="About-header">
                    <div className={this.props.location.pathname === "/About" ? "ActivePage" : ""}>
                        <Link to="/About">about</Link>
                    </div>
                </div>
                <div className="Header-sub" id="Blog-header">
                    <div className={this.props.location.pathname === "/Blog" ? "ActivePage" : ""}>
                        <Link to="/Blog">blog</Link>
                    </div>
                </div>
            </div>
        );

    }
}

export default Header;
