import React, {Component} from 'react';
import './App.scss';
import Nav from '../Nav/Nav.js';
import Login from '../Login/Login.js';


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <body>
        <Nav />
        <main>
          <Login />
        </main>
      </body>
    );
  }
}

export default App;
