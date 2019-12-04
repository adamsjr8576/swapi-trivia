import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav.js';
import Login from '../Login/Login.js';
import MovieContainer from '../MovieContainer/MovieContainer.js';



class App extends Component {
  constructor() {
    super()
    this.state = {
      display: [],
      isLoggedIn: false,
      userInfo: {}
    }
  }

  componentDidMount = () => {
    fetch('https://swapi.co/api/films/')
      .then(res => res.json())
      .then(data => this.setState({ display: data.results }))
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  handleUserInfo = (info) => {
    this.setState({ userInfo: info })
  }

  render() {
    console.log(this.state.userInfo)
    return (
      <div className='page-container'>
        <Nav
          userInfo={this.state.userInfo}
        />
        <main>
          {this.state.isLoggedIn ? 
            <MovieContainer 
              movieCards={this.state.display} 
            /> : 
            <Login
              handleLogin={this.handleLogin}
              handleUserInfo={this.handleUserInfo}
            />
          }
        </main>
      </div>
    );
  }
}

export default App;
