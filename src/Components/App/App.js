import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav.js';
import Login from '../Login/Login.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      userInfo: {}
    }
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  handleUserInfo = (info) => {
    this.setState({ userInfo: info })
  }

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Login
            handleLogin={this.handleLogin}
            handleUserInfo={this.handleUserInfo}
          />
        </main>
      </div>
    );
  }
}

export default App;
