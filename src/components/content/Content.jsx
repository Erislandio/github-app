import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div id="content">
                <div className="search">
                    <div className="modal">
                        <label>Nome do usuário</label>
                        <input type="text" placeholder="Nome" className="input" id="input-name" />
                        <button type="button" id="btn-search" value="Buscar"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;