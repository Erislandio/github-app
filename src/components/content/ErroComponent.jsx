import React, { Component } from 'react';

class ErroComponent extends Component {
    render() {
        return (
            <div className="modal-erro">
                <div className="header-erro">
                    ERRO!
                </div>
                <span className="desc-erro">
                    {
                        this.props.erro
                    }
                </span>
            </div>
        );
    }
}

export default ErroComponent;