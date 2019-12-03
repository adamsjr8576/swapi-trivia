import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quote: '',
      skillLevel: 'Youngling',
      hasError: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginError = () => {
    const { name, quote, skillLevel } = this.state;
    if (name === '' || quote === '' || skillLevel === '') {
      this.setState({ hasError: true });
    } else {
      this.setState({ hasError: false });
      this.props.handleLogin();
      this.props.handleUserInfo(this.state);
    }
  }

  submitLoginHandler = () => {
    this.handleLoginError();
  }

  render() {
      return (
        <form className='form-login'>
          <h2>Please Login</h2>
            <input
              type='text'
              name='name'
              value={this.state.name}
              placeholder='Enter Name'
              className='input-login'
              onChange={ (e) => this.handleChange(e) }
            />
            <input
              type='text'
              name='quote'
              value={this.state.quote}
              placeholder='Enter Favorite StarWars Quote'
              className='input-login'
              onChange={ (e) => this.handleChange(e) }
            />
          <div className='input-container'>
            <label for="skill">Select:</label>
            <select
              id='skill'
              value={this.state.skillLevel}
              name='skillLevel'
              className='input-select'
              onChange={ (e) => this.handleChange(e) }
            >
              <option value='Youngling'>Youngling</option>
              <option value='Padawan'>Padawan</option>
              <option value='Jedi Master'>Jedi Master</option>
            </select>
          </div>
          {this.state.hasError && <p className='error-message'>Please Fill out all forms</p>}
          <button className='btn-login' type='button' onClick={ () => this.submitLoginHandler() }>Login</button>
        </form>
      )
  }
}

export default Login;
