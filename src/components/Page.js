import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import NotFound from './NotFound';
import About from './About';
import PortfolioItem from './PortfolioItem';
import './Page.css'

class Page extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>

                    <Route component={Header} className="Header-Component" />
                    <div className="Body-content">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route component={NotFound} />
                    </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Page;
