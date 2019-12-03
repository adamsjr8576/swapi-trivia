import React, {Component} from 'react';
import './App.scss';
import Nav from '../Nav/Nav.js'


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
      </body>
    );
  }
}

export default App;
