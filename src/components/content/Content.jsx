import React, { Component } from 'react';
import './content.css'

class Content extends Component {
    render() {
        return (
            <div id="content">
                <div className="search">
                    <div className="modal">
                        <span className="icon-user">
                                <img src="https://image.flaticon.com/icons/svg/149/149072.svg" width="120px" height="120px" alt="user" />
                        </span>
                        <label>Nome do usuário</label>
                        <input type="text" placeholder="Nome" className="input" id="input-name" />
                        <button type="button" id="btn-search" value="Buscar">
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;