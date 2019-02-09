import React, { Component } from 'react';

class SeachDefault extends Component {
    render() {
        return (
            <div className="searchDefault">
                <div className="content">
                    <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/magnifyingglass-512.png" width="150px" height="150px" alt="searchDefault" />
                    <h3>Clique no <strong className="mais">+</strong> para procurar usuário e seus repositórios</h3>
                </div>
            </div>
        );
    }
}

export default SeachDefault;