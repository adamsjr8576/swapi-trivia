import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'

const Nav = ({ userInfo, handleLoginError, resetUserInfo }) => {
  return (
    <nav>
      <div className='user-info'>
        <div className='user-inner'>
          <p className='i-p'>i</p>
          <p className='user-p'>{userInfo.name}</p>
          <p className='user-p'>{userInfo.quote}</p>
          <p className='user-p'>{userInfo.skillLevel}</p>
        </div>
      </div>
      <h1>Star Wars</h1>
      <button className='btn-favorites'>Favorites</button>
      <Link to='/'>
        <button className='btn-logout' onClick={() => {resetUserInfo(); handleLoginError(false)}}>Logout</button>
      </Link>
    </nav>
  )
}

export default Nav;

