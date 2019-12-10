import React from 'react';
import './Loading.scss';
import images from '../.././images/images.js';

const Loading = () => {
  return (
    <main className="loading-container">
      <h1>Loading...</h1>
      <section className='loading-gif-container'>
        <img className='loading-racer-gif' src={images.rider} alt='Gif of space rider' />
      </section>
    </main>
  )
}

export default Loading;
