import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import images from '../.././images/images.js';
import PropTypes from 'prop-types';

const Nav = ({ userInfo, handleLoginError, resetUserInfo, favorites, isLoading }) => {
  return (
    <nav>
      <div className='user-info'>
        <div className='user-inner' tabIndex='0'>
          <img src={images.falcon} className='i-p' />
          <p className='user-p'><span>Name:</span>   {userInfo.name}</p>
          <p className='user-p'><span>Quote:</span>   {userInfo.quote}</p>
          <p className='user-p'><span>Skill:</span>   {userInfo.skillLevel}</p>
        </div>
      </div>
      <div className='logo-container'>
        <img src={images.starWarsLogo} alt='star wars logo' className='nav-logo' />
      </div>
      <div className='nav-buttons'>
        <Link to='/favorites' className='favorites-link'>
          <button className='btn-favorites' disabled={isLoading}><img src={images.heart} className='nav-favorites-img' alt='heart icon' /> Favorites: {favorites.length}</button>
        </Link>
        <Link to='/' className='link-logout'>
          <button className='btn-logout' disabled={isLoading} onClick={() => {resetUserInfo(); handleLoginError(false)}}>Logout</button>
        </Link>
      </div>
    </nav>
  )
}

export default Nav;

Nav.propTypes = {
  userInfo: PropTypes.object,
  handleLoginError: PropTypes.func,
  resetUserInfo: PropTypes.func,
  favorites: PropTypes.array
}
