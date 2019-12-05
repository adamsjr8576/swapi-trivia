import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav.js';
import Login from '../Login/Login.js';
import MovieContainer from '../MovieContainer/MovieContainer.js';
import { Route, NavLink, Link } from 'react-router-dom';



class App extends Component {
  constructor() {
    super()
    this.state = {
      display: [],
      isLoading: true,
      userInfo: {},
      characters: [],
      hasError: true
    }
  }

  componentDidMount = () => {
    fetch('https://swapi.co/api/films/')
      .then(res => res.json())
      .then(data => this.setState({ display: data.results }))
  }

  handleLoginError = (loginStatus) => {
    this.setState({ hasError: loginStatus });
  }

  resetUserInfo = () => {
    this.setState({ userInfo: {} })
  }

  handleUserInfo = (info) => {
    this.setState({ userInfo: info })
  }

  getCharacterData = (id) => {
    fetch('https://swapi.co/api/films/')
    .then(res => res.json())
    .then(data => this.handleCharacterFetch(data, id))
    .then(characterData => this.setState({ characters: characterData }))
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
          <Route exact path='/movies' render={ () =>
          !this.state.hasError &&  
            <Nav
              userInfo={this.state.userInfo}
              handleLogin={this.handleLogin}
              resetUserInfo={this.resetUserInfo}
            />
          }/>
        <main>
          <Route exact path='/movies' render={ () => 
          this.state.hasError ? 
            <section>  
              <h3>Error</h3>
              <Link to='/'>
                <button>Back</button>
              </Link>
            </section>  :
          <MovieContainer
          getCharacterData={this.getCharacterData}
          movieCards={this.state.display}
        />
          }/>
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
