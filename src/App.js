import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import axios from 'axios'
import Loader from './components/config/Loader';
import SeachDefault from './components/content/SearchDefault';
import RenderRepo from './components/content/RenderRepo';
import ErroComponent from './components/content/ErroComponent'

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      add: false,
      search: '',
      profile: {},
      loader: true,
      repos: [],
      erro: true
    }

  }

  handleSearchUser = () => {
    console.log(this)
    this.setState({ add: !this.state.add })
  }


  handleSearch = (search) => {
    this.setState({ search })
  }
  componentDidMount = () => {
    this.setState({ loader: false })
  }

  handleSearchOnClick = () => {
    axios({
      method: 'get',
      url: `https://api.github.com/users/${this.state.search}`,
      headers: {},
    }).then(res => {
      this.setState({ profile: res })
      if (!res) {
        this.setState({})
      } else {
        axios({
          method: 'get',
          url: `https://api.github.com/users/${this.state.search}/repos`,
          headers: {},
        }).then(res => {
          this.setState({ repos: res })
          if (!res) {
            this.setState({ loader: true })
          }
        })
      }
    }).catch(error => {
      this.setState({ erro: true })
    })
  }

  render() {
    console.log(this)
    return (
      this.state.loader ? <Loader /> : (
        <div className="App">
          <Header add={this.handleSearchUser} />
          {
            this.state.add ? null : <SeachDefault />
          }
          <Content
            search={this.handleSearch}
            show={this.state.add}
            searchOnClick={this.handleSearchOnClick}

            hide={this.handleSearchUser}
          />
          {
            this.state.profile && this.state.repos ? <RenderRepo profile={this.state.profile} repos={this.state.repos} /> : null
          }
          {
            this.state.erro ? <ErroComponent erro="Usuário não encontrado" /> : null
          }
          <Footer />
        </div>
      )
    );
  }
}

export default App;
