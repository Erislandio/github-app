import React, { Component } from 'react';
import Logo from '../../assets/Logo';

import './header.css'

class Header extends Component {
    render() {
        return (
            <div id="header" className="header">
                <div className="row">
                    <span className="icon">
                        <Logo />
                    </span>
                    <h1 className="name-aplication">
                        GitHub Search
                    </h1>
                </div>
            </div>
        );
    }
}

export default Header;