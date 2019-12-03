import React from 'react';
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <button className='btn-info'>i</button>
      <h1>Star Wars</h1>
      <button className='btn-favorites'>Favorites</button>
      <button className='btn-logout'>Logout</button>
    </nav>
  )

}

export default Nav;