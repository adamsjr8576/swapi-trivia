import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ title, episode_id, release_date, getCharacterData, poster }) => {
  return(
    <article className='article-movie'>
      <h4 className='movie-card-title'>{title}</h4>
      <div className='movie-card-div'>
        <img src={poster} alt='movie poster' className='poster' />
        <h4>Episode: {episode_id}</h4>
        <h4>Released: {release_date}</h4>
        <Link to={`/movies/:${episode_id}`}>
          <button
            id={episode_id}
            className='btn-characters'
            onClick={ (event) => getCharacterData(event.target.id) }>View Characters</button>
        </Link>
      </div>
    </article>
  )
}

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string,
  episode_id: PropTypes.number,
  release_date: PropTypes.string,
  getCharacterData: PropTypes.func,
  poster: PropTypes.string
}