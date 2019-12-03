import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, episode_id, release_date }) => {
  return(
    <article className='article-movie'>
      <h4>{title}</h4>
      <h4>Episode: {episode_id}</h4>
      <h4>Released: {release_date}</h4>
      <button className='btn-characters'>View Characters</button>
    </article>
  )
}

export default MovieCard;