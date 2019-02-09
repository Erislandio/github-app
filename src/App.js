import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      add: false
    }

    this.handleSearchUser = this.handleSearchUser.bind(this)

  }

  handleSearchUser() {
    console.log(this)
    this.setState({ add: true })
  }

  render() {
    return (
      <div className="App">
        <Header add={this.handleSearchUser} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
