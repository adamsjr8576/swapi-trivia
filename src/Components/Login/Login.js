import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quote: '',
      skillLevel: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitLoginHandler = () => {
    this.props.handleLogin()
    this.props.handleUserInfo(this.state)
  }

  render() {
    return(
      <form className='form-login'>
        <h2>Please Login</h2>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          className='input-login'
          onChange={ (e) => this.handleChange(e) }
        />
        <input
          type='text'
          name='quote'
          value={this.state.quote}
          placeholder='Favorite StarWars Quote'
          className='input-login'
          onChange={ (e) => this.handleChange(e) }
        />
        <input
          type='text'
          name='skillLevel'
          list='skill'
          value={this.state.skillLevel}
          placeholder="Select Skill Level..."
          className='input-login'
          onChange={ (e) => this.handleChange(e) }
        />
          <datalist id='skill'>
            <option value='Youngling'/>
            <option value='Padawan'/>
            <option value='Jedi Master'/>
          </datalist>
        <button className='btn-login' type='button' onClick={ () => this.submitLoginHandler() }>Login</button>
      </form>
    )
  }
}

export default Login;
