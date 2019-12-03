import React, {Component} from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super() 
    this.state = {
      name: '',
      quote: '',
      skillLevel: ''
    }
  }

  render() {
    return(
      <form className='form-login'>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          className='input-login'
        />
        <input
          type='text'
          name='quote'
          value={this.state.quote}
          placeholder='Favorite StarWars Quote'
          className='input-login'
        />
        <select>
          <option>Youngling</option>
          <option>Padawan</option>
          <option>Jedi Master</option>
        </select>
        <button className='btn-login' type='button'>Login</button>
      </form>
    )
  }
}

export default Login;