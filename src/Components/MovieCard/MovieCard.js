import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';


const MovieCard = ({ title, episode_id, release_date, getCharacterData }) => {
  return(
    <article className='article-movie'>
      <h4>{title}</h4>
      <h4>Episode: {episode_id}</h4>
      <h4>Released: {release_date}</h4>
      <Link to={`/movies/:${episode_id}`}>
        <button
          id={episode_id}
          className='btn-characters'
          onClick={ (event) => getCharacterData(event.target.id) }>View Characters</button>
      </Link>
    </article>
  )
}

export default MovieCard;
