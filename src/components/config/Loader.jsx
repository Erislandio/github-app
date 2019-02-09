import React, { Component } from 'react';
import './loader.css'

class Loader extends Component {
    render() {
        return (
            <div className="container">
                <div className="item item-1"></div>
                <div className="item item-2"></div>
                <div className="item item-3"></div>
                <div className="item item-4"></div>
            </div>
        );
    }
}

export default Loader;