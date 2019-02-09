import React, { Component } from 'react';
import './content.css'

class Content extends Component {
    render() {
        return (
            <div id="content" className={(this.props.show ? ' open ' : '  ')}>
                {
                    <div className={"search " + (this.props.show ? ' show ' : ' hide ')}>
                        <div className="modal">
                            <span className="close" onClick={event => this.props.hide()}>
                                <img src="https://cdn3.iconfinder.com/data/icons/status/100/close_1-512.png" alt="" width="15px" height="15px" />
                            </span>
                            <span className="icon-user">
                                <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" width="125px" height="125px" alt="user" />
                            </span>
                            <label>Nome do usuário</label>
                            <input type="text" placeholder="Nome" className="input" id="input-name" onChange={event => this.props.search(event.target.value)} />
                            <button type="button" id="btn-search" value="Buscar" onClick={event => this.props.searchOnClick()}>Buscar</button>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Content;