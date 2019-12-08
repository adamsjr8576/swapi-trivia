import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import images from '../.././images/images.js'

const Nav = ({ userInfo, handleLoginError, resetUserInfo }) => {
  return (
    <nav>
      <div className='user-info'>
        <div className='user-inner'>
          <img src={images.falcon} className='i-p' />
          <p className='user-p'><span>Name: </span>{userInfo.name}</p>
          <p className='user-p'><span>Quote: </span>{userInfo.quote}</p>
          <p className='user-p'><span>Skill: </span>{userInfo.skillLevel}</p>
        </div>
      </div>
      <img src={images.starWarsLogo} alt='star wars logo' className='nav-logo' />
      <Link to='/favorites' className='favorites-link'>
        <button className='btn-favorites'>Favorites</button>
      </Link>
      <Link to='/' className='link-logout'>
        <button className='btn-logout' onClick={() => {resetUserInfo(); handleLoginError(false)}}>Logout</button>
      </Link>
    </nav>
  )
}

export default Nav;
