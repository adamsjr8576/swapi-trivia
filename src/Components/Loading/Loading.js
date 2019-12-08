import React from 'react';
import './Loading.scss';
import images from '../.././images/images.js';

const Loading = () => {
  return (
    <section className='loading-gif-container'>
      <img className='loading-gif' src={images.rider} alt='Gif of space rider' />
    </section>
  )
}

export default Loading;
