import React, { Component } from 'react';
import './Login.scss';
import { Route, Link } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quote: '',
      skillLevel: 'Youngling',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginErrorHandler = () => {
    const { name, quote, skillLevel } = this.state;
    if (name === '' || quote === '' || skillLevel === '') {
      this.props.handleLoginError(true)
    } else {
      this.props.handleUserInfo(this.state);
      this.props.handleLoginError(false)

    }
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
          <Link to='/movies'>
            <button className='btn-login' type='button' onClick={ () => this.loginErrorHandler() }>Login</button>
          </Link>
        </form>
      )
  }
}

export default Login;
