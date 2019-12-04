import React from 'react';
import './Nav.scss'

const Nav = ({ userInfo, handleLogin, resetUserInfo }) => {
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
      <button className='btn-logout' onClick={() => {handleLogin(); resetUserInfo()}}>Logout</button>
    </nav>
  )
}

export default Nav;

