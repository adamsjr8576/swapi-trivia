import React, { Component } from 'react';
import './Login.scss';
import { Route, Link } from 'react-router-dom';
import starWarsLogo from '../.././images/images.js'


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
        <main>
          <img src={starWarsLogo} alt="star wars logo" className="Login-logo" />
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
              <label for="skill">Skill Level:</label>
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
            <Link to='/movies' className="link-button">
              <button className='btn-login' type='button' onClick={ () => this.loginErrorHandler() }>May The Force Be With You</button>
            </Link>
          </form>
        </main>
      )
  }
}

export default Login;
