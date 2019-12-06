import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav.js';
import Login from '../Login/Login.js';
import MovieContainer from '../MovieContainer/MovieContainer.js';
import Error from '../Error/Error.js';
import CharacterContainer from '../CharacterContainer/CharacterContainer.js';
import { Route } from 'react-router-dom';



class App extends Component {
  constructor() {
    super()
    this.state = {
      display: [],
      characters: [],
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
    const homeWorldInfo = fetch(character.homeworld)
     .then(res => res.json())
     .then(data => ({
      name: data.name,
      population: data.population
      }))
      .catch(err => console.log(err));
    const speciesInfo = fetch(character.species)
    .then(res => res.json())
    .then(data => ({
      species: data.name,
      creature: data.classification,
      character: character.name
    }))
    .catch(err => console.log(err));
    const relatedFilmsData = character.films.map(film => {
      return fetch(film)
      .then(res => res.json())
      .then(data => ({relatedFilms: data.title}))
      .catch(err => console.log(err));
    });
    let filmsPromises = Promise.all(relatedFilmsData)
    let promises = [homeWorldInfo, speciesInfo, filmsPromises];
    return Promise.all(promises);
  }

  render() {
    return (
      <div className='page-container'>
          <Route path='/movies' render={ () =>
            !this.state.hasError &&  
              <Nav
                userInfo={this.state.userInfo}
                handleLoginError={this.handleLoginError}
                resetUserInfo={this.resetUserInfo}
              />
            }/>
        <main>
          <Route exact path='/movies' render={ () => 
            {if (this.state.hasError) {
              return <Error />
             } else if (this.state.isLoading ) {
              return <h2>Loading...</h2>
            } else {
             return <MovieContainer
               getCharacterData={this.getCharacterData}
               movieCards={this.state.display}
             />
           }}
          }/>
          <Route path='/movies/:movies_id' render={ () => {
            return(
              this.state.characters.length ? 
               <CharacterContainer 
                characters={this.state.characters}
              /> :
              <h2>Loading...</h2>
            )
          }} />
        </main>
        <Route exact path='/' render={ () =>             
            <Login
              handleLoginError={this.handleLoginError}
              handleUserInfo={this.handleUserInfo}
            />
          }/>
      </div>
    );
  }
}

export default App;
