import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, episode_id, release_date }) => {
  return(
    <article>
      <h4>{title}</h4>
    </article>
  )
}

export default MovieCard;