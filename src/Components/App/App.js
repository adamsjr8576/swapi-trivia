import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav.js';
import Login from '../Login/Login.js';
import MovieContainer from '../MovieContainer/MovieContainer.js';
import Error from '../Error/Error.js';
import CharacterContainer from '../CharacterContainer/CharacterContainer.js';
import Loading from '../Loading/Loading.js';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer.js';
import { Route } from 'react-router-dom';



class App extends Component {
  constructor() {
    super()
    this.state = {
      display: [],
      characters: [],
      favorites: [],
      userInfo: {},
      isLoading: true,
      hasError: true
    }
  }

  componentDidMount = () => {
    fetch('https://swapi.co/api/films/')
      .then(res => res.json())
      .then(data => this.setState({ display: data.results }))
      .then(data => this.setState({ isLoading: false }))
  }

  handleLoginError = (loginStatus) => {
    this.setState({ hasError: loginStatus });
  }

  resetUserInfo = () => {
    this.setState({  hasError: true, userInfo: {}, characters: [], })
  }

  handleUserInfo = (info) => {
    this.setState({ userInfo: info })
  }

  resetCharacters = () => {
    this.setState({ characters: [] })
  }

  handleFavorites = (favorite) => {
    const { favorites } = this.state;
    const filteredFavorites = favorites.filter(character => character.character !== favorite.character);
    favorites.filter(character => character.character === favorite.character).length > 0 ? this.setState({ favorites: filteredFavorites }) : this.setState({ favorites: [...this.state.favorites, favorite] });
  }

  getCharacterData = (id) => {
    this.setState({ isLoading: true })
    fetch('https://swapi.co/api/films/')
    .then(res => res.json())
    .then(data => this.handleCharacterFetch(data, id))
    .then(characterData => this.setState({ characters: characterData, isLoading: false }))
  }

  handleCharacterFetch = (movies, id) => {
    let movieData = movies.results.filter(movie => movie.episode_id === Number(id));
    let firstTenCharacters = movieData[0].characters.slice(0, 10);
    const promises = firstTenCharacters.map(character => {
      return fetch(character)
      .then(res => res.json())
      .then(data => this.handleCharacterInfo(data))
      .then(data => {
        let object1 = data[0];
        let object2 = data[1];
        let array = data[2];
        let infoObject = {
          name: object1.name,
          population: object1.population,
          species: object2.species,
          creature: object2.creature,
          relatedFilms: array,
          character: object2.character,
          openingCrawl: movieData[0].opening_crawl
        }
        return infoObject;
      })
      .catch(err => console.log(err));
    });
    return Promise.all(promises);
  }

  handleCharacterInfo = (character) => {
    const homeWorldInfo = this.handleCharacterHomeworld(character);
    const speciesInfo = this.handleCharacterSpecies(character);
    const relatedFilmsData = this.handleCharacterRelatedFilm(character);
    let filmsPromises = Promise.all(relatedFilmsData)
    let promises = [homeWorldInfo, speciesInfo, filmsPromises];
    return Promise.all(promises);
  }

  handleCharacterHomeworld = (character) => {
    return fetch(character.homeworld)
     .then(res => res.json())
     .then(data => ({
      name: data.name,
      population: data.population
      }))
      .catch(err => console.log(err));
  }

  handleCharacterSpecies = (character) => {
    return fetch(character.species)
    .then(res => res.json())
    .then(data => ({
      species: data.name,
      creature: data.classification,
      character: character.name
    }))
    .catch(err => console.log(err));
  }

  handleCharacterRelatedFilm = (character) => {
    return character.films.map(film => {
      return fetch(film)
      .then(res => res.json())
      .then(data => ({relatedFilms: data.title}))
      .catch(err => console.log(err));
    });
  }

  render() {
    const {display, characters, favorites, userInfo, isLoading, hasError} = this.state;
    return (
      <div className='page-container'>
          <Route path='/movies' render={ () =>
            !hasError &&
              <Nav
                userInfo={userInfo}
                handleLoginError={this.handleLoginError}
                resetUserInfo={this.resetUserInfo}
                favorites={favorites}
              />
            }/>
          <Route exact path='/' render={ () =>
              <Login
                handleLoginError={this.handleLoginError}
                handleUserInfo={this.handleUserInfo}
              />
            }/>
          <Route exact path='/movies' render={ () =>
            {if (hasError) {
              return <Error />
             } else if (isLoading ) {
              return <Loading />
            } else {
             return <MovieContainer
               getCharacterData={this.getCharacterData}
               movieCards={display}
             />
           }}
          }/>
          <Route path='/movies/:movies_id' render={ () => {
            return (
              characters.length ?
               <CharacterContainer
                characters={characters}
                resetCharacters={this.resetCharacters}
                handleFavorites={this.handleFavorites}
              /> :
              <Loading />
            );
          }} />
          <Route path='/favorites' render={ () => {
            return (
              <>
                <Nav
                  userInfo={userInfo}
                  handleLoginError={this.handleLoginError}
                  resetUserInfo={this.resetUserInfo}
                  favorites={favorites}
                />
                <FavoritesContainer
                  favorites={favorites}
                  handleFavorites={this.handleFavorites}
                  resetCharacters={this.resetCharacters}
                />
              </>
            )
          }}/>
      </div>
    );
  }
}

export default App;
